"use client";
import { MagnifyingGlass, DotsThreeOutlineVertical, Funnel } from "@phosphor-icons/react";

import { Input } from "@/components/ui/input";
export const SearchBar = () => {
    return (
        <div className="flex flex-row w-full justify-between items-center">
            <h1 className="text-base font-bold">Suas Despesas</h1>
            <div className="flex justify-between items-center gap-2">
                <div className="flex px-4 py-3 rounded-md border border-r-2 border-b-2 border-gray-900 overflow-hidden m-30 h-12 font-[sans-serif]">
                    <input type="email" placeholder="Pesquisar..."
                        className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                    <MagnifyingGlass size={32} color="#181616" className="self-center" />
                </div>
                <div className="flex flex-row gap-2">
                    <Funnel size={24} color="#181616" />
                    <DotsThreeOutlineVertical size={24} color="#181616" />
                </div>
            </div>
        </div>
    )
}
