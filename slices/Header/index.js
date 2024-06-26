import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ slice }) => {
  return (
    <section className="flex justify-center pt-8 pb-8 md:pt-20">
      <Link href="/" className="flex flex-col justify-center items-center md:space-y-2 max-h-24 md:px-20 md:max-h-48 text-center">

          <Image
            alt={slice.primary.logo.alt}
            src={slice.primary.logo.url}
            width={slice.primary.logo.dimensions.width}
            height={slice.primary.logo.dimensions.height}
            loader={() => slice.primary.logo.url}
            className="filter object-contain md:max-w-32 max-w-20" // dark:brightness-0 dark:invert
          />
          <h1 className="text-4xl md:text-6xl font-title font-bold text-gray-900">
            {slice.primary.title}
          </h1>

      </Link>
    </section>
  );
};

export default Header;
