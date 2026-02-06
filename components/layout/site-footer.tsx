import React from "react";
import { Leaf, Sun, Wind, Battery, Zap, Twitter, Facebook, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

interface SiteFooterProps {
  setActiveTab: (tab: string) => void;
}

export function SiteFooter({ setActiveTab }: SiteFooterProps) {
  return (
    <footer className="border-t mt-16 py-12 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-green-400" />
              <h3 className="font-bold text-white">Smart Green Energy Lab</h3>
            </div>
            <p className="text-sm text-green-100">
              Leading research in sustainable energy solutions for a greener future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><button onClick={() => setActiveTab("home")} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setActiveTab("publications")} className="hover:text-white transition-colors">Publications</button></li>
              <li><button onClick={() => setActiveTab("bio")} className="hover:text-white transition-colors">Biography</button></li>
              <li><button onClick={() => setActiveTab("contact")} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Research Areas List */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Research Areas</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li className="flex items-center gap-2"><Sun className="h-4 w-4 text-yellow-400" /> Solar Energy</li>
              <li className="flex items-center gap-2"><Wind className="h-4 w-4 text-blue-400" /> Wind Power</li>
              <li className="flex items-center gap-2"><Battery className="h-4 w-4 text-green-400" /> Energy Storage</li>
              <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-400" /> Smart Grids</li>
            </ul>
          </div>

          {/* Connect & Newsletter */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Connect</h4>
            <p className="text-sm text-green-200 mb-3">Stay updated with our latest research</p>
            <Button
              onClick={() => toast.success("Subscribed!", { description: "You will receive our newsletter" })}
              className="bg-green-500 hover:bg-green-600 text-white w-full"
            >
              Subscribe to Newsletter
            </Button>
            
            <div className="flex gap-3 mt-4">
              <SocialIcon Icon={Twitter} href="https://twitter.com" />
              <SocialIcon Icon={Facebook} href="https://facebook.com" />
              <SocialIcon Icon={Youtube} href="https://youtube.com" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" />
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-green-700" />
        <div className="text-center text-sm text-green-100">
          © 2026 Green Energy Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Komponen kecil untuk icon sosmed agar tidak redundant
function SocialIcon({ Icon, href }: { Icon: any, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
      <Icon className="h-5 w-5" />
    </a>
  );
}