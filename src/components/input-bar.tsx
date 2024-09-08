import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  label?: string;
}
export function InputBar({ type, label, ...props }: InputProps) {
  return (
    <div className="py-2">
      {label && <p className="font-medium">{label}</p>}
      <Input
        {...props}
        type={type}
        className={cn(
          // disable default ring highlight
          "focus-visible:ring-transparent focus-visible:ring-offset-0",
          "bg-white border-[1px] border-off-black shadow-[0px_0px] shadow-off-black",
          "focus:shadow-[2px_2px] focus:shadow-off-black focus:border-2 transition-[box-shadow]",
          props.className,
        )}
      />
    </div>
  );
}
