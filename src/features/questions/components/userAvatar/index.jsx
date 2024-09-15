import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/config";

const UserAvatar = ({ user }) => {

  console.log("user", user);

  return (
    <Link
      href={Routes.user(user.uuid)}
      className="transition-all hover:opacity-70"
    >
      {(user.avatar && !user.avatar.endsWith("http://localhost:3000")) ? (
        <Image src={user.avatar} width={64} height={64} alt={user?.name}
          unoptimized />
      ) : (
        <div className="size-16 rounded-full bg-orange-400" />
      )}
    </Link>
  );
};

export default UserAvatar;
