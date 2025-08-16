import Link from "next/link";

import {MessageSquareShare} from 'lucide-react';

export const Navigation = () => {

    return (
        <div className="w-full py-[29px] px-[30px] lg:px-[72px] border-b border-[#DFDFDF] ">
            <div className="w-full flex items-center justify-between ">

                {/*  */}
                <Link href="/">
                    <div className="text-[12px] lg:text-[16px]">
                        ABk Logo
                    </div>
                </Link>
                {/*  */}
                <div className="hidden md:flex items-center gap-x-[20px] lg:gap-x-[40px] ">
                    <Link href="#bridals">
                        <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Bridals</p>
                    </Link>
                    <Link href="#ire">
                        <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Collections</p>
                    </Link>
                    <Link href="#rtw">
                        <p className="font-openSans font-bold text-[12px] lg:text-[16px] text-[#D3B1C2] hover:text-[#720439] leading-[22px] ">Ready
                            to wear</p>
                    </Link>

                </div>
                {/*  */}
                <Link href="/">
                    <div className="flex items-center gap-x-1 md:gap-x-4 text-[12px] lg:text-[16px] text-[#D3B1C2]  group">
                        <p className="group-hover:text-[#720439]">Order now</p>
                        <MessageSquareShare className="group-hover:text-[#720439] text-[12px] md:text-[20px]" size={16}/>
                    </div>
                </Link>
            </div>
        </div>
    );
}
