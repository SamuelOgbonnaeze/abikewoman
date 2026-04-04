"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  { id: 1, bg: "bridals-1.JPG", overlay: "/Rec_4.png" },
  { id: 2, bg: "bridals-2.JPG", overlay: "/Rec_4.png" },
  { id: 3, bg: "bridals-4.JPG", overlay: "/Rec_4.png" },
  { id: 4, bg: "bridals-5.JPG", overlay: "/Rec_4.png" },
  { id: 5, bg: "bridals-6.JPG", overlay: "/Rec_4.png" },
];

const Hero = () => {
  return (
    <div className="relative w-full h-[195px] md:h-[400px] lg:h-screen mb-[25px] md:mb-[50px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect={"fade"}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={`https://d1dapjksca996u.cloudfront.net/public/${slide.bg}`}
                  alt={`slide-${slide.id}`}
                  className="object-cover"
                  priority
                  fill
                />
              </div>

              {/* Overlay */}
              <Image
                src={slide.overlay}
                alt="overlay"
                width={1440}
                height={753}
                className="absolute w-full md:w-[1000px] h-[195px] md:h-[400px] lg:w-full lg:h-full object-cover inset-0 z-10 opacity-10"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
