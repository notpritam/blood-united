"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/assets/img/logo.png";

const Header = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <header className="w-full fixed top-4 m-auto flex items-center justify-center">
      <nav className="flex bg-white shadow-lg  top-0 w-[90%] rounded-3xl items-center justify-between p-4 pl-12 pr-12 ">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Blood United Logo"
              height={40}
              width={40}
            ></Image>
            <span className="text-[1.35rem] tracking-wide font-medium">
              Blood United
            </span>
          </Link>
        </div>
        <div className="flex gap-4  items-center text-[1.2rem]">
          <Link href={"/find"}>Find Donor</Link>
          <Link href={"/register"}>Add Donor</Link>
          <Link href={"/eligibile"}>Eligibilty</Link>

          {!isLoaded || !userId ? (
            <Link href={"/sign-in"}>Sign In</Link>
          ) : (
            <UserButton afterSignOutUrl="/"></UserButton>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
