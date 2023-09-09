"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <header className="w-full fixed top-4 m-auto flex items-center z-[999] backdrop-blur-md backdrop-opacity-10 justify-center">
      <nav className="flex bg-white shadow-lg  top-0 w-[90%] rounded-3xl items-center justify-between p-4 pl-12 pr-12 ">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={"/assets/img/Logo.svg"}
              alt="Blood United Logo"
              height={40}
              width={40}
            ></Image>
            <span className="text-[1.45rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text bg-300% animate-gradient tracking-wide font-medium">
              Blood United
            </span>
          </Link>
        </div>
        <div className="flex gap-4  items-center tracking-wide text-[1.2rem]">
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
