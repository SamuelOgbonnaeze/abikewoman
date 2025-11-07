"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Spinner } from "./ui/spinner";

interface ProductCardProps {
  mediaSrc: string;
  title: string;
  description: React.ReactNode;
  link: string;
}

export const ProductCard = ({
  mediaSrc,
  title,
  description,
  link,
}: Readonly<ProductCardProps>) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const isVideo = mediaSrc ? /\.(mp4|webm|ogg|mov)$/i.test(mediaSrc) : false;
  const fullPath =
    mediaSrc?.startsWith("http") || mediaSrc?.startsWith("/")
      ? mediaSrc
      : `/${mediaSrc || ""}`;

  // Intersection Observer to detect when video is near viewport
  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [isVideo]);

  // Load video when shouldLoad is true
  useEffect(() => {
    if (shouldLoad && isVideo && videoRef.current) {
      videoRef.current.load();
    }
  }, [shouldLoad, isVideo]);

  const handleMouseEnter = () => {
    if (videoRef.current && isLoaded) {
      videoRef.current.play().catch((error) => {
        console.log("Video play failed:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleLinkClick = () => {
    setIsNavigating(true);
  };

  return (
    <>
      <div
        className="w-[151px] md:w-[235px] lg:w-[270px] h-[300px] md:h-[320px] lg:h-[470px] bg-white border border-[#EDEDED] hover:scale-105 duration-300 hover:shadow-md rounded-md relative group lg:overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          {isVideo ? (
            <>
              <video
                ref={videoRef}
                src={shouldLoad ? fullPath : undefined}
                className="w-full h-[170px] lg:h-[470px] object-cover"
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={() => setIsLoaded(true)}
                onCanPlayThrough={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                </div>
              )}
            </>
          ) : (
            <Image
              src={fullPath}
              alt="Product Image"
              width={300}
              height={384}
              className="w-full h-[170px] lg:h-[470px] object-cover"
              priority
              unoptimized
            />
          )}

          {/* Sliding overlay from bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out text-white lg:px-4 text-sm hidden lg:flex">
            <div className="flex flex-col gap-y-3 items-center justify-start text-white p-2">
              <p className="text-2xl font-semibold">{title}</p>
              <p className="w-full text-sm text-wrap line-clamp-4 whitespace-pre-line">
                {description}
              </p>
              <div className="absolute bottom-4">
                <Link
                  href={`/${link}`}
                  onClick={handleLinkClick}
                  className="flex gap-2 w-full items-center"
                >
                  <p className="text-sm font-semibold">See more</p>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-full text-black text-sm flex lg:hidden">
          <div className="flex-col gap-y-3 items-center justify-start p-2">
            <p className="text-md md:text-lg font-semibold">{title}</p>
            <p className="w-full text-xs text-wrap line-clamp-2 whitespace-pre-line">
              {description}
            </p>
            <Link
              href={`/${link}`}
              onClick={handleLinkClick}
              className="flex gap-2 w-full text-sm text-gray-400 items-center mt-1"
            >
              <p>See more</p>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Loader Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="flex items-center ">
            <Spinner className="size-8" />
          </div>
        </div>
      )}
    </>
  );
};
