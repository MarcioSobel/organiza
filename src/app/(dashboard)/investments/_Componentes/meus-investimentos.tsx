"use client";
import Saldo from "./Saldo/saldo";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import "./meus-investimentos.css";



interface MeusInvestimentosProps {
  selectedItems: { id: number; name: string }[];
}

export default function MeusInvestimentos({
  selectedItems,
}: MeusInvestimentosProps) {
  const totalInvestido = 0; // Exemplo de valor
  const saldoTotal = 4200.0; // Exemplo de saldo

  return (
    <div style={{ padding: "20px", marginTop: "3%", display: "flex", flexDirection: "column" }}>
      
      <Saldo totalInvestido={totalInvestido} saldoTotal={saldoTotal} />
      
      <h2 style={{ fontWeight: "bold", marginTop: "40px", position: "relative",
    marginLeft: "0.5%", userSelect: "none", }}>Todos os investimentos:</h2>
      {selectedItems.length > 0 ? (
        <Carousel 
        orientation="vertical"
        className="total"
        opts={{ loop: true }}
        style={{
          margin: "0 auto",
          overflow: "visible",
        }}
        >
          <CarouselContent className="carousel-container -ml-2 md:-ml-4">
            {selectedItems.map((item) => (
              <CarouselItem
              key={item.id}
              className="carousel-item w-full md:basis-1/4 lg:basis-1/4 pl-2 md:pl-4"
              style={item.estilo}
            >
              <div className="info">
                <p className={item.badgeClass}>{item.name}</p>
                <h2 className="card-title" style={{ userSelect: "none" }}>
                  Saiba mais
                </h2>
              </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <p style={{ marginTop: "20px", userSelect: "none", }}>Nenhum investimento ainda.</p>
      )}
    </div>
  );
}