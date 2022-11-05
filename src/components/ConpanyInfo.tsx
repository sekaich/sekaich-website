import type { NextPage } from 'next';

const Header: NextPage<any> = ({ lang }) => {
  const isJA = lang === 'ja';

  return (
    <section className="section" id="company">
      <div className="inner">
        <div className="section_head-company">
          <h2 className="section_title">
            <span className="section_title-ja">
              {isJA ? '会社概要' : 'Company Infomation'}
            </span>
            <span className="section_title-en">company</span>
          </h2>
        </div>
        <div className="section_body">
          <div className="sec-company_flex">
            <dl className="sec-company_list">
              <div className="sec-company_item">
                <dt className="sec-company_item_title">
                  {isJA ? '会社名' : 'Company Name'}
                </dt>
                <dd className="sec-company_item_text">
                  {isJA ? '合同会社セカイチャンネル' : 'Sekai Channel LLC.'}
                </dd>
              </div>
              <div className="sec-company_item">
                <dt className="sec-company_item_title">{isJA ? '所在地' : 'Address'}</dt>
                <dd className="sec-company_item_text">
                  {isJA
                    ? '東京都墨田区八広2-50-8 フルリール墨田 203'
                    : '2-50-8-203 Yahiro, Sumida-ku, Tokyo'}
                </dd>
              </div>
              <div className="sec-company_item">
                <dt className="sec-company_item_title">
                  {isJA ? '代表者' : 'President'}
                </dt>
                <dd className="sec-company_item_text">
                  {isJA ? '白川　大記' : 'Daiki Shirakawa'}
                </dd>
              </div>
              <div className="sec-company_item">
                <dt className="sec-company_item_title">
                  {isJA ? '設立日' : 'Date of establishment'}
                </dt>
                <dd className="sec-company_item_text">
                  {isJA ? '2016年2月5日' : 'February 5, 2016'}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
