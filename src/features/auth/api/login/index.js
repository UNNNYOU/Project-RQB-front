"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Routes, Settings } from "@/config";
import { currentUserState } from "@/features/auth/api";
import { useAuth } from "@/hooks/useAuth";
import { fetcher } from "@/lib";

const Login = () => {
  const params = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { setAccessToken, getAccessToken } = useAuth();
  const setCurrentUser = useSetRecoilState(currentUserState);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (hasFetched) return;

    const token = params.get("token") || getAccessToken();
    if (token) {
      setAccessToken(token);
      fetcher(`${Settings.API_URL}/auth/me`).then((current_user) => {
        setCurrentUser({
          uuid: current_user.uuid,
          name: current_user.name,
          github_uid: current_user.github_uid,
          term: current_user.term,
          profile: current_user.profile,
        });
        setHasFetched(true);
      });
    } else {
      const currentPath = pathName;
      if (currentPath !== Routes.home && currentPath !== Routes.login) {
        router.push(Routes.home);
      }
    }
  }, [params, getAccessToken, setAccessToken, setCurrentUser, hasFetched, router, pathName]);
  return null;
};

export default Login;
