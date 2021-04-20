import { useContext } from 'react';

import styled from 'styled-components';

import { Row, Col, Typography } from 'antd';

import { weatherContext } from './../../../context/weather';

import styles from './../styles.sc';

const { WeatherIcon } = styles;
const S = {
  Container: styled(Row)`
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.2);
    background-color: #f4f9ff;
    margin: 20px 0;
    padding: 10px;
  `,
};
const DayCard = styled(Col)`
  width: 200px;
  aspect-ratio: 6/9;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const Title = styled(Typography.Text)`
  font-size: ${({ size }) => `${size}px` || 'auto'};
  font-weight: ${({ level = 6 }) => level * 100};
  padding: 20px;
`;
const Text = styled(Typography.Text)`
  font-size: ${({ size }) => `${size}px` || '18px'};
  color: inherit;
`;
const Tempurature = styled.div`
  width: 100%;
  text-align: center;
  color: #1890ff;
`;

const DailyCard = () => {
  const { dailyData } = useContext(weatherContext);
  console.log({ dailyData });
  return (
    <S.Container justify='space-between'>
      <Col xs={24}>
        <Title size={26}>Daily forecast</Title>
      </Col>
      <DayCard>
        <Title level={5} size={18}>
          Today
        </Title>
        <Tempurature>
          <Text>26/22</Text>
        </Tempurature>
        <WeatherIcon
          loading='lazy'
          src={`http://openweathermap.org/img/w/01.png`}
        />
        <Text>45 km/h</Text>
      </DayCard>
      <DayCard></DayCard>
      <DayCard></DayCard>
    </S.Container>
  );
};
export default DailyCard;
