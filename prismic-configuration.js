import {Client} from "@prismicio/client";
import Link from "next/link";

import smConfig from "./slicemachine.config.json";

if (!smConfig.apiEndpoint) {
  console.warn(
    "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
  );
}

export const apiEndpoint = smConfig.apiEndpoint;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = "";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  if (doc.type === "redirect") {
    return `/${doc.uid}`;
  }
  return "/";
};

export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={linkResolver(element.data)}
    as={linkResolver(element.data)}
  >
    {content}
  </Link>
);

export const Router = {
  routes: [
    { type: "page", path: "/:uid" },
    { type: "redirect", path: "/:uid" },
  ],
  href: (type) => {
    const route = Router.routes.find((r) => r.type === type);
    return route && route.href;
  },
};

export const MyClient = (req = null, options = {}) =>
  new Client(
    apiEndpoint,
    Object.assign({ routes: Router.routes }, options)
  );
