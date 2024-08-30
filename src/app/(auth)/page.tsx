"use client";
import { useRouter } from "next/navigation";
import { AuthNavBar } from "./_components/navbar";
import { LoginCard } from "@/components/card";

export default function Auth() {
  const router = useRouter();

  const handleButton = () => {
    router.push("/home");
  };

  return (
    <>
      <AuthNavBar />
      <div className="flex flex-col gap-1 justify-center items-center w-full h-screen bg-white text-off-black">
        <LoginCard />
        <p>Pagina de login/cadastro</p>
        <button onClick={handleButton}>
          <strong>Ir para o dashboard</strong>
        </button>
      </div>
    </>
  );
}
