import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MuiServerStyleSheets } from '@mui/styles';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
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

export default CustomDocument;

CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
  const styledComponentSheets = new StyledComponentSheets();
  const muiServerStyleSheets = new MuiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () => {
      const ops = {
        enhanceApp: (App: any) => {
          return (props: any) => {
            return styledComponentSheets.collectStyles(
              muiServerStyleSheets.collect(<App {...props} />),
            );
          };
        },
      };

      return originalRenderPage(ops);
    };

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styledComponentSheets.getStyleElement()}
          {muiServerStyleSheets.getStyleElement()}
        </>
      ),
    };
  } finally {
    styledComponentSheets.seal();
  }
};
