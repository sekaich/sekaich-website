import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import CommonHead from '../../components/CommonHead';
import Header from '../../components/Header';
import ConpanyInfo from '../../components/ConpanyInfo';
import Faq from '../../components/Faq';
import ServiceMenu from '../../components/ServiceMenu';
import Kaburank from '../../components/Kaburank';
import Footer from '../../components/Footer';
import Vmv from '../../components/Vmv';

const Home: NextPage = () => {
  const LANG = 'en';

  return (
    <div className={styles.container}>
      <Head>
        <CommonHead />
        <html lang={LANG} />
        <title>Sekai Channel LLC.</title>
      </Head>

      <Header lang={LANG} />

      <main>
        <div className="mv">
          <picture className="mv_bg">
            <source media="(max-width:769px)" />
          </picture>

          <div
            style={{ backgroundColor: 'rgb(74, 40, 200)', padding: '40px 1px 1px 1px' }}>
            <div className="inner">
              <p className="mv_catch">Expart of Japan Stocks Research</p>
              <div className="mv_text">
                <p>
                  Japan Stocks List
                  <br className="sp" />
                  easy to get.
                </p>
                <p>
                  日本の上場企業情報集めは
                  <br className="sp" />
                  セカイチャンネルで
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-top_content">
          <section className="section" id="feature">
            <div className="inner">
              <div className="section_head-feature">
                <h2 className="section_title">
                  <span className="section_title-ja">
                    上場企業の情報取集なら セカイチャンネル
                  </span>
                  <span className="section_title-en">feature</span>
                </h2>
              </div>
              <div className="section_body">
                <p className="sec-feature_text">
                  合同会社セカイチャンネルでは、日本上場企業分析とコンサルティングを強みとしております。
                  <br />
                  ITサービス事業運営やファンド運用経験があり、また、アジアでの事業経験があります。
                  <br />
                  これらのサービスは、全て英語での提供も可能です。
                  <br />
                  詳しくは、<span style={{ color: 'red' }}>こちら</span>
                  からお問い合わせください。
                </p>
                <ul className="sec-feature_list">
                  <li className="sec-feature_item">
                    <p className="sec-feature_item_point">特徴1</p>
                    <figure className="sec-feature_item_figure">
                      <img src="img/icon_code.svg" alt="" />
                    </figure>
                    <h3 className="sec-feature_item_title">自動的に情報を集める</h3>
                    <p className="sec-feature_item_text"></p>
                  </li>
                  <li className="sec-feature_item">
                    <p className="sec-feature_item_point">特徴2</p>
                    <figure className="sec-feature_item_figure">
                      <img src="img/icon_support.svg" alt="" />
                    </figure>
                    <h3 className="sec-feature_item_title">
                      柔軟に様々なデータを分析・作成
                    </h3>
                    <p className="sec-feature_item_text"></p>
                  </li>
                  <li className="sec-feature_item">
                    <p className="sec-feature_item_point">特徴3</p>
                    <figure className="sec-feature_item_figure">
                      <img src="img/icon_search.svg" alt="" />
                    </figure>
                    <h3 className="sec-feature_item_title">安価に提供</h3>
                    <p className="sec-feature_item_text"></p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <ServiceMenu lang={LANG} />
          <Kaburank lang={LANG} />

          <Vmv lang={LANG} />
          <Faq lang={LANG} />
          <ConpanyInfo lang={LANG} />
        </div>
      </main>

      <Footer lang={LANG} />
    </div>
  );
};

export default Home;
