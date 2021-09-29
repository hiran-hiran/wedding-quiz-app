import Document, { Html, Head, Main, NextScript } from "next/document";
import fetch from "node-fetch";
import { abortableFetch } from "abortcontroller-polyfill/dist/cjs-ponyfill";

global.fetch = abortableFetch(fetch).fetch;
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-m text-xl bg-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
