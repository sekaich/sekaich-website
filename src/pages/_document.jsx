import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="情報とテクノロジーで価値を築く" />
        <link rel="shortcut icon" href="favicon.ico" type="favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://sekaich.com/" />
        <meta property="og:title" content="合同会社セカイチャンネル Sekai Channel LLC" />
        <meta property="og:description" content="情報とテクノロジーで価値を築く" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/scroll-hint@latest/css/scroll-hint.css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
