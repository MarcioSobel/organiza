import Image from "next/image";
import { CardRegister } from "./_components/card-register";

export default function Register() {
  return (
    <div className="flex gap-24 m-auto px-6 justify-center items-center w-full h-[100dvh] bg-white text-off-black">
      <Image
        src="/tablet-login-1.png"
        alt="login-background"
        width={0}
        height={0}
        sizes={"100vw"}
        className="w-fit h-fit hidden md:block"
      />
      <CardRegister />
    </div>
  );
}
