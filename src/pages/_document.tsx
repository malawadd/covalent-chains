import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="chains on covalent."
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https: localhost:* data: http://unpkg.com; script-src 'unsafe-eval' https: localhost:* blob:; style-src 'unsafe-inline' https:;"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="same-origin" />
        <link rel="icon" href="./sakura-wallpaper.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
