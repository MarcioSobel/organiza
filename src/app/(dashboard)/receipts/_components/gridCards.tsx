"use client"
import data from "../../../../../db_receipts.json";
import { AdicionarDespesa } from "./adicionarDespesa";
import { CardDespesa, Receipt } from "./cardDespesa";
import { useEffect, useState } from "react";


export default function GridCards() {

 
  const[cards, setCards] = useState<Receipt[]>(data.card as Receipt[])
 
  return (
    <div className="w-full grid grid-cols-5 gap-4 grid-flow-row">
      {cards.map((card:Receipt, key) => (
          <CardDespesa 
          id={card.id}
          categoria={card.categoria}
          nomeDaDespesa={card.nomeDaDespesa}
          dataDeVencimento={card.dataDeVencimento}
          valor={card.valor}
          key={key}
          />
        ))}      
      <AdicionarDespesa />
    </div>
  )
}

