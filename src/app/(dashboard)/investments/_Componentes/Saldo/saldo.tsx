"use client";
import { EyeClosed } from "@phosphor-icons/react";
import { Eye } from "lucide-react";
import { useState } from "react";
import "./saldo.css";

interface SaldoProps {
  totalInvestido: number;
  saldoTotal: number;
}

export default function Saldo({ totalInvestido, saldoTotal }: SaldoProps) {
  const [mostrarValores, setMostrarValores] = useState(true);

  const toggleCensura = () => {
    setMostrarValores(!mostrarValores);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "10px",
        margin: "20px 0",
        backgroundColor: "#f5f5f5",
        width: "25%",
        position: "fixed",
        top: "-20px",
        right: "20px",
        userSelect: "none",
      }}
    >
      <button className="olhinho" onClick={toggleCensura} style={{}}>
        {mostrarValores ? <Eye size={32} /> : <EyeClosed size={32} />}
      </button>
      <div>
        <p style={{ fontWeight: "bold", fontSize: "16px" }}>Total Investido</p>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {mostrarValores ? `R$ ${totalInvestido.toFixed(2)}` : "****"}
        </p>
      </div>
      <div style={{ paddingRight: "30px" }}>
        <p style={{ fontWeight: "bold", fontSize: "16px" }}>Saldo Total</p>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {mostrarValores ? `R$ ${saldoTotal.toFixed(2)}` : "****"}
        </p>
      </div>
    </div>
  );
}
