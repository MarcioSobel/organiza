"use client";
import { Pencil, Trash } from "@phosphor-icons/react";

export const CardDespesa = () => {
    return (
        <div  className="w-52 h-36 border border-slate-900 rounded-lg border-r-2 border-b-2">
            <div className="flex flex-row justify-between">
            <div>
                <h1>categoriaDespesa</h1>
                <h1>nomeDespesa</h1>
            </div>
            <div className="form-control">
                <label className="cursor-pointer label">                    
                    <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
                </label>
            </div>
            </div>
            <h1>23/04/2024</h1>
            <div className="flex flex-row justify-between">
                <h1>R$ 24,00</h1>
                <div>
                    <button>
                    <Pencil size={24} color="#181616" />
                    </button>
                    <button>
                    <Trash size={24} color="#181616" />
                    </button>
                </div>
            </div>
        </div>
    )
}
