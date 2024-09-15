import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/config";

const UserAvatar = ({ user }) => {

  return (
    <div className="flex aspect-square w-16 items-start justify-center">
      <Link
        href={Routes.user(user.uuid)}
        className="transition-all hover:opacity-70"
      >
        {(user.avatar && !user.avatar.endsWith("http://localhost:3000")) ? (
          <Image src={user.avatar} width={64} height={64} alt={user?.name}
            unoptimized
            className="size-full rounded-full object-cover"
          />
        ) : (
          <div className="size-16 rounded-full bg-orange-400" />
        )}
      </Link>
    </div>
  );
};

export default UserAvatar;
