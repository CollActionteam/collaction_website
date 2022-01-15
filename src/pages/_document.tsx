import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    const currentURL = 'https://collaction.org';
    const description =
      'Do you want to make the world a better place? Do your actions feel like a drop in the ocean?';
    const previewImage = '/Logo_green.png';
    const pageTitle = 'CollAction | Power to the Crowd | Act Now';

    return (
      <Html lang="en">
        <Head>
          <meta name="description" content={description} />
          <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;700&display=optional"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
