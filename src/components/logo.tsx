import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  showText?: boolean;
  size?: number;
  onClick?: () => void;
  darkMode?: boolean;
}

export function Logo({ showText, onClick, size = 32, darkMode }: LogoProps) {
  return (
    <div
      className={cn(
        `flex gap-2 overflow-hidden ${onClick ? "cursor-pointer" : ""} ${darkMode ? "text-off-black" : "text-white"}`,
      )}
      onClick={onClick}
    >
      <Image
        src={darkMode ? "/organiza-dark.svg" : "/organiza.svg"}
        alt="Organiza"
        className="pointer-events-none"
        width={size}
        height={size}
        priority
      />
      {showText && <p className="text-2xl select-none pb-0.5">Organiza</p>}
    </div>
  );
}
