import type { NextPage } from 'next';

const Header: NextPage<any> = ({ lang }) => {
  const styles = {
    logo: {
      fontSize: '32px',
      fontFamily: 'initial',
      fontWeight: 'bold',
      color: 'darkblue',
    },
  };

  return (
    <section className="section" id="company">
      <div className="inner">
        <div className="section_head-company">
          <h2 className="section_title">
            <span className="section_title-ja">会社概要</span>
            <span className="section_title-en">company</span>
          </h2>
        </div>
        <div className="section_body">
          <div className="sec-company_flex">
            <dl className="sec-company_list">
              <div className="sec-company_item">
                <dt className="sec-company_item_title">会社名</dt>
                <dd className="sec-company_item_text">合同会社セカイチャンネル</dd>
              </div>
              <div className="sec-company_item">
                <dt className="sec-company_item_title">所在地</dt>
                <dd className="sec-company_item_text">
                  東京都墨田区八広2-50-8 フルリール墨田 203
                </dd>
              </div>
              <div className="sec-company_item">
                <dt className="sec-company_item_title">代表者</dt>
                <dd className="sec-company_item_text">白川　大記</dd>
              </div>
              <div className="sec-company_item">
                <dt className="sec-company_item_title">設立日</dt>
                <dd className="sec-company_item_text">2016年2月5日</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
