import { Row, Col } from 'antd';

import WeatherCards from './cards/index';

import S from './styles.sc';

const WeatherInfo = () => {
  return (
    <Row>
      <Col xs={24}>
        <WeatherCards />
      </Col>
    </Row>
  );
};

export default WeatherInfo;
