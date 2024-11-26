import { Perfil } from "./perfil";
import { MenuAbas } from "./menuAbas";

export const Header = () => {
    return (
        <header className="flex flex-col mx-3 mt-3 gap-3 max-h-full ">
            <Perfil /> 
            <MenuAbas />                       
        </header>
    )
}
