import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Quote, Lightbulb } from "lucide-react";

// IMPORT DATA MASTER UNTUK LOOKUP (JOIN DATA)
import { researchAreas, publicationTypes } from "@/data/mock-data";

interface Publication {
  id: number;
  title: string;
  researchAreaId: string;
  authors: string;
  journal: string;
  year: number;
  typeId: number; // Update: Menggunakan typeId (number) bukan string
  summary: string;
  keywords: string[];
  url: string;
}

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  
  // --- LOGIC LOOKUP / JOIN DATA ---
  // 1. Cari Data Tipe Publikasi berdasarkan ID
  const typeData = publicationTypes.find((t) => t.id === publication.typeId);
  
  // 2. Cari Data Research Area berdasarkan ID
  const areaData = researchAreas.find((a) => a.id === publication.researchAreaId);

  // Fallback jika data tidak ditemukan (Safety check)
  const typeName = typeData ? typeData.name : "Unknown Type";
  const typeColor = typeData ? typeData.color : "bg-gray-100 text-gray-800";
  const areaName = areaData ? areaData.title : publication.researchAreaId;

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 bg-gradient-to-br from-white to-green-50/30">
      <CardContent className="p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4 mt-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-900 mb-2 leading-tight">
              {publication.title}
            </h3>
            <p className="text-zinc-600 mb-2">
              <span className="font-medium text-zinc-700">
                {publication.authors}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 ml-4">
            <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg px-3 py-1">
              {publication.year}
            </Badge>
            
            {/* BADGE TIPE PUBLIKASI (DINAMIS) */}
            <Badge className={`font-semibold ${typeColor}`}>
              {typeName}
            </Badge>
          </div>
        </div>

        {/* Journal and Research Topic */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
              📚 {publication.journal}
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full font-medium flex items-center gap-1">
              <Lightbulb className="h-3.5 w-3.5" />
              {/* NAMA AREA RISET (DINAMIS) */}
              {areaName}
            </div>
          </div>
        </div>

        <Separator className="my-4 bg-green-200" />

        {/* Summary Section */}
        <div className="mb-4">
          <div className="flex items-start gap-2 mb-2">
            <Quote className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-green-800 mb-2">
                Summary
              </h4>
              <p className="text-zinc-700 leading-relaxed">
                {publication.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Keywords Section */}
        <div className="mb-4">
          <h4 className="font-semibold text-green-800 mb-2 text-sm">
            Keywords
          </h4>
          <div className="flex flex-wrap gap-2">
            {publication.keywords.map((keyword, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="bg-white border-green-300 text-green-700 hover:bg-green-50"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-4 bg-green-200" />

        {/* Action Button */}
        <div className="flex justify-end">
          <Button
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
            onClick={() =>
              window.open(publication.url, "_blank")
            }
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Online
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}