"use client";
import {
  ChartLineUp,
  House,
  Icon,
  PiggyBank,
  Receipt,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarButton = {
  path: `/${string}`;
  label: string;
  icon: Icon;
};

export function SidebarButtons() {
  const currentPath = usePathname();
  const buttons: SidebarButton[] = [
    {
      path: "/home",
      label: "Início",
      icon: House,
    },
    {
      path: "/investments",
      label: "Investimentos",
      icon: ChartLineUp,
    },
    {
      path: "/budgets",
      label: "Orçamentos",
      icon: PiggyBank,
    },
    {
      path: "/receipts",
      label: "Receitas e despesas",
      icon: Receipt,
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {buttons.map((button, key) => {
        const selected = currentPath === button.path;
        const Icon = button.icon;

        return (
          <Link key={key} href={button.path} passHref>
            <button
              className={`flex w-full gap-3 self-start items-center rounded-md p-2 ${selected ? "bg-[#444444]" : "bg-transparent hover:bg-[#444444]/50"} overflow-hidden`}
            >
              <div className="flex justify-center items-center">
                <Icon size={32} weight={selected ? "fill" : "regular"} />
              </div>
              <p className="whitespace-nowrap">{button.label}</p>
            </button>
          </Link>
        );
      })}
    </div>
  );
}
