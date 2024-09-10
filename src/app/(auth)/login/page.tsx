import Image from "next/image";
import { CardLogin } from "./_components/card-login";

export default function Login() {
  return (
    <div className="flex gap-24 m-auto px-6 justify-center items-center w-full h-[100dvh] bg-white text-off-black">
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
  );
}
