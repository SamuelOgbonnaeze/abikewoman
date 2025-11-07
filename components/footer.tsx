"use client";
import Image from "next/image";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = () => {
    const now = new Date();
    return now.getFullYear();
  };

  const handleContact = () => {
    const phoneNumber = "2347038072466";
    const message = encodeURIComponent(`Hello, The AbikeWoman! `);

    // WhatsApp URL format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      id="support"
      className="bg-[#3D021E] text-white px-[30px] md:px-[70px] py-[40px] md:py-[80px] mt-[90px] "
    >
      <div className="flex flex-col md:flex-row justify-between mb-[40px] ">
        <div className="flex flex-col">
          <Image
            src="/logo-ls.png"
            width={125}
            height={42}
            alt="Logo"
            priority
            unoptimized
          />
          <div className="flex flex-col gap-y-4 mt-6">
            <p className="w-[250px] text-sm tracking-[0.25px] font-semibold ">
              The AbikeWoman
            </p>
            <div className="text-[#FBEFF2] flex items-center gap-x-6">
              <Link
                href="https://www.instagram.com/theabikewoman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/abikeclothings"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </Link>
              <div onClick={handleContact}>
                <FaWhatsapp size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-[100px] mt-5 md:mt-0 gap-y-4 lg:gap-y-0 ">
          <div className="flex flex-col text-left gap-y-4 md:gap-y-6">
            {/* section header */}
            <p className="font-medium text-lg tracking-[0.25px] ">
              Collections{" "}
            </p>
            <div className="flex flex-col gap-y-1 md:gap-y-3 text-sm tracking-[0.25px] font-roboto font-normal ">
              <Link href="/#nuach">
                <p>Nuach Collection</p>
              </Link>
              <Link href="/#igbatuntun">
                <p>Igbatuntun Collection</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col text-left gap-y-4 md:gap-y-6">
            <p className="font-medium text-lg tracking-[0.25px] ">Genres </p>
            <div className="flex flex-col gap-y-1 md:gap-y-3 text-sm tracking-[0.25px] font-roboto font-normal ">
              <Link href="/#bridals">
                <p>Bridals</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="flex items-center ">
        <p className="text-sm font-normal text-center w-full">
          &copy;{currentYear()} TheAbikeWoman. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
