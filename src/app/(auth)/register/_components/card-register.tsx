"use client";

import { InputBar } from "@/components/input-bar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CardRegister() {
  const [isHovered, setIsHovered] = useState(false);
  const updateIsHovered = () => setIsHovered((prev) => !prev);

  const router = useRouter();

  const createAccount = () => {
    router.push("/home");
  };

  const goToLoginPage = () => {
    router.push("/login");
  };

  return (
    <Card
      className="bg-off-white border-off-black border-2 min-w-fit"
      style={{ boxShadow: "2px 2px #2C2C2C" }}
    >
      <CardHeader className="pb-0 pt-6 px-3 items-center font-roboto-slab">
        <CardTitle className="text-off-black">Crie sua conta</CardTitle>
      </CardHeader>

      <div className="flex justify-center my-6">
        <Separator
          orientation="horizontal"
          className="bg-off-grey/50 w-[90%]"
        />
      </div>

      <CardContent className="pb-4">
        <div className="flex gap-4">
          <InputBar label="Nome" />
          <InputBar label="Sobrenome" />
        </div>
        <InputBar label="E-mail" type="email" />
        <InputBar label="Senha" type="password" />
        <InputBar label="Confirmar senha" type="password" />
      </CardContent>

      <CardFooter className="flex flex-col justify-center gap-2">
        <Button className="w-full active:bg-black" onClick={createAccount}>
          Criar conta
        </Button>

        <div className="flex items-baseline">
          <p className="whitespace-nowrap">Já possui uma conta?&nbsp;</p>

          <div
            className="flex flex-col group cursor-pointer"
            onMouseEnter={updateIsHovered}
            onMouseLeave={updateIsHovered}
            onClick={goToLoginPage}
          >
            <Button
              variant="link"
              className="p-0 h-fit text-base font-bold hover:no-underline"
            >
              Faça seu login aqui.
            </Button>
            <div
              className={`w-0 h-px bg-off-black ${isHovered ? "self-start" : "self-end"} transition-[width] group-hover:w-full`}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
