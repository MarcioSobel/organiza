"use client";
import {
  CalendarDots,
  ChartLineUp,
  House,
  Icon,
  PiggyBank,
  Receipt,
  SignOut,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  isOpened: boolean;
}

type SidebarButton = {
  path: `/${string}`;
  label: string;
  icon: Icon;
};

export function SidebarButtons({ isOpened }: SidebarButtonProps) {
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
    {
      path: "/reminders",
      label: "Lembretes",
      icon: CalendarDots,
    },
  ];

  return (
    <div className="flex sm:flex-col justify-evenly sm:justify-start w-full h-full gap-2">
      {buttons.map((button, key) => {
        const selected = currentPath === button.path;
        const Icon = button.icon;

        return (
          <Link key={key} href={button.path} passHref>
            <button
              className={`flex w-full gap-3 self-start items-center rounded-md p-2 ${selected ? "bg-off-grey" : "bg-transparent hover:bg-off-grey/50"} overflow-hidden`}
            >
              <div className="flex justify-center items-center">
                <Icon size={32} weight={selected ? "fill" : "regular"} />
              </div>
              <p className="hidden sm:inline whitespace-nowrap">
                {button.label}
              </p>
            </button>
          </Link>
        );
      })}

      <Link
        href="/"
        className="p-2 w-fit sm:w-full sm:mt-auto rounded-md bg-off-grey hover:bg-[#555555] whitespace-nowrap"
      >
        <button className="flex items-center gap-3 justify-center w-full">
          <SignOut size={32} />
          {isOpened && <p className="text-xl hidden sm:inline">Sair</p>}
        </button>
      </Link>
    </div>
  );
}
