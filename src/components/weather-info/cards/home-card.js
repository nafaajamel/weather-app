import { useContext, useMemo } from 'react';

import { Space, Col, Typography } from 'antd';

import { weatherContext } from './../../../context/weather';

import windImg from './../../../assets/icons/wind.png';

import S from './../styles.sc';

const { Title } = Typography;

const { Text, WeatherIcon } = S;

// helpers
const msTokmhConvert = (ms) => {
  return Math.round(Number(ms) * 3.6);
};
const toFixed = (temp) => {
  return temp.toFixed();
};

const HomeCard = () => {
  const { staticData } = useContext(weatherContext);
  const cityName = staticData.name;
  const { description } = staticData.weather[0];
  const temperature = staticData.main.temp;
  const maxTemperature = staticData.main.temp_max;
  const minTemperature = staticData.main.temp_min;
  const iconCode = staticData.weather[0]?.icon;
  const windSpeed = staticData.wind.speed;

  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  const today = new Date().toDateString();

  return (
    <S.HomeCard justify='space-between'>
      <Col>
        <Title level={3}>{cityName}</Title>
        <Text>{today}</Text>
        <Title level={1}>{`${toFixed(temperature)}°`}</Title>
        <Text>{description}</Text>
      </Col>
      <Col>
        <Space direction='vertical' size='large'>
          <WeatherIcon
            size={80}
            src={iconUrl}
            alt='weather icon'
            loading='lazy'
          />
          <Text>{`${toFixed(maxTemperature)}° / ${toFixed(
            minTemperature
          )}°`}</Text>
          <div>
            <WeatherIcon size={40} src={windImg} alt='wind' />
            <Text>{`${msTokmhConvert(windSpeed)} km/h`}</Text>
          </div>
        </Space>
      </Col>
    </S.HomeCard>
  );
};

export default HomeCard;
