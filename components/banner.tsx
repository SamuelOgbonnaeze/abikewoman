import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative  h-[237px] md:h-[400px] lg:w-full lg:h-[733px] mb-[85px] overflow-x-hidden">
      {/* Background image */}
      <Image
        src="/hero_3.jpg"
        alt="banner image"
        width={1440}
        height={753}
        className="absolute  w-full h-full object-cover inset-0 z-0"
      />

      {/* Overlay image */}
      <Image
        src="/Rec_11.png"
        alt="Overlay"
        layout="fill"
        className="absolute object-cover inset-0 z-10"
      />

      {/* Text content */}
      <div className="relative z-20 flex items-center ml-[23px]  lg:ml-[75px]  w-full h-full text-left">
        <div className="text-white w-[118px] md:w-[250px] lg:w-[591px] h-[175px] md:h-[400px] lg:h-[715px] ">
          <p className="font-bold font-outfit text-[20px] md:text-4xl lg:text-8xl leading-[35px] md:leading-[100px] lg:leading-[143px] h-full ">PRESERVE YOUR GLOW, EMBRACE YOUR HUE</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
