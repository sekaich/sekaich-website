import type { NextPage } from 'next';
import _ from 'lodash';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Vmv: NextPage<any> = ({ lang }) => {
  const isJA = lang === 'ja';

  return (
    <Container>
      <Row>
        <h2 className="section_title">
          <span className="section_title-ja">VISSION / MISSION / VALUES</span>
          <span className="section_title-en">VMV</span>
        </h2>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>VISION</Card.Title>

              <ListGroup style={{ paddingTop: '10px', fontSize: '16px' }}>
                <ListGroup.Item>
                  {isJA
                    ? '「本来価値を発見・発展させる」'
                    : 'Discover and develop intrinsic value'}
                </ListGroup.Item>
              </ListGroup>

              <Card.Text>
                {isJA ? (
                  <>
                    セカイチャンネルは、「本来価値を発見・発展させる」をビジョンに掲げています。
                    価値とは、流動的で主観的なものだと考えています。しかし確実にそこに存在します。
                    弊社では、価値を様々な人に認識してもらい、その価値をより発展させる支援をしたいと考えています。
                  </>
                ) : (
                  <>
                    Sekai Channel's vision is to "discover and develop intrinsic value".
                    We believe that value is fluid and subjective. But it is definitely
                    there. We would like to have various people recognize the value and
                    support the further development of that value.
                  </>
                )}
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
                <ListGroup.Item>
                  {isJA
                    ? '「投資家に視点とツールを提供」'
                    : '"Providing Investors with Perspectives and Tools"'}
                </ListGroup.Item>
                <ListGroup.Item>
                  {isJA
                    ? '「日本上場企業により機会を提供する」'
                    : '“Providing opportunities for Japanese listed companies”'}
                </ListGroup.Item>
                <ListGroup.Item>
                  {isJA
                    ? '「海外から日本の価値を発見してもらう」'
                    : '“Discover the value of Japan from overseas”'}
                </ListGroup.Item>
              </ListGroup>

              <Card.Text>
                {isJA
                  ? '三つのミッションがあります。投資家、海外企業、日本企業のそれぞれの発展ために働きます。'
                  : 'There are 3 missions. We work for the development of investors, overseas companies, and Japanese companies.'}
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
                <ListGroup.Item>
                  {isJA ? '「独自の価値の提供」' : '"Provision of unique value"'}
                </ListGroup.Item>
                <ListGroup.Item>
                  {isJA ? '「ソフトウェア重視」' : '"Software focused"'}
                </ListGroup.Item>
                <ListGroup.Item>{isJA ? '「進行させる」' : '"Proceed"'}</ListGroup.Item>
              </ListGroup>
              <h3 style={{ paddingTop: '16px' }}>3 Protections</h3>
              <ListGroup style={{ paddingTop: '10px', fontSize: '16px' }}>
                <ListGroup.Item>
                  {isJA ? '「元本を守る」' : '"Protect the principal"'}
                </ListGroup.Item>
                <ListGroup.Item>
                  {isJA ? '「取引を守る」' : '"Protect the deal"'}
                </ListGroup.Item>
                <ListGroup.Item>
                  {isJA ? '「時間を守る」' : '"be on time"'}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Vmv;
