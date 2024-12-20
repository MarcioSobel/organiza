"use client"
import data from "../../../../../db_receipts.json";
import { ButtonAdicionar } from "./buttonAdicionar";
import { CardDespesa, Receipt } from "./cardDespesa";
import { useEffect, useState } from "react";


export default function GridCards() {

 
  const[cards, setCards] = useState<Receipt[]>(data.card as Receipt[])
 
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 gap-4 ">
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
      <ButtonAdicionar />
    </div>
  )
}

