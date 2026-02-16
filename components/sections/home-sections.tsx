"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import {
  ArrowRight,
  BookOpen,
  Award,
  GraduationCap,
  BarChart3,
  ExternalLink,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";
import Autoplay from "embla-carousel-autoplay";

import { publications, researchAreas } from "@/data/mock-data";
interface HomeSectionsProps {
  setActiveTab: (tab: string) => void;
  setResearchAreaPage: (area: string) => void;
}
export function HomeSections({
  setActiveTab,
  setResearchAreaPage,
}: HomeSectionsProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const latestPublications = [...publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Full Width Background) */}
      <section className="w-full relative">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="overflow-hidden h-screen w-full"
        >
          <CarouselContent className="h-full ml-0">
            {[
              {
                img: "https://images.unsplash.com/photo-1644349057008-19f93297bc0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGdyZWVuJTIwZW5lcmd5fGVufDF8fHx8MTc3MDI1MTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Solar Innovation",
                desc: "Pioneering next-generation photovoltaic technology",
              },
              {
                img: "https://images.unsplash.com/photo-1700471880224-3f84e2fe58a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjByZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzcwMjQ2NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Wind Energy",
                desc: "Optimizing wind farm efficiency through AI",
              },
              {
                img: "https://images.unsplash.com/photo-1675774648629-e1f0dbc152fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3klMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3MDI5MDI3OHww&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Research Excellence",
                desc: "State-of-the-art laboratory facilities",
              },
            ].map((slide, idx) => (
              <CarouselItem key={idx} className="relative h-screen pl-0">
                <ImageWithFallback
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                  <div className="container mx-auto px-4 md:px-24 pb-24 text-white">
                    <h2 className="text-6xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-2xl mb-8">{slide.desc}</p>
                    <Button
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 text-white"
                      // REDIRECT KE PUBLICATIONS
                      onClick={() => setActiveTab("publications")}
                    >
                      Explore Research
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* 2. RESEARCH AREAS (Dinamis dari Mock Data) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Our Research Focus
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area) => (
              <Card
                key={area.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group flex flex-col"
              >
                <div className="overflow-hidden h-64">
                  <ImageWithFallback
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-green-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-zinc-700 mb-6 leading-relaxed line-clamp-3 text-sm flex-grow">
                    {area.description}
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab("research-areas");
                      setResearchAreaPage(area.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group/link mt-auto"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT SECTION (Full Width Background, Contained Content) */}
      <section className="w-full bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 py-20">
        <div className="container mx-auto px-4 md:px-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Impact & Achievements
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                value: "150+",
                label: "Publications",
                color: "bg-white/20",
              },
              {
                icon: <Award className="h-8 w-8" />,
                value: "12",
                label: "Awards",
                color: "bg-white/20",
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                value: "25+",
                label: "PhD Students",
                color: "bg-white/20",
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                value: "$5M+",
                label: "Research Funding",
                color: "bg-white/20",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div
                  className={`flex justify-center text-white mb-3 p-3 rounded-full ${stat.color} w-fit mx-auto`}
                >
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-white text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LATEST PUBLICATIONS (Contained Width) */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              <BookOpen className="h-8 w-8 text-green-600" />
              LATEST PUBLICATIONS
            </h2>
            <div className="mt-4">
              <Button
                variant="ghost"
                onClick={() => {
                  setActiveTab("publications");
                  window.scrollTo({ top: 0, behavior: "smooth" }); // Opsional: Scroll ke atas agar user tidak bingung
                }}
                className="text-zinc-500 hover:text-green-700"
              >
                See all publications <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* GRID LAYOUT (Untuk menghilangkan white space) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPublications.map((pub) => (
              <Card
                key={pub.id}
                className="hover:shadow-lg transition-all hover:-translate-y-1 h-full border-zinc-200"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                    >
                      {pub.journal}
                      {researchAreas.find(a => a.id === pub.researchAreaId)?.title}
                    </Badge>
                    <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
                      {pub.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-tight text-zinc-800 flex-grow">
                    {pub.title}
                  </h3>

                  <div className="mb-6">
                    <p className="text-sm text-zinc-500 line-clamp-2 italic">
                      {pub.authors}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => toast.success("Opening publication...")}
                    className="w-full mt-auto group hover:bg-green-50 hover:text-green-700 hover:border-green-200"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESEARCH IN ACTION (Full Width Background) */}
      <section className="w-full bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 md:px-24">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Research in Action
          </h2>
          <p className="text-xl text-center text-green-50 mb-12">
            Watch our latest experiments and technological breakthroughs
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Join our community
                </h3>
                <p className="text-green-50 mb-8 leading-relaxed">
                  We document our research journey, from early-stage prototypes
                  to field testing. Subscribe to our channel for weekly visual
                  updates and laboratory insights.
                </p>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-red-600 hover:bg-red-700 text-white p-5 rounded-xl transition-all group shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <Youtube className="h-8 w-8" />
                    <span className="text-lg font-bold uppercase tracking-wide">
                      Visit YouTube Channel
                    </span>
                  </div>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/1kUE0BZtTRc?rel=0&modestbranding=1"
                  title="Research Demonstration Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                    Featured Demo
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  Latest Research Demonstration
                </h3>
                <p className="text-sm text-gray-600">
                  Watch our team showcase cutting-edge green energy innovations
                  and breakthrough technologies live from the lab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
