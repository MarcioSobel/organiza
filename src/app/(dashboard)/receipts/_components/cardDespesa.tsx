"use client";
import { formatToBRL } from "@/utils/format-to-brl";
import { PencilSimple, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { DeletarDespesa } from "./deleteDespesa";

export type Receipt = {
    id?: string,
    categoria: string,
    nomeDaDespesa: string,
    dataDeVencimento: string,
    valor: number,
    pago: boolean
}
interface CardAtributos{
    id?: string,
    categoria:string;
    nomeDaDespesa:string;
    dataDeVencimento:string;
    valor?:number;       
}

export const CardDespesa:React.FC<CardAtributos> = ({id, categoria, nomeDaDespesa, dataDeVencimento, valor}) => {

    const handleDelete = (id?: string): void => {
        console.log(id);
        DeletarDespesa(id);        
      }

    const [mouseSobre, setMouseSobre ] = useState (false);
    return (
        <div  className="w-full h-36 border border-slate-900 rounded-lg border-r-2 border-b-2 p-3 flex flex-col justify-around bg-off-white overflow-hidden">
            <div className="flex flex-row justify-between">
            <div className="text-gray-950">
                <h1 className="text-xs font-normal font-roboto">{categoria}</h1>
                <h1 className="text-base font-bold font-roboto">{nomeDaDespesa}</h1>
            </div>
            <div className="form-control">
                <label className="cursor-pointer label">                    
                    <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
                </label>
            </div>
            </div>
            <h1 className="text-stone-500 text-sm font-bold text-center">{dataDeVencimento}</h1>
            <div className="flex flex-row justify-between">
                <h1 className="text-stone-900 text-base font-bold bg-white w-28 h-10 border px-4 py-2 border-neutral-500 rounded-lg">{formatToBRL(valor || 0)}</h1>
                <div className="flex flex-row justify-between gap-2">
                    <button>
                    <PencilSimple size={24} color={mouseSobre ? "#e0ac01" : "#181616"} weight={mouseSobre ? "fill" : "regular"} onMouseOver={()=>setMouseSobre(true)} onMouseOut={()=>setMouseSobre(false)} />
                    </button>
                    <button type="submit" onClick={()=>handleDelete({id})}>
                    <Trash size={24} color={mouseSobre ? "#852418" : "#181616"} weight={mouseSobre ? "fill" : "regular"} onMouseOver={()=>setMouseSobre(true)} onMouseOut={()=>setMouseSobre(false)} />
                    </button>
                </div>
            </div>
        </div>
    )
}
