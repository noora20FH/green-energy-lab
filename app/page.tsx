"use client";

import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Info } from "lucide-react";

// --- Imports Layout & Components ---
// Pastikan file-file ini sudah dibuat sesuai struktur folder sebelumnya
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
// import { HomeSections } from "@/components/sections/home-sections";
// import { PublicationsSection } from "@/components/sections/publications-section";
// import { ResearchAreas } from "@/components/sections/research-areas";
import { BioSection } from "@/components/sections/bio-section";
// import { ContactSection } from "@/components/sections/contact-section";

// --- UI Components ---
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Drawer } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";

// --- Mock Data ---
import { researchNews } from "@/data/mock-data";

export default function Home() {
  // State Management
  const [activeTab, setActiveTab] = useState("home");
  const [researchAreaPage, setResearchAreaPage] = useState("");
  
  // Dialog & Drawer States
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Sub-component States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <Toaster />

      {/* --- HEADER --- */}
      <SiteHeader 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setResearchAreaPage={setResearchAreaPage}
        onLoginClick={() => setLoginDialogOpen(true)}
        onSettingsClick={() => setDrawerOpen(true)}
      />

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-4 py-8">
        
        {/* Notification Banner */}
        <Alert className="mb-8 border-green-200 bg-green-50">
          <Info className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-900">New Research Published!</AlertTitle>
          <AlertDescription className="text-green-800">
            Our latest paper on advanced solar cell efficiency has been featured in Nature Energy.
            <button 
              className="underline ml-1 font-medium hover:text-green-900" 
              onClick={() => toast.success("Redirecting...")}
            >
              Read more
            </button>
          </AlertDescription>
        </Alert>

        {/* Dynamic Content Switching */}
        {/* {activeTab === "home" && (
          <HomeSections researchNews={researchNews} />
        )}

        {activeTab === "publications" && (
          <PublicationsSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )} */}

        {/* {activeTab === "research-areas" && researchAreaPage && (
          <ResearchAreas researchArea={researchAreaPage} />
        )} */}

        {activeTab === "bio" && (
          <BioSection />
        )}

        {/* {activeTab === "contact" && (
          <ContactSection />
        )} */}

      </main>

      {/* --- FOOTER --- */}
      <SiteFooter setActiveTab={setActiveTab} />

      {/* --- MODALS --- */}
      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
      <SettingsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
    </div>
  );
}

// --- Helper Components (Local to Page) ---

function LoginDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 sm:max-w-md">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" />
        <DialogHeader className="p-6 pb-2 border-b">
          <DialogTitle>Login to Research Portal</DialogTitle>
          <DialogDescription>Access exclusive research materials and data</DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-4">
           <Card className="border-0 shadow-none">
             <CardContent className="space-y-4 p-0">
                <div className="space-y-2">
                  <Input label="Email" type="email" placeholder="researcher@university.edu" />
                </div>
                <div className="space-y-2">
                  <Input label="Password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => { toast.success("Logged in successfully"); onOpenChange(false); }}>
                  Sign In
                </Button>
             </CardContent>
           </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SettingsDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <div className="mx-auto w-full max-w-sm">
        <div className="p-4 pb-0">
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-bold">Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Theme</label>
                <Select>
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </Select>
              </div>
              <Button className="w-full" onClick={() => { toast.success("Settings saved"); onOpenChange(false); }}>
                Save Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}