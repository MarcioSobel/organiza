import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  label?: string;
}
export function InputBar({ type, label, ...props }: InputProps) {
  return (
    <div className="my-2">
      {label && <p className="font-medium">{label}</p>}
      <Input
        type={type}
        className={cn(
          "bg-white border-off-black border-[1px] shadow-offset shadow-off-black px-2",
          props.className,
        )}
        {...props}
      />
    </div>
  );
}
