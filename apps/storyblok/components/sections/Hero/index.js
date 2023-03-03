import Image from "next/image";

const Hero = ({ blok }) => {
  return (
    <section className="relative">
      <Image
        className="absolute object-cover"
        src={blok?.background?.filename}
        alt={blok?.background?.alt}
        fill
      />
      <div className="container relative flex h-full min-h-[500px] items-center py-12">
        <h1 className="w-full text-center font-serif text-6xl text-white">
          {blok?.heading}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
