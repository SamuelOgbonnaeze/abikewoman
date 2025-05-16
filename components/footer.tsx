import Image from "next/image";

import Logo from "../public/hero.png"
import { GrGoogle, GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {

    const currentYear = () => {
        const now = new Date();
        return now.getFullYear();
    }

    return (
        <div id="support" className="bg-[#3D021E] text-white px-[30px] md:px-[70px] py-[40px] md:py-[80px] mt-[90px] ">

            <div className="flex flex-col md:flex-row justify-between mb-[40px] ">
                <div className="flex flex-col">
                    <Image
                        src={Logo}
                        width={125}
                        height={42}
                        alt="Logo"
                    />
                    <div className="flex flex-col gap-y-4 mt-6">
                        <p className="w-[250px] text-sm tracking-[0.25px] font-semibold ">The AbikeWoman</p>
                        <div className="text-[#FBEFF2] flex items-center gap-x-6">
                            <Link href='/'>
                                <GrInstagram size={24} />
                            </Link>
                            <Link href='/'>
                                <FaFacebook size={24} />
                            </Link>
                            <Link href='/'>
                                <GrGoogle size={24} />
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-[100px] mt-5 md:mt-0 gap-y-4 lg:gap-y-0 ">
                    <div className="flex flex-col text-left gap-y-4 md:gap-y-6">
                        {/* section header */}
                        <p className="font-medium text-lg tracking-[0.25px] ">Collections </p>
                        <div className="flex flex-col gap-y-1 md:gap-y-3 text-sm tracking-[0.25px] font-roboto font-normal ">
                            <p>Partners</p>
                            <p>Community</p>
                            <p>Developers</p>
                            <p>App</p>

                        </div>
                    </div>

                    <div className="flex flex-col text-left gap-y-4 md:gap-y-6">
                        <p className="font-medium text-lg tracking-[0.25px] ">Genres </p>
                        <div className="flex flex-col gap-y-1 md:gap-y-3 text-sm tracking-[0.25px] font-roboto font-normal ">
                            <p>Bridals</p>
                            <p>Ready to wear</p>
                            <p>Bespoke</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright section */}
            <div className="flex items-center ">
                <p className="text-sm font-normal text-center w-full">&copy;{currentYear()} TheAbikeWoman. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;