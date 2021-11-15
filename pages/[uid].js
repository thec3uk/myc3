import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => <SliceZone {...props} resolver={resolver} />;

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

  return {
    props: {}, // will be passed to the page component as props
  };
};

// Fetch content from prismic
// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   queryType: "repeat",
//   type: "page",
//   apiParams({ params }) {
//     return {
//       uid: params.uid,
//     };
//   },
// });

// export const getStaticPaths = (obj) => {
//   const pages = useGetStaticPaths({
//     client: Client(),
//     type: "page",
//     formatPath: (prismicDocument) => {
//       // console.log(prismicDocument);
//       if (prismicDocument.tags.includes("domain:myc3.life")) {
//         return {
//           params: {
//             uid: prismicDocument.uid,
//           },
//         };
//       }
//       return null;
//     },
//   });

//   const redirects = useGetStaticPaths({
//     client: Client(),
//     type: "redirect",
//     formatPath: (prismicDocument) => {
//       // console.log(prismicDocument);
//       if (prismicDocument.tags.includes("domain:myc3.life")) {
//         return {
//           params: {
//             uid: prismicDocument.uid,
//           },
//         };
//       }
//       return null;
//     },
//   });
//   return Promise.all([pages(), redirects()]).then((response) => {
//     let paths = response.flatMap((item) => item.paths);
//     return {
//       paths: paths,
//       fallback: true,
//     };
//   });
// };

export default Page;
