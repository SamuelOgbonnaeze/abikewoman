"use client";

import Link from "next/link";
import Image from "next/image";

import { MessageSquareShare } from "lucide-react";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "./ui/native-select";
import { useRouter } from "next/navigation";

export const Navigation = () => {
  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value) {
      router.push(value);
    }
  };

  return (
    <div className="w-full  py-2 px-[30px] lg:px-[72px] bg-[#3D021E] border-b border-[#DFDFDF] ">
      <div className="w-full flex items-center justify-between ">
        {/*  */}
        <Link href="/">
          <Image
            src="/logo-ls.png"
            alt="Logo"
            width={150}
            height={50}
            priority
          />
        </Link>
        {/*  */}
        <div className="hidden md:flex items-center gap-x-[20px] lg:gap-x-[40px] ">
          <NativeSelect onChange={handleSelectChange}>
            <NativeSelectOption value="">Collections</NativeSelectOption>

            <NativeSelectOptGroup label="Collections">
              <NativeSelectOption value="/#igbatuntun">
                Igbatuntun Collection
              </NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>

          {/* <Link href="/#bridals">
            <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">
              Bridals
            </p>
          </Link>
          <Link href="/#ire">
            <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">
              Collections
            </p>
          </Link>
          <Link href="/#rtw">
            <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">
              Ready to wear
            </p>
          </Link> */}
        </div>
        {/*  */}
        <Link href="/">
          <div className="flex items-center gap-x-1 md:gap-x-4 text-[12px] lg:text-[16px] text-[#D3B1C2]  group">
            <p className="group-hover:text-[#720439]">Contact now</p>
            <MessageSquareShare
              className="group-hover:text-[#720439] text-[12px] md:text-[20px]"
              size={16}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
