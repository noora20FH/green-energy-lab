"use client";

import React from "react";
import {
  Mail,
  User,
  GraduationCap,
  MapPin,
  Phone,
  Award as AwardIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

// IMPORT DATA
import { professorProfile, teamMembers } from "@/data/mock-data";

export function BioSection() {
  return (
    <div className="space-y-16 px-4 md:px-12 lg:px-24 py-12">
      {/* --- BAGIAN ATAS: PROFILE & BIOGRAPHY --- */}
      <section className="grid lg:grid-cols-12 gap-12 items-start">
        {/* KOLOM KIRI: FOTO & KONTAK (Lebar: 3/12) */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="overflow-hidden border-zinc-200 shadow-sm">
            <div className="aspect-[3/4] w-full relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758685734614-63fe30c18b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyOTAyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professor James Wilson"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-5 text-center">
              <h1 className="text-xl font-bold text-zinc-900">
                Prof. James Wilson
              </h1>
              <p className="text-sm text-green-600 font-medium mb-3">
                Principal Investigator
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-zinc-100 text-zinc-700"
                >
                  PhD, MIT
                </Badge>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  IEEE Fellow
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="border-zinc-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-600 shrink-0" />
                <span className="truncate">j.wilson@university.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-600 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>
                  Building 5, Room 301
                  <br />
                  Green Energy Lab
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* KOLOM KANAN: BIO, EDUCATION, AWARDS (Lebar: 9/12) */}
        {/* Menggabungkan kolom tengah dan kanan sebelumnya menjadi satu kolom lebar */}
        <div className="lg:col-span-9 space-y-10">
          {/* 1. Biography Section */}
          <div>
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-zinc-900 flex items-center gap-3">
                  Biography
                  <Separator className="flex-1 bg-zinc-200 h-[2px]" />
                </h2>

                {/* RENDER HTML STRING DI SINI */}
                <div
                  className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{
                    __html: professorProfile.biography,
                  }}
                />
              </div>
            </div>
          </div>

          {/* 2. Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-zinc-900">
              <GraduationCap className="h-6 w-6 text-green-600" />
              Education & Credentials
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {professorProfile.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-50 p-5 rounded-lg border border-zinc-100"
                >
                  <div className="font-bold text-zinc-900 text-lg">
                    {edu.degree}
                  </div>
                  <div className="text-zinc-600 mt-1">{edu.institution}</div>
                  <div className="text-sm text-zinc-400 mt-2 font-mono">
                    {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Awards Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-zinc-900">
              <AwardIcon className="h-6 w-6 text-green-600" />
              Honors & Awards
            </h3>
            <div className="bg-white rounded-lg border border-zinc-100 divide-y divide-zinc-100">
              {professorProfile.awards.map((award, idx) => (
                <div
                  key={idx}
                  className="p-4 flex items-center gap-4 hover:bg-zinc-50 transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
                  <span className="font-medium text-zinc-700">
                    {award.title}
                  </span>
                  <span className="ml-auto text-sm text-zinc-400">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* --- BAGIAN BAWAH: RESEARCH TEAM --- */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-zinc-900">
            Our Research Team
          </h2>
          <p className="text-lg text-zinc-600">
            The brilliant minds driving our innovation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-lg transition-all hover:-translate-y-1 text-center overflow-hidden border-zinc-200"
            >
              <div className="aspect-square w-full overflow-hidden bg-zinc-100 relative">
                <ImageWithFallback
                  src={
                    member.image ||
                    `https://ui-avatars.com/api/?name=${member.name}&background=random`
                  }
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-4">
                <h4
                  className="font-bold text-zinc-900 truncate"
                  title={member.name}
                >
                  {member.name}
                </h4>
                <p className="text-xs text-green-600 font-medium mb-2 uppercase tracking-wide truncate">
                  {member.role}
                </p>
                <Badge
                  variant="outline"
                  className="text-[10px] px-2 py-0 h-5 border-zinc-300 text-zinc-500"
                >
                  {member.expertise}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
