"use client";
import Link from "next/link";
import { useState } from "react";

type Link = {
  label: string;
  path: `/${string}`;
};

interface AuthNavBarLinkProps {
  orientation?: "horizontal" | "vertical";
}

export function AuthNavBarLinks({
  orientation = "horizontal",
}: AuthNavBarLinkProps) {
  const links: Link[] = [
    {
      label: "Início",
      path: "/",
    },
    {
      label: "Quem somos?",
      path: "/about",
    },
    {
      label: "Suporte",
      path: "/support",
    },
  ];

  return (
    <div
      className={`flex ${orientation === "horizontal" ? "gap-6 justify-center" : "flex-col gap-2 items-start"}`}
    >
      {links.map((link, key) => (
        <NavbarLink href={link.path} key={key} orientation={orientation}>
          <button className="whitespace-nowrap text-white">{link.label}</button>
        </NavbarLink>
      ))}
    </div>
  );
}

interface NavBarLinkProps {
  orientation: "vertical" | "horizontal";
  href: string;
  index?: number;
  children?: React.ReactNode;
}

function NavbarLink({ orientation, index, href, children }: NavBarLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const updateIsHovered = () => setIsHovered((prev) => !prev);

  return (
    <Link
      key={index}
      href={href}
      passHref
      className={`group ${orientation === "horizontal" ? "sm:flex hidden px-2" : "flex pl-px"} flex-col py-1`}
      onMouseEnter={updateIsHovered}
      onMouseLeave={updateIsHovered}
    >
      {children}
      <div
        className={`w-0 h-px bottom-px bg-white ${isHovered ? "self-start" : "self-end"} transition-[width] group-hover:w-full`}
      />
    </Link>
  );
}
