"use client";
import { useState } from "react";
import { SidebarButtons } from "./sidebar-buttons";
import { Logo } from "@/components/logo";
import { List as MenuIcon } from "@phosphor-icons/react";

export function Sidebar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <aside
      className={`flex flex-col bg-off-black p-3 gap-8 h-fit sm:h-[100dvh] w-screen ${isOpened ? "sm:w-[236px]" : "sm:w-[74px]"} transition-[width] overflow-hidden text-white`}
      onMouseEnter={() => setIsOpened(true)}
      onMouseLeave={() => setIsOpened(false)}
    >
      <div className="sm:flex flex-col justify-center items-center gap-2 hidden">
        <MenuIcon
          className={`cursor-pointer ${isOpened ? "self-end" : ""}`}
          size={32}
        />
        <Logo showText={isOpened} />
      </div>
      <div className="flex sm:flex-col h-full justify-between">
        <SidebarButtons isOpened={isOpened} />
      </div>
    </aside>
  );
}
