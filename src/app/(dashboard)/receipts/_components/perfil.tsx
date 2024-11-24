"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { CaretDown, SignOut } from "@phosphor-icons/react";

export const Perfil = () => {
    return (
     <div className="dropdown self-end">
            <div tabIndex={0} role="button" className="btn m-1 bg-white w-50 h-10 flex flex-col items-start hover:bg-orange-200 text-slate-950 border border-r-2 border-b-2">
            <Image className="flex self-start"
            src="/icone_perfil_header.png"
            alt="foto de perfil"
            width={40}
            height={40}
            />
            <h1>Joana Silva</h1>
            <h2 className="text-slate-500">joanasilva@email.com</h2>
            <CaretDown size={32} color="#1E1E1E"/>
            </div>
            <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white">
                <li><a>Editar perfil</a></li>
                <li><a>Configurações</a></li>
                <li className="flex justify-between"><a>Sair <SignOut size={24} color="#222222"/></a></li>
            </ul>
        </div>   
    )
}
