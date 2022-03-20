import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => {
  return (
    <div className="bg-gray-50 dark:bg-purple-900 w-screen min-h-screen absolute pb-4 dark:text-grayscale-50">
      <SliceZone {...props} resolver={resolver} />
    </div>
  );
};
// COPY FROM next-slicezone/src/features/query.js
const multiQueryTypes = ["repeat", "repeatable", "multi"];

async function query({ queryType, apiParams, type, client }) {
  const { uid, ...restApiParams } = apiParams;
  const caller =
    multiQueryTypes.indexOf(queryType) !== -1
      ? ["getByUID", [type, uid, restApiParams]]
      : ["getSingle", [type, restApiParams]];

  return await client[caller[0]](...caller[1]);
}
// COPY END

export const getServerSideProps = async ({
  preview = null,
  previewData = {},
  params = {},
  ...rest
}) => {
  const { ref = null } = previewData;

  const redirects = await query({
    queryType: "repeat",
    apiParams: Object.assign(
      { ref },
      {
        uid: params.uid,
      }
    ),
    type: "redirect",
    client: Client(),
  });

  if (
    redirects &&
    redirects.tags.includes("domain:myc3.life") &&
    redirects.data.destination
  ) {
    return {
      redirect: {
        destination: redirects.data.destination.url,
        permanent: redirects.data.permanent,
      },
    };
  }
  const page = await query({
    queryType: "repeat",
    apiParams: Object.assign(
      { ref },
      {
        uid: params.uid,
      }
    ),
    type: "page",
    client: Client(),
  });
  if (page && page.tags.includes("domain:myc3.life")) {
    return {
      props: { ...page, slices: page.data.body },
    };
  }
};

export default Page;
