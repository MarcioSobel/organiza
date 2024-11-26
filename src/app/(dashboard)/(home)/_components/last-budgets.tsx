import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { formatToBRL } from "@/utils/format-to-brl";
import { CaretRight, PiggyBank } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

type Budget = {
  currentValue: number;
  total: number;
  name: string;
};

export function LastBudgets() {
  const mockedBudgets: Budget[] = [
    {
      currentValue: 30,
      total: 100,
      name: "Roupas",
    },
    {
      currentValue: 256.99,
      total: 2500,
      name: "Viagem para a praia",
    },
  ];

  const router = useRouter();

  return mockedBudgets.map((budget, key) => {
    return (
      <Card
        key={key}
        className="bg-off-white border-off-black border-2 w-full"
        style={{ boxShadow: "2px 2px #2C2C2C" }}
      >
        <CardHeader className="flex flex-row justify-between items-center pb-0 gap-4">
          <div className="flex items-center gap-2">
            <PiggyBank size={28} />
            <Label>{budget.name}</Label>
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer group"
            style={{ marginTop: 0 }}
            onClick={() => router.push("/budgets")}
          >
            <Label className="cursor-pointer">Detalhes</Label>
            <CaretRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </div>
        </CardHeader>
        <CardContent className="flex gap-3 p-4">
          <Label>{formatToBRL(budget.currentValue)}</Label>
          <Progress value={(budget.currentValue / budget.total) * 100} className="bg-primary/10" />
          <Label>{formatToBRL(budget.total)}</Label>
        </CardContent>
      </Card>
    );
  });
}
