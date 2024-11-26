"use client";
import "./botoes.css";
import { Button } from "@/components/ui/button";
import { HandCoins, TrendingUpDown } from "lucide-react";
import React from "react";

interface Props {
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function Botoes({ setState }: Props) {
  return (
    <div className="flex gap-4">
      <Button
        onClick={() => setState("home")}
        className="btn"
        style={{ marginLeft: 40 }}
      >
        <TrendingUpDown className="trending" style={{ marginRight: 10 }} />{" "}
        Investimentos Gerais
      </Button>

      <Button onClick={() => setState("meus_investimentos")} className="btn">
        <HandCoins className="" style={{ marginRight: 10 }} /> Meus
        investimentos
      </Button>
    </div>
  );
}