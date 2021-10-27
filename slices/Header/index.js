import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ slice }) => {
  return (
    <section className="flex justify-center pt-20">
      <Link href="/">
        <a className="flex flex-col justify-center items-center space-y-2 max-w-xs px-20 text-center">
          <Image
            alt={slice.primary.logo.alt}
            src={slice.primary.logo.url}
            width={slice.primary.logo.dimensions.width}
            height={slice.primary.logo.dimensions.height}
            loader={() => slice.primary.logo.url}
            className="filter dark:brightness-0 dark:invert"
          />
          <h1 className="text-6xl font-title font-bold text-gray-900 dark:text-gray-50">
            {slice.primary.title}
          </h1>
        </a>
      </Link>
    </section>
  );
};

export default Header;
