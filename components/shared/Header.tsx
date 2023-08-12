"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/assets/img/logo.png";

const Header = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <nav className="flex sticky bg-white  top-0 w-full items-center justify-between p-4 pl-12 pr-12 ">
      <div>
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={logo}
            alt="Blood United Logo"
            height={40}
            width={40}
          ></Image>
          <span className="text-[1.25rem]">Blood United</span>
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Link href={"/find"}>Find Donor</Link>
        <Link href={"/register"}>Become Donor</Link>
        <Link href={"/eligibilty"}>Eligibilty</Link>

        {!isLoaded || !userId ? (
          <Link href={"/sign-in"}>Sign In</Link>
        ) : (
          <UserButton afterSignOutUrl="/"></UserButton>
        )}
      </div>
    </nav>
  );
};

export default Header;
