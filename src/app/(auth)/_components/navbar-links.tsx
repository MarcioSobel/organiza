import Link from "next/link";
import { useState } from "react";

type Link = {
  label: string;
  path: `/${string}`;
};

export function AuthNavBarLinks() {
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
    <div className="flex gap-6 justify-center">
      {links.map((link, key) => (
        <NavbarLink href={link.path} key={key}>
          <button className="whitespace-nowrap text-white">{link.label}</button>
        </NavbarLink>
      ))}
    </div>
  );
}

interface AuthNavBarLinkProps {
  href: string;
  index?: number;
  children?: React.ReactNode;
}

function NavbarLink({ index, href, children }: AuthNavBarLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const updateIsHovered = () => setIsHovered((prev) => !prev);

  return (
    <Link
      key={index}
      href={href}
      passHref
      className="group flex flex-col px-2 py-1"
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
