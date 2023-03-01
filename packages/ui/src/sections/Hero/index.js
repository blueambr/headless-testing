import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative">
      <Image
        className="absolute object-cover"
        src="/bg.jpg"
        alt="An ocean"
        fill
      />
      <div className="container relative flex h-full min-h-[500px] items-center py-12">
        <h1 className="w-full text-center font-serif text-6xl text-white">
          Hero section
        </h1>
      </div>
    </section>
  );
};
