import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ slice }) => (
  <section className="cursor-pointer w-full flex justify-between md:justify-around items-center px-4 md:px-8 text-sm pt-8 md:pt-20 space-x-16 md:space-x-48">
    <div className="text-gray-900 hover:text-gray-700 active:text-gray-800 space-x-4 flex items-center">
      <a
        href="https://www.facebook.com/thec3uk"
        className="text-gray-900 hover:text-gray-700 active:text-gray-800"
      >
        <FontAwesomeIcon icon={faFacebookF} fixedWidth className="h-5" />
      </a>
      <a
        href="https://www.instagram.com/thec3_church"
        className="text-gray-900 hover:text-gray-700 active:text-gray-800"
      >
        <FontAwesomeIcon icon={faInstagram} fixedWidth className="h-8" />
      </a>
    </div>
    <div className="space-x-2">
      {slice.items.map((item) => {
        return (
          <a
            key={item.linkUrl.url}
            className="text-gray-900 hover:text-gray-700 active:text-gray-800 hover:underline whitespace-nowrap"
            href={item.linkUrl.url}
          >
            {item.linkTitle}
          </a>
        );
      })}
    </div>
  </section>
);

export default Footer;
