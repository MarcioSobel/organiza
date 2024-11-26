"use client";

import ReceiptsHistory from "./_components/receipts-history";
import { useRouter } from "next/navigation";
import { hasCookie } from "cookies-next";
import { useEffect } from "react";
import { LastBudgets } from "./_components/last-budgets";
import { InvestmentsCard } from "./_components/investments-card";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!hasCookie("token")) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="p-12">
      <div className="flex gap-4">
        <div>
          <ReceiptsHistory />
        </div>
        <div className="flex flex-col gap-4">
          <LastBudgets />
        </div>
        <div>
          <InvestmentsCard />
        </div>
      </div>
      <p>Home</p>
    </div>
  );
}
