import React, { useState } from "react";
import { 
  Leaf, Search, Settings, Menu, ChevronDown, 
  Sun, Wind, Battery, Zap, Trash2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent 
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface SiteHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setResearchAreaPage: (area: string) => void;
  onLoginClick: () => void;
  onSettingsClick: () => void;
}

export function SiteHeader({ 
  activeTab, 
  setActiveTab, 
  setResearchAreaPage, 
  onLoginClick, 
  onSettingsClick 
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper untuk styling tombol navigasi
  const getNavClass = (isActive: boolean) => 
    isActive 
      ? "bg-white text-green-700 hover:bg-white/90" 
      : "text-white hover:bg-white/20";

  const handleMobileNav = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-8">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Leaf className="h-16 w-16 text-white flex-shrink-0" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Green Energy Lab
              </h1>
              <p className="text-lg md:text-xl text-green-100 font-light tracking-wide mt-1">
                Powering Tomorrow's Solutions
              </p>  
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant={activeTab === "home" ? "default" : "ghost"}
              onClick={() => setActiveTab("home")}
              className={getNavClass(activeTab === "home")}
            >
              Home
            </Button>
            
            {/* Research Areas Dropdown */}
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
              Research Publications
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

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Search className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Settings className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={onLoginClick}>Login</DropdownMenuItem>
                <DropdownMenuItem onClick={onSettingsClick}>Settings</DropdownMenuItem>
                <DropdownMenuItem destructive onClick={() => toast.error("Action cancelled")}>
                  <Trash2 className="h-4 w-4 mr-2" /> Delete Data
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation Content */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-white/20">
            {["home", "publications", "bio", "contact"].map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className="w-full justify-start text-white hover:bg-white/20 capitalize"
                onClick={() => handleMobileNav(tab)}
              >
                {tab}
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}