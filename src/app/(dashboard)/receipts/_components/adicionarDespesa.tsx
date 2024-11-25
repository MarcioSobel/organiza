
import { Plus } from "@phosphor-icons/react";
import FormularioDespesa from "./formDespesa";
import { X } from "@phosphor-icons/react";
export const AdicionarDespesa = () => {
    return (

        <div>
            <div className="flex w-52 h-36 border-none justify-center">
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex w-10 h-10 border hover:border-r-2 hover:border-b-2 border-slate-950 rounded-lg items-center self-center justify-self-center justify-center hover:bg-pink-300">
                    <Plus size={32} color="#181616" />
                </button>
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-off-white  flex flex-col justify-center items-center border border-r-2 border-b-2 border-off-black font-roboto font-bold gap-1">
                
                <div className="flex flex-row w-full h-4 justify-between">
                <h1 className="">NOVA DESPESA</h1>
                <button className="h-7 w-7 p-1 rounded-sm border border-r-2 border-b-2 border-off-black bg-white hover:bg-orange-300 flex justify-center items-center" onClick={() => document.getElementById('my_modal_1').close()}><X size={24} color="#191a1a" /></button>
                </div> 
                    <div className="modal-action flex-col">
                    
                            <FormularioDespesa />
                            
                    </div>
                </div>
            </dialog>
        </div>
    )
}
