import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import WeatherInfo from './../weather-info';
import Map from './../map';
import { weatherContext } from '../../context/weather';

const S = {
  Container: styled(Row)`
    min-height: 81vh;
    padding: 30px;
  `,
};

const Container = () => {
  const { location, setLocation, loading } = useContext(weatherContext);

  return (
    !loading && (
      <S.Container>
        <Col xs={14}>
          <WeatherInfo />
        </Col>
        <Col xs={10}>
          <Map />
        </Col>
      </S.Container>
    )
  );
};

export default Container;
