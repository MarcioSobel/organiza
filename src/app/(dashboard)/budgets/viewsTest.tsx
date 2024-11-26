"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import  {useState} from "react";

export function TesteGraf(){
  const[chartData,setChartData] = useState([{month: "January", Orçamento: 186, Gasto:80}

  ]);
  
  const addToChart = (data: (typeof chartData)[number]) => {
    setChartData((prev) => { 
      const uptade = [...prev];
      uptade.push(data);
      return uptade;
     })

  }

  const chartConfig: ChartConfig = {
    Orçamento: {
      label: "Orçamento(R$)",
      color:"#2563eb"
    },
    Gasto: {
      label: "Gasto(R$)",
      color:"#60a5fa"
    }
  };


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
  );
}


