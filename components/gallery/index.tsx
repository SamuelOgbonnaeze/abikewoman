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
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              {isVideo(image.url) ? (
                <video
                  src={image.url}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                />
              ) : (
                <Image
                  fill
                  src={image.url}
                  alt="Image"
                  className="object-cover object-center"
                  priority
                />
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
