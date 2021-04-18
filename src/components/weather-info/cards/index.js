import { Row, Col } from 'antd';

import HomeCard from './home-card';

const WeatherCards = () => {
  return (
    <Row justify='center'>
      <Col xs={18}>
        <HomeCard />
      </Col>
    </Row>
  );
};

export default WeatherCards;
