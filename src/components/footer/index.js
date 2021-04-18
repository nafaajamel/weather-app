import { Layout, Typography } from 'antd';
import styled from 'styled-components';
const { Text } = Typography;

const S = {
  Footer: styled(Layout.Footer)`
    background: #ebeced;
    text-align: center;
  `,
};

const Footer = () => {
  return (
    <S.Footer>
      <Text>made with &#10084; by jamel nafaa.</Text>
    </S.Footer>
  );
};

export default Footer;
