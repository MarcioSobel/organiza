"use client";
import { useState } from "react";
import { SidebarButtons } from "./sidebar-buttons";
import { Logo } from "@/components/logo";
import { List as MenuIcon } from "@phosphor-icons/react";
import { LogoutButton } from "./logout-button";
import { useRouter } from "next/navigation";

export function Sidebar() {
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();

  const handleExpand = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <aside
      className={`flex flex-col bg-off-black p-3 gap-8 h-[100dvh] ${isOpened ? "w-[236px]" : "w-[74px]"} transition-[width] overflow-hidden text-white`}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <MenuIcon
          className={`cursor-pointer ${isOpened ? "self-end" : ""}`}
          onClick={handleExpand}
          size={32}
        />
        <Logo showText={isOpened} onClick={() => router.push("/home")} />
      </div>
      <div className="flex flex-col h-full justify-between">
        <SidebarButtons />
        <LogoutButton showText={isOpened} />
      </div>
    </aside>
  );
}
