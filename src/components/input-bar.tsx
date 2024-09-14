import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TriangleAlert } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  label?: string;
  register?: ReturnType<UseFormRegister<object>>;
  errors?: FieldErrors<object>;
}
export function InputBar({
  type,
  label,
  register,
  errors,
  ...props
}: InputProps) {
  let error: string | undefined;
  if (register && errors) {
    const { name } = register as { name: string };
    const errorObj = errors as Record<string, { message: string }>;
    error = errorObj[name]?.message;
  }

  return (
    <div className="py-2">
      <div className="flex gap-3 items-center justify-between">
        {label && <p className="font-medium">{label}</p>}
        {error && (
          <div className="flex items-center justify-start gap-1">
            <TriangleAlert size={20} color="#f3201d" />
            <p className="text-semantic-no">{error}</p>
          </div>
        )}
      </div>
      <Input
        {...props}
        type={type}
        {...(register || {})}
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
