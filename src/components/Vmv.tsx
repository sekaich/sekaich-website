import type { NextPage } from 'next';
import _ from 'lodash';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Vmv: NextPage<any> = ({ lang }) => {
  return (
    <Container>
      <Row>
        <h2 className="section_title">
          <span className="section_title-ja">VISSION / MISSION / Values</span>
          <span className="section_title-en">VMV</span>
        </h2>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>VISION</Card.Title>

              <ListGroup style={{ paddingTop: '10px', fontSize: '16px' }}>
                <ListGroup.Item>「本来価値を発見・発展させる」</ListGroup.Item>
              </ListGroup>

              <Card.Text>
                セカイチャンネルは、「本来価値を発見・発展させる」をビジョンに掲げています。
                価値とは、流動的で主観的なものだと考えています。しかし確実にそこに存在します。
                弊社では、価値を様々な人に認識してもらい、その価値をより発展させる支援をしたいと考えています。
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ paddingTop: '22px' }}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>MISSION</Card.Title>

              <ListGroup style={{ paddingTop: '10px', fontSize: '16px' }}>
                <ListGroup.Item>「投資家に視点とツールを提供」</ListGroup.Item>
                <ListGroup.Item>「日本上場企業により機会を提供する」</ListGroup.Item>
                <ListGroup.Item>「海外から日本の価値を発見してもらう」</ListGroup.Item>
              </ListGroup>

              <Card.Text>
                三つのミッションがあります。投資家、海外企業、日本企業のそれぞれの発展ために働きます。
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ paddingTop: '22px' }}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>VALUES (3 Values, 3 Protections)</Card.Title>

              <h3 style={{ paddingTop: '16px' }}>3 Values</h3>
              <ListGroup style={{ paddingTop: '10px', fontSize: '16px' }}>
                <ListGroup.Item>「独自の価値の提供」</ListGroup.Item>
                <ListGroup.Item>「ソフトウェア重視」</ListGroup.Item>
                <ListGroup.Item>「進行させる」</ListGroup.Item>
              </ListGroup>

              <h3 style={{ paddingTop: '16px' }}>3 Protections</h3>
              <ListGroup style={{ paddingTop: '10px', fontSize: '16px' }}>
                <ListGroup.Item>「元本を守る」</ListGroup.Item>
                <ListGroup.Item>「取引を守る」</ListGroup.Item>
                <ListGroup.Item>「時間を守る」</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Vmv;
