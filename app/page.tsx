"use client";

import React, { useState } from "react";
import { Toaster, toast } from "sonner";

// --- Imports Layout & Components ---
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HomeSections } from "@/components/sections/home-sections";
import { PublicationsSection } from "@/components/sections/publications-section";
import { ResearchAreas } from "@/components/sections/research-areas";
import { BioSection } from "@/components/sections/bio-section";
import { ContactSection } from "@/components/sections/contact-section";

// --- UI Components ---
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  // State Management
  const [activeTab, setActiveTab] = useState("home");
  const [researchAreaPage, setResearchAreaPage] = useState("");

  // Dialog & Drawer States
  // (Still kept here in case you want to trigger them from elsewhere later,
  // even though header buttons are gone)
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Sub-component States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Toaster />

      {/* --- HEADER --- */}
      {/* FIX: Removed onLoginClick and onSettingsClick because they were removed from SiteHeader */}
      <SiteHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setResearchAreaPage={setResearchAreaPage}
      />

      {/* --- MAIN CONTENT --- */}
      <main className="w-full flex-grow">
        {/* Dynamic Content Switching */}

        {activeTab === "home" && (
          <HomeSections
            setActiveTab={setActiveTab}
            setResearchAreaPage={setResearchAreaPage}
          />
        )}
        {activeTab === "publications" && (
          <div className="container mx-auto px-4 md:px-24 py-8">
            <PublicationsSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}

        {activeTab === "research-areas" && researchAreaPage && (
          <div className="container mx-auto px-4 md:px-24 py-8">
            <ResearchAreas researchArea={researchAreaPage} />
          </div>
        )}

        {activeTab === "bio" && (
          // BioSection already has its own padding/container logic inside
          <BioSection />
        )}

        {activeTab === "contact" && (
          <div className="container mx-auto px-4 md:px-24 py-8">
            <ContactSection />
          </div>
        )}
      </main>

      {/* --- FOOTER --- */}
      <SiteFooter setActiveTab={setActiveTab} />

      {/* --- MODALS --- */}
      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
    </div>
  );
}

// --- Helper Components (Local to Page) ---

function LoginDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 sm:max-w-md">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" />
        <DialogHeader className="p-6 pb-2 border-b">
          <DialogTitle>Login to Research Portal</DialogTitle>
          <DialogDescription>
            Access exclusive research materials and data
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-4">
          <Card className="border-0 shadow-none">
            <CardContent className="space-y-4 p-0">
              {/* FIX: Pisahkan Label dari Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="researcher@university.edu"
                />
              </div>

              {/* FIX: Pisahkan Label dari Input */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Password
                </label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>

              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => {
                  toast.success("Logged in successfully");
                  onOpenChange(false);
                }}
              >
                Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
