"use client";
import { Receitas } from "./receitas";
import { Despesas } from "./despesas";
import { useState } from "react";

export const MenuAbas = () => {
    const [abaAtual, setAbaAtual] = useState("Despesas");

    return (
        <div className="p-2">
            <header className="w-full flex gap-3">
            <button className="btn text-slate-900 bg-off-white hover:bg-orange-300 border border-r-2 border-b-2 w-40 h-12 active:bg-orange-300" onClick={() => {
                setAbaAtual("Despesas");
            }}>Despesas</button> 
            <button className="btn text-slate-900 bg-off-white hover:bg-blue-300 border border-r-2 border-b-2 w-40 h-12 active:bg-blue-400" onClick={() => {
                setAbaAtual("Receitas");
            }}>Receitas</button>
            </header>
            <main>
                {abaAtual == "Despesas" && <Despesas />}
                {abaAtual == "Receitas" && <Receitas />}
            </main>
            </div>
    )
}
