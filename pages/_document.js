import Document, {Html, Head, Main, NextScript} from 'next/document';
import MagicScriptTag from '../pages/next-ssr';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <Head>
          <html lang="sv" />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="icon" type="image/png" href="icons/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="icons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="icons/favicon-96x96.png" sizes="96x96" />
          <link rel="apple-touch-icon" size="180x180" href="icons/apple-touch-icon.png" />
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
