import type { NextPage } from 'next';
import _ from 'lodash';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Kaburank: NextPage<any> = ({ lang }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="section_title">
            <span className="section_title-ja">KABURANK とは</span>
            <span className="section_title-en">KABURANK</span>
          </h2>

          <Card>
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Kaburank;
