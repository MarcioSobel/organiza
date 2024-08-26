import { Logo } from "@/components/logo";
import { AuthNavBarLinks } from "./navbar-links";

export function AuthNavBar() {
  return (
    <div className="flex justify-between bg-[#2C2C2C] fixed w-full">
      <div className="flex p-4 gap-8 items-center">
        <Logo showText />
        <AuthNavBarLinks />
      </div>
    </div>
  );
}