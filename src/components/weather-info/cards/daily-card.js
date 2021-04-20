import { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
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
  DayCard: styled(Col)`
    width: 150px;
    aspect-ratio: 6/9;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  `,
};

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

const DayCard = ({ date, min, max, icon, wind }) => {
  return (
    <S.DayCard>
      <Title level={5} size={18}>
        {date}
      </Title>
      <Tempurature>
        <Text>{min}</Text> / <Text size={20}>{max}</Text>
      </Tempurature>
      <WeatherIcon
        loading='lazy'
        src={`http://openweathermap.org/img/w/${icon}.png`}
        size={60}
      />
      <Text>{wind} km/h</Text>
    </S.DayCard>
  );
};

const DailyCard = () => {
  const { dailyData } = useContext(weatherContext);
  console.log({ dailyData });
  return (
    <S.Container justify='space-around'>
      <Col xs={24}>
        <Title size={26}>Daily forecast</Title>
      </Col>

      {dailyData.map((daily) => {
        const { dt, wind_speed, weather, temp } = daily;

        let date = moment(dt * 1000);
        let dayNumer = date.format('D');
        let dayLetter = date.format('ddd');
        const dateFormatted = `${dayLetter}. ${dayNumer}`;

        const iconCode = weather[0].icon;
        const { min, max } = temp;

        return (
          <DayCard
            wind={wind_speed.toFixed()}
            date={dateFormatted}
            icon={iconCode}
            min={min}
            max={max}
          />
        );
      })}
    </S.Container>
  );
};
export default DailyCard;
