"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import "./Carousel.css";

interface SearchCarouselProps {
  onAddItem: (item: { id: number; name: string ; badgeClass: string ; estilo: object}) => void;
}

export function SearchCarousel({ onAddItem }: SearchCarouselProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const invest = [
    { id: 1, name: "Nubank", badgeClass: "badgeN", estilo: { marginLeft: 20 } },
    { id: 2, name: "Santander", badgeClass: "badgeS", estilo: { marginLeft: 20 } },
    { id: 3, name: "Banco do Brasil", badgeClass: "badgeB", estilo: { marginLeft: 20 } },
    { id: 4, name: "Caixa", badgeClass: "badgeC", estilo: { marginLeft: 20 } },
    { id: 5, name: "Itaú", badgeClass: "badgeI", estilo: { marginLeft: 20, marginRight: 20 } },
  ];

  const filteredBanks = invest.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginLeft: "10px",
          marginBottom: "20px",
          padding: "10px",
          width: "10%",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      <Carousel
        className="total1"
        opts={{ loop: true }}
        style={{
          margin: "0 auto",
          overflow: "visible",
        }}
      >
        <CarouselContent className="carousel-container1 -ml-2 md:-ml-4">
          {filteredBanks.map((bank) => (
            <CarouselItem
              key={bank.id}
              className="carousel-item1 w-full md:basis-1/4 lg:basis-1/4 pl-2 md:pl-4"
              style={bank.estilo}
              onClick={() => onAddItem(bank)}
            >
              <div className="info1">
                <p className={bank.badgeClass}>{bank.name}</p>
                <h2 className="card-title1" style={{ userSelect: "none" }}>
                  Saiba mais
                </h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>
    </div>
  );
}