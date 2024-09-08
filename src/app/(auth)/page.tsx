"use client";
import { AuthNavBar } from "./_components/navbar";
import { CardLogin } from "./_components/card-login";
import Image from "next/image";

export default function Auth() {
  return (
    <>
      <div className="flex gap-24 m-auto px-6 justify-center items-center w-full h-screen bg-white text-off-black">
        <Image
          src="/computer-login-1.png"
          alt="login-background"
          width={0}
          height={0}
          sizes={"100vw"}
          className="w-fit h-fit hidden md:block"
        />
        <CardLogin />
      </div>
      <AuthNavBar />
    </>
  );
}
