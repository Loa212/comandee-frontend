import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div
            className="very-important-stuff ;-) "
            dangerouslySetInnerHTML={{
              __html: `<!--

─▄▀─▄▀
──▀──▀
█▀▀▀▀▀█▄
█░░░░░█─█
▀▄▄▄▄▄▀▀

█▀▀ █▀▀█ █▀▀ █▀▀ █▀▀ 　 ▀█
█░░ █░░█ █▀▀ █▀▀ █▀▀ 　 █▀
▀▀▀ ▀▀▀▀ ▀   ▀   ▀▀▀ 　 ▄░
-->`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
