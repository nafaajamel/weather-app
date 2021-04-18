// import libraries

import { Layout } from 'antd';

// import components
import Header from './components/header';
import Container from './components/container';
import Footer from './components/footer';

import WeatherProvider from './context/weather';

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <WeatherProvider>
          <Container />
        </WeatherProvider>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
