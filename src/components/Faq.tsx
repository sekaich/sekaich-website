import type { NextPage } from 'next';
import _ from 'lodash';

const Faq: NextPage<any> = ({ lang }) => {
  const ja: any = [
    {
      q: '合同会社セカイチャンネルはどこの会社ですか？',
      a: '東京都にある日本の会社です。',
    },
    {
      q: 'セカイチャンネルはなぜこのような専門的なサービスを提供できるのですか？',
      a: '弊社には、IT サービスの開発・運用経験、株式投資、スタートアップ運営、ファンド運用の知見があります。これまでの知見を活用、集約してご提供が可能になっています。',
    },
    {
      q: 'どのようにコンタクトを取ったらいいですか？',
      a: 'まずはコンタクトフォームからご連絡をお願いします。メールでやり取りさせていただき、その後、ご要望あれば、メッセンジャー、チャットワークなどのツールを利用可能です。',
    },
    {
      q: '外貨での支払いは可能ですか？',
      a: '外貨のお支払いの場合は、クレジットカードでの支払いをお願いしております。',
    },
  ];

  const en: any = [
    {
      q: 'Which company is Sekai Channel LLC?',
      a: 'A Japanese company located in Tokyo.',
    },
    {
      q: 'Why can Sekai Channel provide such professional service?',
      a: '弊社には、IT サービスの開発・運用経験、株式投資、スタートアップ運営、ファンド運用の知見があります。これまでの知見を活用、集約してご提供が可能になっています。',
    },
    {
      q: 'How should I contact to company?',
      a: 'Please contact us from the contact form first. We will communicate by email, and after that, if you wish, you can use tools such as messenger and chatwork.',
    },
    {
      q: 'Is it possible to pay in foreign currency?',
      a: 'In case of payment in foreign currency, we ask that you pay by credit card.',
    },
  ];

  const f = _.map(lang === 'ja' ? ja : en, (v: any) => {
    return (
      <div className="faq_item" key={v.q}>
        <div className="faq_item-row">
          <span className="faq_item-icon faq_item-item_question">q</span>
          <span className="faq_item-row_body faq_item-row_body_question">{v.q}</span>
        </div>
        <div className="faq_item-row">
          <span className="faq_item-icon faq_item-item_answer">a</span>
          <span className="faq_item-row_body faq_item-row_body_answer">{v.a}</span>
        </div>
      </div>
    );
  });

  return (
    <section className="section" id="faq">
      <div className="inner">
        <div className="section_head-faq">
          <h2 className="section_title">
            <span className="section_title-ja">
              {lang === 'ja' ? 'よくあるご質問' : 'Frequently Asked Questions'}
            </span>
            <span className="section_title-en">faq</span>
          </h2>
        </div>
        <div className="section_body">
          <div className="faq_list">{f}</div>

          <div className="sec-faq_btn">
            <div className="btnWrap">
              <p className="btn-bubble">
                {lang === 'ja' ? 'まずはご相談から' : 'Start with your consultation'}
              </p>
              <a
                className="btn"
                target="_blank"
                rel="noreferrer"
                href="https://forms.gle/6d2dT5484Jj2mnye6">
                {lang === 'ja' ? 'お問い合せはこちら' : 'Contact here'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
