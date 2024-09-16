"use client";

import ReceiptsHistory from "./_components/receipts-history";
import { useRouter } from "next/navigation";
import { hasCookie } from "cookies-next";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!hasCookie("token")) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <ReceiptsHistory />
      <p>Home</p>
    </div>
  );
}
