
export const CardDespesa = () => {
    return (
        <div>
            <div className="flex flex-auto justify-between w-50 h-40 border border-slate-900">
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
        </div>
    )
}
