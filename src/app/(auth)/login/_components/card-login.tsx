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
import { toast } from "@/hooks/use-toast";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const authenticationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type AuthenticationSchema = z.infer<typeof authenticationSchema>;

export function CardLogin() {
  const [isHovered, setIsHovered] = useState(false);
  const updateIsHovered = () => setIsHovered((prev) => !prev);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticationSchema>();

  const goToHomepage = () => {
    router.push("/");
  };

  const goToRegisterPage = () => {
    router.push("/register");
  };

  const handleLogin = (data: AuthenticationSchema) => {
    api
      .authenticate(data)
      .then(goToHomepage)
      .catch(() => {
        toast({
          title: "E-mail ou senha inválidos.",
          variant: "destructive",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Card
        className="bg-off-white border-off-black border-2 min-w-fit"
        style={{ boxShadow: "2px 2px #2C2C2C" }}
      >
        <CardHeader className="pb-0 pt-6 px-3 items-center font-roboto-slab">
          <CardTitle className="text-off-black">Fazer login</CardTitle>
        </CardHeader>

        <div className="flex justify-center my-6">
          <Separator
            orientation="horizontal"
            className="bg-off-grey/50 w-[90%]"
          />
        </div>

        <CardContent className="pb-4">
          <InputBar
            label="E-mail"
            type="email"
            register={register("email")}
            errors={errors}
          />
          <InputBar
            label="Senha"
            type="password"
            register={register("password")}
            errors={errors}
          />
        </CardContent>

        <CardFooter className="flex flex-col justify-center gap-2">
          <Button className="w-full active:bg-black" type="submit">
            Entrar
          </Button>

          <div className="flex items-baseline">
            <p className="whitespace-nowrap">Não possui uma conta?&nbsp;</p>

            <div
              className="flex flex-col group cursor-pointer"
              onMouseEnter={updateIsHovered}
              onMouseLeave={updateIsHovered}
              onClick={goToRegisterPage}
            >
              <Button
                type="button"
                variant="link"
                className="p-0 h-fit text-base font-bold hover:no-underline"
              >
                Crie uma aqui.
              </Button>
              <div
                className={`w-0 h-px bg-off-black ${isHovered ? "self-start" : "self-end"} transition-[width] group-hover:w-full`}
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
