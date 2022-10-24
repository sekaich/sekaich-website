import type { NextPage } from 'next';
import _ from 'lodash';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface list {
  title: string;
  body: any;
}

const Header: NextPage<any> = ({ lang }) => {
  const styles = {
    logo: {
      fontSize: '32px',
      fontFamily: 'initial',
      fontWeight: 'bold',
      color: 'darkblue',
    },
  };

  const ja: list[] = [
    {
      title: '1. KABURANK',
      body: (
        <>
          KABURANKは、日本上場株の分析基盤を提供するサービスです。
          <br />
          フィルターした日本上場株に指標や独自指標の日本版RSをつけて、エクセルでダウンロードできます。
          ほか、即時情報サービスを読みやすくする機能、英語での解説も提供しています。
          企業価値、成長力をしっかり分析する成長株投資家、先導株を発見するモメンタム投資家に適したサービスです。
        </>
      ),
    },
    {
      title: '2. カスタム情報提供サービス',
      body: (
        <>
          KABURANKのメニューでは提供していない注文に応じたデータを作成します。
          <br />
          種類としては、個別のデータの自動収集、業界分析、独自の指標の算出、個別の企業分析などがあります。
        </>
      ),
    },
    {
      title: '3. スポットアナリスト',
      body: (
        <>
          アナリストとして、白川大記とそのチームを活用できます。
          <br />
          データ取得後の分析やチームでの議論、判断軸の提供、買収会社へのDD、PMIの補助、投資戦略の作成やチェックなどに活用ください。
          <br />
          特に、投資会社・ファンド、M&Aを活用される事業会社、提携を検討される事業会社、個人投資家の方々に活用いただきたいです。
        </>
      ),
    },
    {
      title: '4. 事業支援',
      body: (
        <>
          事業、スタートアップ、開発、投資などより具体的で個別な支援が可能です。
          <br />
          週一のミーティング参加、コーチング、技術顧問、戦略支援、リサーチなど。英語での対応が可能です。
        </>
      ),
    },
    {
      title: '5. 日本へのマッチング支援・進出支援',
      body: (
        <>
          日本でのビジネスを拡大したい、日本へ進出をしたい方向けのサービスです。
          <br />
          調査やパートナー、顧客探し、初期の担当者として支援が可能です。
          <br />
          また場合によっては、人材を探すこともできます。
        </>
      ),
    },
  ];

  const en: list[] = [
    {
      title: '1. KABURANK',
      body: `KABURANKは、日本上場株の分析基盤を提供するサービスです。
    様々なリストを指標をつけて、エクセルでダウンロードすることができます。
    そして、日本株の独自指標として、RSを取り入れ、独自に算出しています。
    そのほか、即時情報サービスを読みやすくする機能、英語での解説も提供しています。
    企業価値、成長力をしっかり分析する成長株投資家、先導株を発見するモメンタム投資家に適したサービスです。`,
    },
    {
      title: '2. カスタム情報提供サービス',
      body: `KABURANKのメニューでは提供していない注文に応じたデータを作成します。
    種類としては、個別のデータの自動収集、業界分析、独自の指標の算出、個別の企業分析などがあります。`,
    },
    {
      title: '3. Spot Analyst',
      body: `アナリストとして、白川大記とそのチームを活用できます。
    データ取得後の分析やチームでの議論、判断軸の提供、買収会社へのDD、PMI の補助、投資戦略の作成やチェックなどに活用ください。
    特に、投資会社・ファンド、M&Aを活用される事業会社、提携を検討される事業会社、個人投資家の方々に活用いただきたいです。`,
    },
    {
      title: '4. Spot Consulting',
      body: `事業、スタートアップ、開発、投資などより具体的で個別な支援が可能です。
    週一のミーティング参加、コーチング、技術顧問、戦略支援、リサーチなど。英語での対応が可能です。`,
    },
    {
      title: '5. 日本へのマッチング支援・進出支援',
      body: `日本でのビジネスを拡大したい、日本へ進出をしたい方向けのサービスです。調査やパートナー、顧客探し、初期の担当者として支援が可能です。また場合によっては、人材を探すこともできます。`,
    },
  ];

  const menu = _.map(ja, (val: list) => {
    return (
      <Col md={6} style={{ paddingTop: '16px' }} key={val.title}>
        <Card style={{ minHeight: '192px', backgroundColor: 'lightblue' }}>
          <Card.Body>
            <Card.Title>{val.title}</Card.Title>
            <Card.Text>{val.body}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Container>
      <Row>{menu}</Row>
    </Container>
  );
};

export default Header;
