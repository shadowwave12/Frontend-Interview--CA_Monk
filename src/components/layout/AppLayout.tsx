import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-lg">CA Monk</div>
          <button className="text-sm text-muted-foreground">Profile</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">{children}</main>
    </div>
  );
}
