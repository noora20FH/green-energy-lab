import React from "react";
import Link from "next/link";
import { LayoutDashboard, User, Users, BookOpen, Settings } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: "Profile", href: "/admin/profile", icon: User },
    { name: "Team Members", href: "/admin/team", icon: Users },
    { name: "Projects", href: "/admin/projects", icon: LayoutDashboard },
    { name: "Publications", href: "/admin/publications", icon: BookOpen },
    { name: "Master Data", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 border-b">
          <h2 className="font-bold text-xl text-green-700">GE-LAB Admin</h2>
        </div>
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-zinc-600 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium"
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b flex items-center px-8 justify-between">
          <h1 className="font-semibold text-zinc-800 text-lg">Management Dashboard</h1>
          <Link href='https://green-energy-lab.vercel.app/' className="text-sm text-zinc-500 hover:underline">View Live Website</Link>
        </header>
        <div className="p-8 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}