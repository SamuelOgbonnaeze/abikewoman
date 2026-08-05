"use client";

import Image from "next/image";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import { GalleryTab } from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const isVideo = (url: string) => /\.(mp4|webm|ogg|mov)$/i.test(url);

  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full max-w-2xl block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            {isVideo(image.url) ? (
              /* Portrait video — natural aspect ratio, no cropping */
              <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] sm:rounded-lg overflow-hidden bg-black">
                <video
                  src={image.url}
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                />
              </div>
            ) : (
              /* Image — keep original square crop behaviour */
              <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                <Image
                  fill
                  src={image.url}
                  alt="Image"
                  className="object-cover object-center"
                  priority
                />
              </div>
            )}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
