// load libraries
import { Layout, Row, Col, Typography } from 'antd';
import styled from 'styled-components';

// load assets
import WeatherIcon from './../../assets/icons/weather.png';

const { Title } = Typography;
const S = {
  Header: styled(Layout.Header)`
    background-color: #1890ff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  `,
  Logo: styled.img`
    height: 60px;
    cursor: pointer;
  `,
};

const Header = () => {
  return (
    <S.Header>
      <Row justify='center' align='middle'>
        <Col>
          <Title title={2} type='secondary'>
            <S.Logo alt='weather icon' src={WeatherIcon} />
          </Title>
        </Col>
      </Row>
    </S.Header>
  );
};

export default Header;
