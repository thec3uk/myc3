// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

import { createResolver } from "next-slicezone/resolver";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {process.env.NODE_ENV === "production" && (
            <script
              async
              defer
              data-website-id="231a1dee-01c4-422e-adbc-d253914fe38c"
              src="https://analytics.myc3.life/script.js"
            ></script>
          )}
        </Head>
        <body>
          {/* Hidden form for Netlify Forms build-time detection */}
          <form
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
          >
            <input type="hidden" name="form-name" value="contact" />
            <input name="bot-field" />
            <input name="name" />
            <input name="email" />
            <select name="category">
              <option value=""></option>
            </select>
            <input name="subject" />
            <textarea name="message"></textarea>
            <input name="consent" />
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
