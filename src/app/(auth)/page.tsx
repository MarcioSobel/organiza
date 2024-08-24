"use client";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();

  const handleButton = () => {
    router.push("/home");
  };

  return (
    <>
      <p>Pagina de login/cadastro</p>
      <button onClick={handleButton}>Ir para o dashboard</button>
    </>
  );
}
