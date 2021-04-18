import { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';
import { Row, Col } from 'antd';

import WeatherInfo from './../weather-info';

import { userContext } from './../../context/user';

const S = {
  Container: styled(Row)`
    min-height: 81vh;
  `,
};

const Container = () => {
  const { location, setLocation } = useContext(userContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLocation);
    }
  }, []);

  return (
    <S.Container>
      <Col xs={12}>
        <WeatherInfo />
      </Col>
      <Col xs={12}></Col>
    </S.Container>
  );
};

export default Container;
