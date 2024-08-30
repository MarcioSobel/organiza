import { InputBar } from "./input-bar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

export function LoginCard() {
  return (
    <Card
      className="bg-off-white border-off-black border-2 min-w-80"
      style={{ boxShadow: "2px 2px #2C2C2C" }}
    >
      <CardHeader className="pb-0 pt-4 px-3 items-center font-roboto-slab">
        <CardTitle className="text-xl font-roboto">Fazer login</CardTitle>
      </CardHeader>
      <div className="flex w-full justify-center my-4">
        <Separator className="bg-off-grey/50 w-[90%]" />
      </div>
      <CardContent className="flex flex-col">
        <InputBar
          label="E-mail"
          type={"email"}
          style={{ boxShadow: "2px 2px #2C2C2C" }}
        />
        <InputBar
          label="Senha"
          type={"password"}
          style={{ boxShadow: "2px 2px #2C2C2C" }}
        />
      </CardContent>
    </Card>
  );
}
