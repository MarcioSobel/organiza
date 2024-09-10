"use client";
import { AuthNavBar } from "./_components/navbar";

interface AuthProps {
  children: React.ReactNode;
}

export default function Auth({ children }: AuthProps) {
  return (
    <>
      {children}
      <AuthNavBar />
    </>
  );
}
