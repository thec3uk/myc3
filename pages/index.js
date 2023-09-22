import { MyClient } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => {
  return (
    <div className="bg-gray-50 w-screen min-h-screen absolute pb-4">
      <SliceZone {...props} resolver={resolver} />
    </div>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: MyClient(),
  type: "page",
  queryType: "repeat",
  apiParams: {
    uid: "myc3",
  },
});

export default Page;
