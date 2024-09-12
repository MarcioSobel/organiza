"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface ReceiptTransactionProps {
  type: "receipt" | "expense";
  value: number;
  description: string;
  date: Date;
}

function ReceiptTransaction({
  type,
  date,
  description,
  value,
}: ReceiptTransactionProps) {
  let year = date.getUTCFullYear().toString().slice(2);
  let day = date.getUTCDate().toString();
  let month = date.getUTCMonth().toString();

  if (day.length === 1) {
    day = "0" + day;
  }

  if (month.length === 1) {
    month = "0" + month;
  }

  const isValueDecimal = Math.floor(value) < value && value < Math.ceil(value);

  return (
    <div className="flex gap-2 font-bold font-roboto-slab">
      <div className="h-full">
        {type === "receipt" ? (
          <Plus color="#2FDD54" size={28} />
        ) : (
          <Minus color="#F3201D" size={28} />
        )}
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center gap-16">
          <p className="text-xl">
            R${" "}
            {isValueDecimal
              ? value.toString().replace(".", ",")
              : `${value},00`}
          </p>
          <p className="text-off-black/65 font-medium">
            {day}/{month}/{year}
          </p>
        </div>

        <p className="text-base text-off-black/65">{description}</p>
      </div>
    </div>
  );
}

export default function ReceiptsHistory() {
  const router = useRouter();

  const handleReceiptHistoryClick = () => {
    router.push("/receipts");
  };

  return (
    <Card
      className="bg-off-white border-off-black border-2 w-80"
      style={{ boxShadow: "2px 2px #2C2C2C" }}
    >
      <CardHeader className="p-4">
        <div>
          <p className="uppercase font-roboto-slab text-base text-off-black/65">
            Conta
          </p>
          <p className="font-roboto-slab font-bold text-xl">R$ 4.200,00</p>
        </div>
      </CardHeader>

      <div className="flex justify-center">
        <Separator
          orientation="horizontal"
          className="bg-off-grey/50 w-[90%]"
        />
      </div>

      <CardContent className="flex flex-col gap-3 p-4">
        <p className="font-roboto-slab font-medium text-sm text-off-black/65">
          Últimas transações:
        </p>
        <ReceiptTransaction
          type="expense"
          description="Riot games"
          value={29.99}
          date={new Date()}
        />
        <ReceiptTransaction
          type="receipt"
          description="Pix"
          value={100.0}
          date={new Date()}
        />
      </CardContent>

      <CardFooter className="flex flex-1 justify-center items-center">
        <Button
          className="font-bold text-off-white bg-off-black hover:bg-off-grey"
          onClick={handleReceiptHistoryClick}
        >
          Ver mais
        </Button>
      </CardFooter>
    </Card>
  );
}
