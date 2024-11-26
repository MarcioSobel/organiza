"use client";
import { Plus } from "@phosphor-icons/react";


export const ButtonAdicionar = () => {
  return (
    <div className="flex w-52 h-36 border-none justify-center">
    <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="flex w-10 h-10 border hover:border-r-2 hover:border-b-2 border-slate-950 rounded-lg items-center self-center justify-self-center justify-center hover:bg-pink-300">
        <Plus size={32} color="#181616"  />
    </button>   
    </div>
  )
}
