"use client";
import { Logo } from "@/components/logo";
import { AuthNavBarLinks } from "./navbar-links";
import { Menu } from "lucide-react";
import { useState } from "react";

export function AuthNavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const updateSidebarOpen = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      <div className="flex sm:justify-between justify-start gap-4 items-center p-4 bg-off-black fixed w-full top-0">
        <Menu
          className="block sm:hidden cursor-pointer"
          color="white"
          onClick={updateSidebarOpen}
        />
        <div className="flex gap-8 items-center">
          <Logo showText />
          <AuthNavBarLinks />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-screen h-screen ${sidebarOpen ? "bg-black/50 backdrop-blur-md pointer-events-auto" : "bg-transparent backdrop-blur-0 pointer-events-none"} transition-all z-10`}
        onClick={updateSidebarOpen}
      >
        <div
          className={`w-fit h-[100dvh] fixed shadow-2xl shadow-black/75 top-0 ${sidebarOpen ? "-left-0" : "-left-full"} flex flex-col gap-8 p-4 bg-off-black transition-all duration-300 z-20`}
        >
          <div className="flex items-center gap-2">
            <Menu color="white" className="cursor-pointer" />
            <Logo showText />
          </div>
          <AuthNavBarLinks orientation="vertical" />
        </div>
      </div>
    </>
  );
}
