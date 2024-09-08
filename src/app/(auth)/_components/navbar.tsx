import { Logo } from "@/components/logo";
import { AuthNavBarLinks } from "./navbar-links";

export function AuthNavBar() {
  return (
    <div className="flex justify-between bg-off-black fixed w-full top-0">
      <div className="flex p-4 gap-8 items-center">
        <Logo showText />
        <AuthNavBarLinks />
      </div>
    </div>
  );
}
