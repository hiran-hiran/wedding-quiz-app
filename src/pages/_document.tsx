import Document, { Html, Head, Main, NextScript } from 'next/document'
import fetch from 'node-fetch'
import { abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill'

global.fetch = abortableFetch(fetch).fetch
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
