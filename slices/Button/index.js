import React from "react";
import Link from "next/link";

const variations = {
  "default-slice":
    "bg-white text-gray-900 hover:text-red-500 active:text-red-400",
  // redButton:
  //   "bg-red-500 hover:bg-red-400 dark:bg-red-500 text-gray-50 dark:text-gray-900",
  // yellowButton:
  //   "bg-yellow-300 hover:bg-yellow-200 dark:bg-yellow-300 text-gray-900 dark:text-gray-900",
  // tealButton:
  //   "bg-teal-500 hover:bg-teal-400 dark:bg-teal-300 dark:hover:bg-teal-200 text-gray-50 dark:text-gray-900",
  // purpleButton:
  //   "bg-purple-900 hover:bg-purple-800 dark:bg-purple-300 dark:hover:bg-purple-200 text-gray-50 dark:text-gray-900",
};

const Button = ({ slice }) => {
  const buttonClasses = `transition duration-200 text-lg mx-4 lg:mx-20 py-3 px-2 border shadow hover:translate-y-px hover:shadow-none col-start-1 col-span-1 md:col-span-2 md:col-start-2 text-center
    bg-white text-gray-900 hover:text-red-500 active:text-red-400`;
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-center my-6">
      {slice.primary.linkUrl.link_type === "Web" ? (
        <a href={slice.primary.linkUrl.url} className={buttonClasses}>
          {slice.primary.linkTitle}
        </a>
      ) : (
        <Link href={slice.primary.linkUrl.url}>
          <a className={buttonClasses}>{slice.primary.linkTitle}</a>
        </Link>
      )}
    </section>
  );
};

export default Button;
