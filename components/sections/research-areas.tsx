// components/sections/research-area.tsx

import React from "react";
import { Sun, Wind, Battery, Zap, Users, FileText, Target, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ResearchOverviewHero } from "@/components/sections/research-overview-hero";

// IMPORT SEMUA TABEL
import { researchAreas, projects, teamMembers, publications, researchImpactConfigs } from "@/data/mock-data";

// Helper untuk memilih Icon berdasarkan string dari database
const IconMap: { [key: string]: React.ReactNode } = {
  Sun: <Sun className="h-16 w-16 text-yellow-500" />,
  Wind: <Wind className="h-16 w-16 text-blue-500" />,
  Battery: <Battery className="h-16 w-16 text-green-500" />,
  Zap: <Zap className="h-16 w-16 text-orange-500" />,
};

export function ResearchAreas({ researchArea }: { researchArea: string }) {
  
  // 1. "JOIN" DATA AREA
  const areaInfo = researchAreas.find((a) => a.id === researchArea);
  
  // 2. "JOIN" DATA PROJECTS (Filter by researchAreaId)
  const areaProjects = projects.filter((p) => p.researchAreaId === researchArea);
  
  // 3. "JOIN" DATA TEAM (Filter by researchAreaId)
  const areaTeam = teamMembers.filter((t) => t.researchAreaId === researchArea);
  
  // 4. "JOIN" DATA PUBLICATIONS & IMPACT
  const areaPubsCount = publications.filter((pb) => pb.researchAreaId === researchArea).length;
  const impactStats = researchImpactConfigs.find((i) => i.researchAreaId === researchArea);

  if (!areaInfo) return <div className="p-24 text-center">Area not found</div>;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <ResearchOverviewHero
        title={areaInfo.title}
        overview={areaInfo.overview}
        images={areaInfo.teamImages}
      />

      {/* Impact Stats Section (Data Dinamis) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-24">
        <h2 className="col-span-full text-3xl font-bold text-center mb-4">Research Impact</h2>
        
        {/* Stat: Publications (Dihitung otomatis dari jumlah data di tabel publikasi) */}
        <StatCard icon={<FileText className="text-green-600" />} value={`${areaPubsCount}+`} label="Publications" />
        
        {/* Stat: Patents (Dari tabel impact config) */}
        <StatCard icon={<Target className="text-blue-600" />} value={impactStats?.patents.toString() || "0"} label="Patents" />
        
        <StatCard icon={<Users className="text-orange-600" />} value={impactStats?.phdStudents.toString() || "0"} label="PhD Students" />
        
        <StatCard icon={<TrendingUp className="text-purple-600" />} value={impactStats?.funding || "$0"} label="Total Funding" />
      </div>

      {/* Key Research Areas */}
      <div className="px-4 md:px-24">
        <Card>
          <CardHeader><CardTitle>Key Research Areas</CardTitle></CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {areaInfo.keyAreas.map((area, idx) => (
                <Badge key={idx} variant="outline" className="py-2 px-4 justify-start">
                  <span className="mr-2 text-green-600">•</span> {area}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Projects (Dinamis dari tabel Projects) */}
      <div className="px-4 md:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Current Projects</h2>
        <div className="space-y-4">
          {areaProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-green-900">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-700">{project.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-zinc-500">
                <strong>Funding:</strong> {project.funding}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Research Team (Dinamis dari tabel TeamMembers) */}
      <div className="px-4 md:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Research Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {areaTeam.map((member) => (
            <Card key={member.id} className="text-center overflow-hidden">
               <div className="h-48 bg-zinc-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
               </div>
               <CardContent className="pt-4">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-sm text-zinc-500">{member.role}</p>
                  <Badge variant="secondary" className="mt-2">{member.expertise}</Badge>
               </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />
    </div>
  );
}

// Sub-komponen kecil untuk merapikan kode
function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="h-8 w-8 mx-auto mb-2">{icon}</div>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="text-sm text-zinc-600">{label}</div>
      </CardContent>
    </Card>
  );
}