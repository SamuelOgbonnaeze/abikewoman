import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[237px] md:h-[400px] lg:h-[733px] w-full mb-[85px] overflow-x-hidden">
      {/* Background image */}
      <Image
        src="/banner.png"
        alt="banner image"
        fill
        className="object-cover inset-0 z-0"
        priority
      />

      {/* Overlay image */}
      <Image
        src="/Rec_11.png"
        alt="Overlay"
        fill
        className="object-cover inset-0 z-10 opacity-60"
        priority
      />

      {/* Text content */}
      <div className="relative z-20 ml-[23px] lg:ml-[75px] w-full h-full flex items-center">
        <div className="text-white w-[118px] md:w-[250px] lg:w-[591px]">
          <p className="font-bold font-outfit text-[20px] md:text-4xl lg:text-8xl leading-[35px] md:leading-[100px] lg:leading-[143px]">
            BEAUTY WITHOUT COMPROMISE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
