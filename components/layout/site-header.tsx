"use client";

import React, { useState, useEffect } from "react";
import { 
  Leaf, Menu, ChevronDown, 
  Sun, Wind, Battery, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils"; 

interface SiteHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setResearchAreaPage: (area: string) => void;
}

export function SiteHeader({ 
  activeTab, 
  setActiveTab, 
  setResearchAreaPage, 
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResearchMobileOpen, setIsResearchMobileOpen] = useState(false);
  
  // STATE SCROLL: Untuk mendeteksi apakah user sedang scroll ke bawah
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 20px, aktifkan mode compact
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavClass = (isActive: boolean) => 
    isActive 
      ? "bg-white text-green-700 hover:bg-white/90" 
      : "text-white hover:bg-white/20";

  const handleMobileNav = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setIsResearchMobileOpen(false); 
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 shadow-lg transition-all duration-300 ease-in-out",
        // Padding mengecil saat discroll
        isScrolled ? "py-2" : "py-6" 
      )}
    >
      <div className="container mx-auto px-4 md:px-24">
        <div 
          className={cn(
            "flex transition-all duration-300",
            // LOGIKA LAYOUT:
            // Jika discroll: Baris (Row) kiri-kanan
            // Jika diatas: Kolom (Col) atas-bawah
            isScrolled 
              ? "flex-row items-center justify-between" 
              : "flex-col items-center gap-6 justify-center"
          )}
        >
          
          {/* --- LOGO SECTION --- */}
          <div className="flex items-center gap-3 transition-all duration-300">
            <Leaf 
              className={cn(
                "text-white flex-shrink-0 transition-all duration-300",
                isScrolled ? "h-8 w-8" : "h-16 w-16"
              )} 
            />
            <div className={cn("text-center md:text-left transition-all")}>
              <h1 
                className={cn(
                  "font-bold text-white tracking-tight leading-tight transition-all duration-300",
                  isScrolled ? "text-xl" : "text-4xl md:text-5xl"
                )}
              >
                Green Energy Lab
              </h1>
              {/* Subtitle disembunyikan saat scroll agar muat satu baris */}
              <p 
                className={cn(
                  "text-green-100 font-light tracking-wide transition-all duration-300 overflow-hidden",
                  isScrolled ? "h-0 opacity-0 mt-0" : "h-auto opacity-100 mt-1 text-sm md:text-xl"
                )}
              >
                Powering Tomorrow's Solutions
              </p>
            </div>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant={activeTab === "home" ? "default" : "ghost"}
              onClick={() => setActiveTab("home")}
              className={getNavClass(activeTab === "home")}
            >
              Home
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={activeTab === "research-areas" ? "default" : "ghost"}
                  className={getNavClass(activeTab === "research-areas")}
                >
                  Research Areas
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => { setActiveTab("research-areas"); setResearchAreaPage("solar"); }}>
                  <Sun className="h-4 w-4 mr-2 text-yellow-600" /> Solar Energy Systems
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { setActiveTab("research-areas"); setResearchAreaPage("wind"); }}>
                  <Wind className="h-4 w-4 mr-2 text-blue-600" /> Wind Power Optimization
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { setActiveTab("research-areas"); setResearchAreaPage("storage"); }}>
                  <Battery className="h-4 w-4 mr-2 text-green-600" /> Energy Storage Solutions
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { setActiveTab("research-areas"); setResearchAreaPage("grid"); }}>
                  <Zap className="h-4 w-4 mr-2 text-orange-600" /> Smart Grid Technology
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant={activeTab === "publications" ? "default" : "ghost"}
              onClick={() => setActiveTab("publications")}
              className={getNavClass(activeTab === "publications")}
            >
              Publications
            </Button>
            <Button
              variant={activeTab === "bio" ? "default" : "ghost"}
              onClick={() => setActiveTab("bio")}
              className={getNavClass(activeTab === "bio")}
            >
              Bio
            </Button>
            <Button
              variant={activeTab === "contact" ? "default" : "ghost"}
              onClick={() => setActiveTab("contact")}
              className={getNavClass(activeTab === "contact")}
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Toggle (Tetap muncul di kanan untuk mobile) */}
          <div className={cn("md:hidden absolute right-4 top-8", isScrolled && "top-3")}>
             <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* --- MOBILE MENU CONTENT (Sama seperti sebelumnya) --- */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-1 border-t border-white/20 animate-in slide-in-from-top-2 mt-2">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-white hover:bg-white/20",
                activeTab === "home" && "bg-white/10"
              )}
              onClick={() => handleMobileNav("home")}
            >
              Home
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-between text-white hover:bg-white/20"
              onClick={() => setIsResearchMobileOpen(!isResearchMobileOpen)}
            >
              Research Areas
              <ChevronDown 
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isResearchMobileOpen ? "rotate-180" : ""
                )} 
              />
            </Button>

            {isResearchMobileOpen && (
              <div className="bg-black/20 rounded-md mx-2 overflow-hidden">
                <Button variant="ghost" className="w-full justify-start text-green-100 pl-8 text-sm hover:bg-white/10" onClick={() => { setActiveTab("research-areas"); setResearchAreaPage("solar"); setMobileMenuOpen(false); }}>
                  <Sun className="mr-2 h-4 w-4" /> Solar Energy
                </Button>
                <Button variant="ghost" className="w-full justify-start text-green-100 pl-8 text-sm hover:bg-white/10" onClick={() => { setActiveTab("research-areas"); setResearchAreaPage("wind"); setMobileMenuOpen(false); }}>
                  <Wind className="mr-2 h-4 w-4" /> Wind Power
                </Button>
                <Button variant="ghost" className="w-full justify-start text-green-100 pl-8 text-sm hover:bg-white/10" onClick={() => { setActiveTab("research-areas"); setResearchAreaPage("storage"); setMobileMenuOpen(false); }}>
                  <Battery className="mr-2 h-4 w-4" /> Energy Storage
                </Button>
                 <Button variant="ghost" className="w-full justify-start text-green-100 pl-8 text-sm hover:bg-white/10" onClick={() => { setActiveTab("research-areas"); setResearchAreaPage("grid"); setMobileMenuOpen(false); }}>
                  <Zap className="mr-2 h-4 w-4" /> Smart Grid
                </Button>
              </div>
            )}

            <Button variant="ghost" className={cn("w-full justify-start text-white hover:bg-white/20", activeTab === "publications" && "bg-white/10")} onClick={() => handleMobileNav("publications")}>
              Publications
            </Button>
            <Button variant="ghost" className={cn("w-full justify-start text-white hover:bg-white/20", activeTab === "bio" && "bg-white/10")} onClick={() => handleMobileNav("bio")}>
              Bio
            </Button>
            <Button variant="ghost" className={cn("w-full justify-start text-white hover:bg-white/20", activeTab === "contact" && "bg-white/10")} onClick={() => handleMobileNav("contact")}>
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}