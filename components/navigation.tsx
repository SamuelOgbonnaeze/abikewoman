import Link from "next/link";
import Image from "next/image";

import { MessageSquareShare } from "lucide-react";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "./ui/native-select";

export const Navigation = () => {
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
          <NativeSelect>
            <NativeSelectOption value="">Select</NativeSelectOption>
            <NativeSelectOptGroup label="Collections">
              <Link href="/#igbatuntun">
                <NativeSelectOption value="igbatuntun">
                  Igbatuntun Collection
                </NativeSelectOption>
              </Link>
              <NativeSelectOption value="backend">Backend</NativeSelectOption>
              <NativeSelectOption value="devops">DevOps</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Sales">
              <NativeSelectOption value="sales-rep">
                Sales Rep
              </NativeSelectOption>
              <NativeSelectOption value="account-manager">
                Account Manager
              </NativeSelectOption>
              <NativeSelectOption value="sales-director">
                Sales Director
              </NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Operations">
              <NativeSelectOption value="support">
                Customer Support
              </NativeSelectOption>
              <NativeSelectOption value="product-manager">
                Product Manager
              </NativeSelectOption>
              <NativeSelectOption value="ops-manager">
                Operations Manager
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
            <p className="group-hover:text-[#720439]">Order now</p>
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
