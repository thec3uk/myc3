import * as Slices from "./slices";
import Button from "./slices/Button";
import Card from "./slices/Card";
import ContactForm from "./slices/ContactForm";
import Footer from "./slices/Footer";
import Header from "./slices/Header";
import Link from "./slices/Link";
import Media from "./slices/Media";
import Text from "./slices/Text";

const __allSlices = {
  ...Slices,
  ...Slices.components,
  Button,
  Card,
  ContactForm,
  Footer,
  Header,
  Link,
  Media,
  Text,
};

const NotFound = ({ sliceName, slice, i }) => {
  console.error(
    `[sm-resolver] component "${sliceName}" not found at index ${i}.`,
  );
  console.warn(`slice data: ${slice}`);
  return process.env.NODE_ENV !== "production" ? (
    <div
      style={{
        height: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        background: "#FAFAFA",
      }}
    >
      <h2>Slice "{sliceName}" not found.</h2>
      <p style={{ maxWidth: "320px", fontSize: "16px" }}>
        Check that you registered this component in your slices library!
      </p>
    </div>
  ) : null;
};

export default function SliceResolver({ sliceName, ...rest }) {
  return __allSlices[sliceName]
    ? __allSlices[sliceName]
    : () => <NotFound sliceName={sliceName} {...rest} />;
}
