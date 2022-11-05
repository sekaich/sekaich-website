import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
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
                  Collect information on Japanese listed companies
                  <br className="sp" />
                  on Sekai Channel
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
                    Sekai Channel FEATURE for collecting information on listed companies
                  </span>
                  <span className="section_title-en">feature</span>
                </h2>
              </div>
              <div className="section_body">
                <p className="sec-feature_text">
                  Sekai Channel Limited Liability Company has strengths in Japanese listed
                  company analysis and consulting.
                  <br />
                  He has experience in IT service business management and fund management,
                  as well as business experience in Asia.
                  <br />
                  All of these services are also available in English.
                  <br />
                  Please contact us for more information from{' '}
                  <span style={{ color: 'red' }}>here</span>.
                </p>
                <ul className="sec-feature_list">
                  <li className="sec-feature_item">
                    <p className="sec-feature_item_point">Feature 1</p>
                    <figure className="sec-feature_item_figure">
                      {/* <Image src="img/icon_code.svg" alt="" /> */}
                    </figure>
                    <h3 className="sec-feature_item_title">
                      Collect information automatically
                    </h3>
                    <p className="sec-feature_item_text"></p>
                  </li>
                  <li className="sec-feature_item">
                    <p className="sec-feature_item_point">Feature 2</p>
                    <figure className="sec-feature_item_figure">
                      {/* <Image src="img/icon_support.svg" alt="" /> */}
                    </figure>
                    <h3 className="sec-feature_item_title">
                      Flexible analysis and creation of various data
                    </h3>
                    <p className="sec-feature_item_text"></p>
                  </li>
                  <li className="sec-feature_item">
                    <p className="sec-feature_item_point">Feature 3</p>
                    <figure className="sec-feature_item_figure">
                      {/* <Image src="img/icon_search.svg" alt="" /> */}
                    </figure>
                    <h3 className="sec-feature_item_title">Low price provided</h3>
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
