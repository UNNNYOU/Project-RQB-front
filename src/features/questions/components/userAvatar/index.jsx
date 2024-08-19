import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { Routes } from "@/config";

const fetcher = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

const UserAvatar = ({ userId }) => {
  const { data: user } = useSWR(`/api/users/${userId}`, fetcher, {
    fallbackData: { uuid: userId, name: "", avatar: "" },
  });

  return (
    <Link
      href={Routes.user(user?.uuid || userId)}
      className="transition-all hover:opacity-70"
    >
      {user?.avatar ? (
        <Image src={user.avatar} width={64} height={64} alt={user.name} />
      ) : (
        <div className="size-16 rounded-full bg-orange-400" />
      )}
    </Link>
  );
};

export default UserAvatar;
