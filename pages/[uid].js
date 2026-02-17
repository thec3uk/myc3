import { MyClient } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => {
  const bgImage = props.data?.background_image?.url;
  let styles = {};
  if (bgImage) {
    styles = {
      backgroundImage: `url(${bgImage})`,
    };
  }
  return (
    <div
      className="absolute w-screen min-h-screen pb-4 bg-gray-50"
      style={styles}
    >
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
  try {
    return await client[caller[0]](...caller[1]);
  } catch (error) {
    console.log(error.message);
    if (error.message !== "No documents were returned") {
      console.error(`[query] Unexpected error fetching ${type}/${uid}:`, error);
    }
    return { tags: [] };
  }
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
      },
    ),
    type: "redirect",
    client: MyClient(),
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
      },
    ),
    type: "page",
    client: MyClient(),
  });
  if (page && page.tags.includes("domain:myc3.life")) {
    return {
      props: { ...page, slices: page.data.body },
    };
  }
  return { notFound: true };
};

export default Page;
