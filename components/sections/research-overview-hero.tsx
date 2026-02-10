import React from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

interface ResearchOverviewHeroProps {
  title: string;
  overview: string;
  images: string[];
}

export function ResearchOverviewHero({
  title,
  overview,
  images,
}: ResearchOverviewHeroProps) {
  // Pastikan kita selalu punya 4 gambar, jika kurang ambil dari yang ada atau placeholder
  const safeImages = [
    images[0] || "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    images[1] || "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80",
    images[2] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    images[3] || "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80",
  ];

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 to-white overflow-hidden py-20 lg:py-28">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Research Overview
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight tracking-tight">
              {title}
            </h2>
            
            <p className="text-zinc-600 text-lg leading-relaxed border-l-4 border-green-500 pl-6">
              {overview}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex -space-x-3">
                {safeImages.slice(0, 3).map((img, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <ImageWithFallback src={img} alt="team" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-600">
                  +12
                </div>
              </div>
              <div className="flex items-center text-sm font-medium text-zinc-500">
                Dedicated Researchers & Scientists
              </div>
            </div>
          </div>

          {/* Right Side: Advanced Hexagonal Grid */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-in slide-in-from-right duration-700 delay-200">
            <div className="relative w-full max-w-[500px] h-[500px]">
              
              {/* Hexagon 1 (Top Center) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-56 hexagon-wrapper transition-transform hover:scale-105 hover:z-10 duration-300">
                <div className="hexagon-mask w-full h-full shadow-xl">
                  <ImageWithFallback
                    src={safeImages[0]}
                    alt="Research 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium">Collaboration</span>
                  </div>
                </div>
              </div>

              {/* Hexagon 2 (Middle Left) */}
              <div className="absolute top-[130px] left-[20px] md:left-[40px] w-48 h-56 hexagon-wrapper transition-transform hover:scale-105 hover:z-10 duration-300">
                <div className="hexagon-mask w-full h-full shadow-xl">
                  <ImageWithFallback
                    src={safeImages[1]}
                    alt="Research 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Hexagon 3 (Middle Right) */}
              <div className="absolute top-[130px] right-[20px] md:right-[40px] w-48 h-56 hexagon-wrapper transition-transform hover:scale-105 hover:z-10 duration-300">
                <div className="hexagon-mask w-full h-full shadow-xl">
                  <ImageWithFallback
                    src={safeImages[2]}
                    alt="Research 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Hexagon 4 (Bottom Center) */}
              <div className="absolute top-[260px] left-1/2 -translate-x-1/2 w-48 h-56 hexagon-wrapper transition-transform hover:scale-105 hover:z-10 duration-300">
                <div className="hexagon-mask w-full h-full shadow-xl">
                  <ImageWithFallback
                    src={safeImages[3]}
                    alt="Research 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hexagon-mask {
          mask-image: url("data:image/svg+xml,%3Csvg width='200' height='230' viewBox='0 0 200 230' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0L186.603 50V150L100 200L13.3975 150V50L100 0Z' fill='black'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='200' height='230' viewBox='0 0 200 230' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0L186.603 50V150L100 200L13.3975 150V50L100 0Z' fill='black'/%3E%3C/svg%3E");
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
          background-color: white; /* Fallback color */
        }
        
        .hexagon-wrapper {
          filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.1));
        }

        @media (max-width: 640px) {
          .hexagon-wrapper {
            width: 140px; 
            height: 160px;
          }
          .absolute.top-\[130px\] { top: 90px; }
          .absolute.top-\[260px\] { top: 180px; }
          .absolute.left-\[20px\] { left: 0px; }
          .absolute.right-\[20px\] { right: 0px; }
        }
      `}</style>
    </section>
  );
}