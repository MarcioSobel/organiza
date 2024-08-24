import Image from "next/image";

interface LogoProps {
  showText?: boolean;
  size?: number;
}

export function Logo({ showText, size = 32 }: LogoProps) {
  return (
    <div className="flex items-center gap-2 pointer-events-none overflow-hidden">
      <Image
        src="/organiza.svg"
        alt="Organiza"
        width={size}
        height={size}
        priority
      />
      {showText && <p className="text-2xl select-none">Organiza</p>}
    </div>
  );
}
