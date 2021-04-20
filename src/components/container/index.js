import { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';
import { Row, Col, Modal, Spin } from 'antd';

import WeatherInfo from './../weather-info';
import Map from './../map';
import SearchBox from './../map/search-box';

import { weatherContext } from '../../context/weather';

const S = {
  Container: styled(Row)`
    padding: 30px;
  `,
};

const Container = () => {
  const { loading } = useContext(weatherContext);
  const [isModalVisible, setIsModalVisible] = useState(loading);
  useEffect(() => {
    setIsModalVisible(loading);
  }, [loading]);
  return (
    <S.Container justify='center'>
      {loading === false ? (
        <>
          <Col lg={14} xs={20}>
            <WeatherInfo />
          </Col>
          <Col lg={10} xs={20}>
            <Map />
          </Col>
        </>
      ) : (
        <Modal visible={isModalVisible}>
          {loading === undefined ? (
            <Spin size='large' />
          ) : (
            <div>
              <b>Please enable your position or type your city name manually</b>
              <SearchBox />
            </div>
          )}
        </Modal>
      )}
    </S.Container>
  );
};

export default Container;
