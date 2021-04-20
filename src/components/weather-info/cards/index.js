import { Row, Col } from 'antd';

import MainCard from './main-card';
import DailyCard from './daily-card';
const WeatherCards = () => {
  return (
    <Row justify='center'>
      <Col xs={20} lg={18}>
        <MainCard />
        <DailyCard />
      </Col>
    </Row>
  );
};

export default WeatherCards;
