import React from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

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
  return (
    <section className="bg-neutral-50 -mx-4 px-4 py-16 mb-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center px-24">
          {/* Left Side: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
              {title}
            </h2>
            <p className="text-zinc-700 text-lg leading-relaxed">
              {overview}
            </p>
          </div>

          {/* Right Side: Hexagonal Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top hexagon */}
              <div className="col-span-2 flex justify-center">
                <div className="hexagon-container">
                  <div className="hexagon">
                    <ImageWithFallback
                      src={images[0]}
                      alt="Research team collaboration"
                      className="hexagon-image"
                    />
                  </div>
                </div>
              </div>

              {/* Middle row - 2 hexagons */}
              <div className="flex justify-end">
                <div className="hexagon-container">
                  <div className="hexagon">
                    <ImageWithFallback
                      src={images[1]}
                      alt="Research team collaboration"
                      className="hexagon-image"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="hexagon-container">
                  <div className="hexagon">
                    <ImageWithFallback
                      src={images[2]}
                      alt="Research team collaboration"
                      className="hexagon-image"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom hexagon */}
              <div className="col-span-2 flex justify-center">
                <div className="hexagon-container">
                  <div className="hexagon">
                    <ImageWithFallback
                      src={images[3] || images[0]}
                      alt="Research team collaboration"
                      className="hexagon-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hexagon-container {
          width: 200px;
          height: 200px;
          position: relative;
        }

        .hexagon {
          position: relative;
          width: 100%;
          height: 100%;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          overflow: hidden;
        }

        .hexagon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .hexagon:hover .hexagon-image {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .hexagon-container {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
}
