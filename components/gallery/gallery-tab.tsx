import Image from "next/image";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
  image: ImageType;
}

export const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  const isVideo = (url: string) => /\.(mp4|webm|ogg|mov)$/i.test(url);

  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            {isVideo(image.url) ? (
              <video
                src={image.url}
                className="w-full h-full object-cover object-center"
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <Image
                src={image.url}
                fill
                alt=""
                className="object-cover object-center"
                priority
                unoptimized
              />
            )}
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};
