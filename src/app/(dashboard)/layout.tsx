import { Sidebar } from "./_components/sidebar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <main className="flex overflow-y-hidden max-h-screen">
      <Sidebar />
      <div>{children}</div>
    </main>
  );
}
