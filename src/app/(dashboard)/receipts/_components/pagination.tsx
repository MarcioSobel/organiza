"use client";

import { CaretRight, CaretLeft } from "@phosphor-icons/react";

export const Pagination = () => {
    return (
        <div className="flex flex-row  self-center gap-2">
            <button className="hover:border-r-2 hover:border-b-2 hover:bg-pink-300 w-8 h-8 rounded-lg border border-slate-950"><CaretLeft size={24} color="#181616" className="flex justify-self-center" /></button>
            <button className="hover:border-r-2 hover:border-b-2 w-8 h-8 hover:bg-blue-300 rounded-lg border border-slate-950"><CaretRight size={24} color="#181616" className="flex justify-self-center" /></button>
        </div>
    )
}
