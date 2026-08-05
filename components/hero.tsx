const CDNUrl = process.env.NEXT_PUBLIC_CDN_URL;

const Hero = () => {
  return (
    <div className="relative w-full h-svh overflow-hidden bg-black">
      {/* Adelaide Collection trailer video */}
      <video
        src={`${CDNUrl}/adelaide_trailer.mp4`}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Centered brand text overlay */}
      <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-light tracking-[0.3em] md:tracking-[0.4em] text-center drop-shadow-lg uppercase">
          The AbikeWoman
        </h1>
      </div>
    </div>
  );
};

export default Hero;
