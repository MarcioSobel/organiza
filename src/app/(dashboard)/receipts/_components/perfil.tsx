"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { CaretDown, SignOut } from "@phosphor-icons/react";

export const Perfil = () => {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
            <Image 
            src="/icone_perfil_header.png"
            alt="foto de perfil"
            width={32}
            height={32}
            />
            <h1>Joana Silva</h1>
            <h2>joanasilva@email.com</h2>
            <CaretDown size={32} />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Editar perfil</a></li>
                <li><a>Configurações</a></li>
                <li><a>Sair <SignOut size={32} /></a></li>
            </ul>
        </div>
    )
}
