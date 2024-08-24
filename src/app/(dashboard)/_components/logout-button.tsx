import { SignOut } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  showText?: boolean;
}

export function LogoutButton({ showText }: LogoutButtonProps) {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 py-2 justify-center w-full rounded-md bg-[#444444] hover:bg-[#555555] whitespace-nowrap"
    >
      <SignOut size={32} />
      {showText && <p className="text-xl">Sair</p>}
    </button>
  );
}
