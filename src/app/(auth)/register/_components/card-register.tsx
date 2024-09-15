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
import { useToast } from "@/hooks/use-toast";
import api from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerUserSchema = z
  .object({
    name: z.string().min(1, "Obrigatório."),
    surname: z.string().nullable().default(null),
    email: z.string().email("E-mail inválido."),
    password: z.string().min(3, "Insira uma senha maior."),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

type RegisterUserSchema = z.infer<typeof registerUserSchema>;

export function CardRegister() {
  const [isHovered, setIsHovered] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  const router = useRouter();
  const { toast } = useToast();

  const goToLoginPage = () => {
    router.push("/login");
  };

  function handleCreateAccount(data: RegisterUserSchema) {
    api.createUser(data).catch(() => {
      toast({
        title: "Usuário já cadastrado.",
        description: "Este e-mail já está sendo utilizado.",
        variant: "destructive",
      });
    });

    goToLoginPage();
  }

  const updateIsHovered = () => setIsHovered((prev) => !prev);

  return (
    <form onSubmit={handleSubmit(handleCreateAccount)}>
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
            <InputBar
              label="Nome"
              register={register("name")}
              errors={errors}
            />
            <InputBar label="Sobrenome" register={register("surname")} />
          </div>
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
          <InputBar
            label="Confirmar senha"
            type="password"
            register={register("confirmPassword")}
            errors={errors}
          />
        </CardContent>

        <CardFooter className="flex flex-col justify-center gap-2">
          <Button className="w-full active:bg-black" type="submit">
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
                type="button"
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
    </form>
  );
}
