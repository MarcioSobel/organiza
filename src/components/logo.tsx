import Image from "next/image";

interface LogoProps {
  showText?: boolean;
  size?: number;
  onClick?: () => void;
}

export function Logo({ showText, onClick, size = 32 }: LogoProps) {
  return (
    <div
      className={`flex gap-2 overflow-hidden text-white ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <Image
        src="/organiza.svg"
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
