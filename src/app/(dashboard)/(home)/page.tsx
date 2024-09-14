"use client";

import ReceiptsHistory from "./_components/receipts-history";
import { useRouter } from "next/navigation";
import { hasCookie } from "cookies-next";

export default function Home() {
  const router = useRouter();
  if (!hasCookie("token")) {
    // ...
    setTimeout(() => router.push("/login"), 10);
  }

  return (
    <div>
      <ReceiptsHistory />
      <p>Home</p>
    </div>
  );
}
