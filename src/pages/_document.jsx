import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
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
        <script
          type="text/javascript"
          async
          src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script
          type="text/javascript"
          async
          src="https://unpkg.com/scroll-hint@latest/js/scroll-hint.min.js"></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
