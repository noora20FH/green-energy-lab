"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Users,
  BookOpen,
  Settings,
  Menu,
  Briefcase
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard }, // Link ke page.tsx utama
    { name: "Profile", href: "/admin/profile", icon: User },
    { name: "Team Members", href: "/admin/team", icon: Users },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Publications", href: "/admin/publications", icon: BookOpen },
    { name: "Master Data", href: "/admin/settings", icon: Settings },
  ];

  // Komponen Navigasi (Reusable)
  const NavLinks = () => (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
              isActive
                ? "bg-green-50 text-green-700"
                : "text-zinc-600 hover:bg-green-50 hover:text-green-700"
            }`}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* --- DESKTOP SIDEBAR (FIXED) --- */}
      <aside className="hidden md:block fixed inset-y-0 left-0 z-50 w-64 bg-white border-r">
        <div className="p-6 border-b h-16 flex items-center">
          <h2 className="font-bold text-xl text-green-700">GE-LAB Admin</h2>
        </div>
        <div className="p-4">
          <NavLinks />
        </div>
      </aside>

      {/* --- CONTENT WRAPPER --- */}
      <div className="flex-1 flex flex-col md:pl-64 min-h-screen transition-all duration-300 w-full">
        
        {/* --- HEADER (STICKY) --- */}
        <header className="sticky top-0 z-40 h-16 bg-white/80 backdrop-blur-md border-b flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-zinc-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SheetHeader className="p-6 border-b text-left">
                  <SheetTitle className="font-bold text-xl text-green-700">
                    GE-LAB Admin
                  </SheetTitle>
                </SheetHeader>
                <div className="p-4">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>

            <h1 className="font-semibold text-zinc-800 text-lg">
              Management Dashboard
            </h1>
          </div>

          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-green-600 hover:underline whitespace-nowrap"
          >
            View Live Site
          </Link>
        </header>

        {/* --- DYNAMIC CONTENT INJECTION --- */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children} 
        </main>
      </div>
    </div>
  );
}