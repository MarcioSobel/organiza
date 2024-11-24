import { CardDespesa } from "./cardDespesa";
import { ButtonAdicionar } from "./buttonAdicionar";

export const GridCards = () => {
  return (
    <div className=" max-w-full flex flex-wrap gap-4">
        <CardDespesa />
        <CardDespesa />
        <CardDespesa />
        <CardDespesa />
        <CardDespesa />
        <CardDespesa />
        <CardDespesa />   
        <ButtonAdicionar />        
    </div>
  )
}
