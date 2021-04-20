import styled, { css } from 'styled-components';
import { Row, Typography } from 'antd';

const S = {};

const cardRadius = css`
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
`;

S.HomeCard = styled(Row)`
  ${cardRadius}
  background-color:#f4f9ff;
  padding: 20px;
`;

S.WeatherIcon = styled.img`
  display: block;
  height: ${({ size }) => `${size}px` || 'auto'};
`;

S.Text = styled(Typography.Text)`
  font-size: ${({ size }) => `${size}px` || '18px'};
`;

export default S;
