import type { NextPage } from 'next';
import _ from 'lodash';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Kaburank: NextPage<any> = ({ lang }) => {
  const ja = (
    <Card.Body>
      <Card.Title>
        KABURANKとは、日本上場株の分析基盤を提供する専用サービスです。
      </Card.Title>

      <h3 style={{ paddingTop: '10px', fontWeight: 'bold' }}>機能一覧</h3>

      <ListGroup style={{ paddingTop: '10px', fontSize: '14px' }}>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>上場株リストダウンロード:</b>
          様々なリストを指標をつけて、エクセルでダウンロードすることができます。
        </ListGroup.Item>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>RS算出:</b>
          日本株の独自指標として、RSを取り入れ、独自に算出しています。
        </ListGroup.Item>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>先導株:</b>
          先導株・先導業界の発見
        </ListGroup.Item>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>EDINET/TDNETページ化:</b>
          即時情報サービスを読みやすくする機能、英語での解説も提供しています。
        </ListGroup.Item>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>対象:</b>
          成長株投資家、モメンタム投資家に適したサービスです。
        </ListGroup.Item>
      </ListGroup>

      <Card.Footer>KABURANKのもっと詳しい情報は こちら (開発中)</Card.Footer>
    </Card.Body>
  );

  const en = (
    <Card.Body>
      <Card.Title>
        KABURANK is a dedicated service that provides an analysis platform for Japanese
        listed stocks.
      </Card.Title>

      <h3 style={{ paddingTop: '10px', fontWeight: 'bold' }}>Functions List</h3>

      <ListGroup style={{ paddingTop: '10px', fontSize: '14px' }}>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>Stock List Download:</b>
          Various lists can be indexed and downloaded in Excel.
        </ListGroup.Item>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>RS calculation:</b>
          As a unique index for Japanese stocks, RS is incorporated and calculated
          independently.
        </ListGroup.Item>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>Leading Stocks:</b>
          Discovery of Leading Stocks and Leading Industries
        </ListGroup.Item>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>EDINET/TDNET Translation:</b>
          Provides a function that makes the instant information service easier to read,
          and also provides explanations in English.
        </ListGroup.Item>
        <ListGroup.Item>
          <b style={{ paddingRight: '12px' }}>Target:</b>
          This service is suitable for growth stock investors and momentum investors.
        </ListGroup.Item>
      </ListGroup>

      <Card.Footer>
        More information about KABURANK can be found here (under development)
      </Card.Footer>
    </Card.Body>
  );

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="section_title">
            <span className="section_title-ja">
              {lang === 'ja' ? 'KABURANK とは' : 'About KABURANK'}
            </span>
            <span className="section_title-en">KABURANK</span>
          </h2>

          <Card>{lang === 'ja' ? ja : en}</Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Kaburank;
