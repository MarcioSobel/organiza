import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Label } from "@/components/ui/label";
import { formatToBRL } from "@/utils/format-to-brl";
import { CaretRight, ChartLineUp } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

export function InvestmentsCard() {
  const router = useRouter();

  const chartData: Array<{
    month: string;
    value: number;
  }> = [
    { month: "Janeiro", value: 0.3 },
    { month: "Fevereiro", value: 0.34 },
    { month: "Março", value: 0.29 },
    { month: "Abril", value: 0.46 },
    { month: "Maio", value: 0.24 },
    { month: "Junho", value: 0.12 },
  ];

  const chartConfig = {
    value: {
      label: "Valor",
      color: "hsl(var(--off-black))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="bg-off-white border-off-black border-2 w-full" style={{ boxShadow: "2px 2px #2C2C2C" }}>
      <CardHeader className="flex flex-row justify-between items-center pb-0 gap-4">
        <div className="flex items-center gap-2">
          <ChartLineUp size={28} />
          <Label>Investimentos</Label>
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer group"
          style={{ marginTop: 0 }}
          onClick={() => router.push("/investments")}
        >
          <Label className="cursor-pointer">Detalhes</Label>
          <CaretRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
        </div>
      </CardHeader>
      <CardContent className="flex gap-3 p-4">
        <ChartContainer config={chartConfig} className="min-h-48">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent formatter={(value) => formatToBRL(value as number)} />}
            />
            <Line dataKey="value" type="linear" stroke="#2c2c2c" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
