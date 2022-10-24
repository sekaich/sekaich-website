import type { NextPage } from 'next';
import Head from 'next/head';

const CommonHead: NextPage = () => {
  return (
    <div>
      <Head>
        <html lang="ja" />
        <meta charSet="utf-8" />
        <title>合同会社セカイチャンネル</title>
        <meta name="description" content="情報とテクノロジーで価値を築く" />
        <link rel="shortcut icon" href="favicon.ico" type="favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://sekaich.com/" />
        <meta property="og:title" content="合同会社セカイチャンネル Sekai Channel LLC" />
        <meta property="og:description" content="情報とテクノロジーで価値を築く" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </div>
  );
};

export default CommonHead;
