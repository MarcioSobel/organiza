import Saldo from "./Saldo/saldo";
import { SearchCarousel } from "./gira-gira/SearchCarousel";

interface HomeProps {
  onAddItem: (item: {
    id: number;
    name: string;
    badgeClass: string;
    estilo: object;
  }) => void;
}

export function Home({ onAddItem }: HomeProps) {
  const totalInvestido = 0; // Exemplo de valor
  const saldoTotal = 4200; // Exemplo de saldo

  return (
    <div>
      <Saldo totalInvestido={totalInvestido} saldoTotal={saldoTotal} />
      <h1
        className="type"
        style={{
          marginTop: 200,
          textDecoration: "double",
          fontWeight: "bold",
          marginLeft: 12,
          userSelect: "none",
        }}
      >
        Destaques:
      </h1>

      <SearchCarousel onAddItem={onAddItem} />

      <div style={{ marginTop: 100 }}>
        <h1
          className="chulé"
          style={{ fontWeight: "bold", marginLeft: 12, userSelect: "none" }}
        >
          Mais seguros:
        </h1>
      </div>
      <SearchCarousel onAddItem={onAddItem} />
    </div>
  );
}
