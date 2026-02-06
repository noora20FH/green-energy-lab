import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, User, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { teamMembers } from "@/data/mock-data"; // Import data dari langkah 1

export function BioSection() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
           {/* ... (Copy paste konten Bio Card Profile di sini) ... */}
           {/* Pastikan import komponen UI sudah benar */}
           <Card>
             {/* Contoh singkat isi */}
             <CardContent className="p-0">
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1758685734614-63fe30c18b79?..."
                 alt="Professor James Wilson"
                 className="w-full h-80 object-cover rounded-t-lg"
               />
               <div className="p-6">
                 <h3 className="text-2xl font-bold mb-2">Prof. James Wilson</h3>
                 {/* ... sisa konten profile ... */}
               </div>
             </CardContent>
           </Card>
           {/* ... Contact Info Card ... */}
        </div>

        <div className="md:col-span-2 space-y-6">
          {/* ... Biography Text ... */}
          {/* ... Education Section ... */}
          
          <Separator />
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Research Team</h3>
            <div className="space-y-3">
              {teamMembers.map((member, idx) => (
                <Card key={idx}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-zinc-600">{member.role}</p>
                    </div>
                    <Badge variant="outline">{member.expertise}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}