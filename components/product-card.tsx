import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

export const ProductCard = ({
  imageSrc,
  title,
  description,
  link,
}: Readonly<ProductCardProps>) => {
  return (
    <div className="w-[151px] md:w-[235px] lg:w-[270px] h-[300px] md:h-[320px] lg:h-[470px] bg-white border border-[#EDEDED] hover:scale-105  duration-300 hover:shadow-md rounded-md relative group lg:overflow-hidden">
      <div className="relative">
        <Image
          src={imageSrc.startsWith("/") ? imageSrc : `/${imageSrc}`}
          alt="Product Image"
          width={300}
          height={384}
          className="w-full h-[170px]  lg:h-[470px] object-cover"
          priority
        />

        {/* Sliding overlay from bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/50  transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out  text-white lg:px-4 text-sm hidden lg:flex ">
          <div className="flex flex-col gap-y-3 items-center justify-start text-white p-2">
            <p className="text-2xl font-semibold">{title}</p>
            <p className="w-full text-sm text-wrap line-clamp-3">
              {description}
            </p>
            <div className="absolute bottom-4 ">
              <Link
                href={`/${link}`}
                className="flex gap-2 w-full items-center"
              >
                <p className="text-sm font-semibold">See more</p>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative w-full h-full text-black  text-sm flex lg:hidden ">
        <div className="flex-col gap-y-3 items-center justify-start p-2">
          <p className="text-lg font-semibold">{title}</p>
          <p className="w-full text-xs text-wrap line-clamp-2">{description}</p>
          <Link
            href={`/${link}`}
            className="flex gap-2 w-full text-sm text-gray-400 items-center mt-1"
          >
            <p>See more</p>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
