import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Crowd Doing</title>
        <meta
          name="description"
          content="Stewardship Fractalization, we are decentralizing the responsibility of protecting and managing
          our environment."
        />
        <meta property="og:title" content="PotLock" />
        <meta
          property="og:description"
          content="Stewardship Fractalization, we are decentralizing the responsibility of protecting and managing
          our environment."
        />
        <meta property="og:image" content="/banner.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charSet="utf-8"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
