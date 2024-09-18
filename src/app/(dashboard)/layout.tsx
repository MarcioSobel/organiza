import { Sidebar } from "./_components/sidebar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <main className="flex flex-col-reverse h-[100dvh] sm:flex-row overflow-y-hidden max-h-screen">
      <Sidebar />
      <div className="w-full h-full overflow-scroll">{children}</div>
    </main>
  );
}
