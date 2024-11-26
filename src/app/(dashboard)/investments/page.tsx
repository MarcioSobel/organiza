"use client";
import { useState } from "react";
import Botoes from "./_Componentes/Botoes/botoes";
import { Home } from "./_Componentes/home";
import MeusInvestimentos from "./_Componentes/meus-investimentos";

export default function Investments() {
  const [state, setState] = useState("home");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddItem = (item: { id: number; name: string }) => {
    if (!selectedItems.some((i) => i.id === item.id)) {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const handleRemoveItem = (itemId: number) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <Botoes setState={setState} />
      {state === "home" && <Home onAddItem={handleAddItem} />}
      {state === "meus_investimentos" && (
        <MeusInvestimentos
          selectedItems={selectedItems}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
}
