import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ slice }) => {
  return (
    <section className="flex justify-center pt-8 md:pt-20">
      <Link href="/">
        <a className="flex flex-col justify-center md:items-center md:space-y-2 max-h-24 md:px-20 md:max-h-48 text-center">
          <Image
            alt={slice.primary.logo.alt}
            src={slice.primary.logo.url}
            width={slice.primary.logo.dimensions.width}
            height={slice.primary.logo.dimensions.height}
            loader={() => slice.primary.logo.url}
            className="filter dark:brightness-0 dark:invert object-contain max-w-sm
            "
          />
          <h1 className="text-4xl md:text-6xl font-title font-bold text-gray-900 dark:text-gray-50">
            {slice.primary.title}
          </h1>
        </a>
      </Link>
    </section>
  );
};

export default Header;
