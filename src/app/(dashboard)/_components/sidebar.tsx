"use client";
import { useState } from "react";
import { SidebarButtons } from "./sidebar-buttons";
import { Logo } from "./logo";
import { List } from "@phosphor-icons/react";
import { LogoutButton } from "./logout-button";

export function Sidebar() {
  const [isOpened, setIsOpened] = useState(true);

  const handleExpand = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <aside
      className={`flex flex-col bg-[#2C2C2C] p-3 gap-8 h-screen ${isOpened ? "w-[230px]" : "w-[74px]"} transition-all overflow-hidden`}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <List
          className={`cursor-pointer ${isOpened ? "self-end" : ""}`}
          onClick={handleExpand}
          size={32}
        />
        <Logo showText={isOpened} />
      </div>
      <div className="flex flex-col h-full justify-between">
        <SidebarButtons />
        <LogoutButton showText={isOpened} />
      </div>
    </aside>
  );
}
