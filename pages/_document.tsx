import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

import MagicScriptTag from './next-ssr';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="sv">
        <Head>
          <meta name="title" content="Ani - Min tonårshjärna" />
          <meta name="description" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ani-brain.com/" />
          <meta property="og:title" content="Ani - Min tonårshjärna" />
          <meta property="og:image" content="https://ani-brain.com/op-image.jpg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ani-brain.com/" />
          <meta property="twitter:title" content="Ani - Min tonårshjärna" />
          <meta property="twitter:image" content="https://ani-brain.com/op-image.jpg" />
          <html lang="sv" />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="icon" type="image/png" href="icons/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="icons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="icons/favicon-96x96.png" sizes="96x96" />
          <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
          <link rel="android-chrome-192x192" sizes="192x192" href="android-chrome-192x192" />
          <link rel="android-chrome-512x512" sizes="512x512" href="android-chrome-512x512" />
        </Head>
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
