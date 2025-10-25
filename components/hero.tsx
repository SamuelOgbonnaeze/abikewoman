"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  { id: 1, bg: "/bridals-1.JPG", overlay: "/Rec_4.png" },
  { id: 2, bg: "/bridals-2.JPG", overlay: "/Rec_4.png" },
  { id: 3, bg: "/bridals-4.JPG", overlay: "/Rec_4.png" },
  { id: 4, bg: "/bridals-5.JPG", overlay: "/Rec_4.png" },
  { id: 5, bg: "/bridals-6.JPG", overlay: "/Rec_4.png" },
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
                  src={slide.bg}
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

              {/* Text content */}
              <div className="relative w-full h-full flex flex-col items-center justify-center z-20 text-gray-100 text-center gap-y-1">
                <p className="text-[16px] md:text-[24px] lg:text-[44px] font-openSans leading-[22px] md:leading-[36px] lg:leading-[62px] font-bold">
                  The AbikeWoman
                </p>
                {/* Subtext here */}
                {/* <div className="w-[319px] md:w-[522px] lg:w-[682px] lg:py-1 lg:px-4">
                  <p className="font-openSans font-normal text-[8px] lg:text-[16px] leading-[14px] lg:leading-[28px]">
                    Subtitle text
                  </p>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
