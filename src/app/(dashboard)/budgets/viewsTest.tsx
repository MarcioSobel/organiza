"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "January", Orçamento: 186, Gasto: 80 },
  { month: "February", Orçamento: 305, Gasto: 200 },
  { month: "March", Orçamento: 237, Gasto: 120 },
  { month: "April", Orçamento: 73, Gasto: 190 },
  { month: "May", Orçamento: 209, Gasto: 130 },
  { month: "June", Orçamento: 214, Gasto: 140 },
]

const chartConfig = {
    Orçamento: {
    label: "Orçamento(R$)",
    color: "#2563eb",
  },
  Gasto: {
    label: "Gasto(R$)",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function TesteGraf() {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="Orçamento" fill="var(--color-Orçamento)" radius={4} />
    <Bar dataKey="Gasto" fill="var(--color-Gasto)" radius={4} />
  </BarChart>
</ChartContainer>
  )
}




