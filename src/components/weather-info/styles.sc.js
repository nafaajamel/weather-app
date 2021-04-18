import styled, { css } from 'styled-components';
import { Row } from 'antd';

const S = {};

const cardRadius = css`
  border-radius: 5px;
`;

S.HomeCard = styled(Row)`
  ${cardRadius}
  background-color: #ebeced;
`;

export default S;
