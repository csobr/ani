import Document, {Html, Head, Main, NextScript} from 'next/document';
import MagicScriptTag from '../pages/next-ssr';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
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
