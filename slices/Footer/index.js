import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ slice }) => (
  <section class="cursor-pointer w-full flex justify-between px-8 text-sm pt-8 md:pt-20">
    <div className="text-gray-900 hover:text-gray-700 active:text-gray-800 dark:text-gray-50 dark:hover:text-gray-200 dark:active:text-gray-100 space-x-4 flex items-center">
      <a
        href="https://www.facebook.com/thec3uk"
        className="text-gray-900 hover:text-gray-700 active:text-gray-800 dark:text-gray-50 dark:hover:text-gray-200 dark:active:text-gray-100"
      >
        <FontAwesomeIcon icon={faFacebookF} fixedWidth className="h-5" />
      </a>
      <a
        href="https://www.instagram.com/thec3_church"
        className="text-gray-900 hover:text-gray-700 active:text-gray-800 dark:text-gray-50 dark:hover:text-gray-200 dark:active:text-gray-100"
      >
        <FontAwesomeIcon icon={faInstagram} fixedWidth className="h-8" />
      </a>
    </div>
    <div className="space-x-2">
      {slice.items.map((item) => (
        <a
          className="text-gray-900 hover:text-gray-700 active:text-gray-800 dark:text-gray-50 dark:hover:text-gray-200 dark:active:text-gray-100 hover:underline"
          href={item.linkUrl}
        >
          {item.linkTitle}
        </a>
      ))}
    </div>
  </section>
);

export default Footer;
