// import libraries

import { Layout } from 'antd';

// import components
import Header from './components/header';
import Container from './components/container';
import Footer from './components/footer';

import UserProvider from './context/user';

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <UserProvider>
          <Container />
        </UserProvider>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
