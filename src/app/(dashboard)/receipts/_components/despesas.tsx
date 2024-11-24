import { SearchBar } from "./searchBar";
import { GridCards } from "./gridCards";
import { Pagination } from "./pagination";

export const Despesas = () => {
  return (
    <div className="flex flex-col gap-4">
        <SearchBar />
        <GridCards />
        <Pagination />        
    </div>
  )
}
