import React from "react";
import { RichText } from "prismic-reactjs";

const Text = ({ slice }) => {
  console.log(slice);
  const title_alignment = {
    left: "text-center md:text-left",
    center: "text-center md:text-center",
    right: "text-center md:text-right",
  };
  return (
    <section className="grid items-center justify-center grid-cols-1 my-6 md:grid-cols-4">
      <div className="mx-auto md:col-span-2 md:col-start-2 prose">
        <div
          className={`${
            slice.title_alignment ? title_alignment[slice.title_alignment] : ""
          } text-lg`}
        >
          {slice.primary.title && <RichText render={slice.primary.title} />}
        </div>
        {slice.primary.content && <RichText render={slice.primary.content} />}
      </div>
    </section>
  );
};

export default Text;
