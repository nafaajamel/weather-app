import { useContext, useMemo } from 'react';

import { Row, Col, Typography } from 'antd';

import { weatherContext } from './../../../context/weather';

import S from './../styles.sc';

const getWeatherFormatted = (data) => {
  const cityName = data.name;
  const { description } = data.weather[0];
  const temperature = data.main.temp;
  const maxTemperature = data.main.temp_max;
  const minTemperature = data.main.temp_min;
  const iconCode = data.weather[0]?.icon;

  return {
    cityName,
    description,
    temperature,
    iconCode,
    minTemperature,
    maxTemperature,
  };
};

const { Title } = Typography;

const { Text, WeatherIcon } = S;

const HomeCard = () => {
  const { staticData } = useContext(weatherContext);

  const {
    cityName,
    description,
    temperature,
    iconCode,
    maxTemperature,
    minTemperature,
  } = useMemo(() => {
    return getWeatherFormatted(staticData);
  }, [staticData]);

  const toFixed = (temp) => {
    return temp.toFixed();
  };

  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <S.HomeCard justify='space-between'>
      <Col xs>
        <Title level={3}>{cityName}</Title>
        <Text>À partir de 17:52 CEST</Text>
        <Title level={1}>{`${toFixed(temperature)}°`}</Title>
        <Text>{description}</Text>
      </Col>
      <Col>
        <WeatherIcon src={iconUrl} alt='weather icon' loading='lazy' />
        <Text>{`${toFixed(maxTemperature)}° / ${toFixed(
          minTemperature
        )}°`}</Text>
      </Col>
    </S.HomeCard>
  );
};

export default HomeCard;
