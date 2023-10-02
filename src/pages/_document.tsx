import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head />
      <title>Codext</title>
      <link rel="shortcut icon" href="/codext-icon.ico" />
      <meta property="og:title" content={`Codext`} key="title" />
      <meta
        property="og:description"
        content="Landing page for Codext webpage"
        key="description"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
