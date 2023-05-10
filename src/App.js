import Nav from './Nav';
import Router from './Router';
import AppHeading from './components/AppHeading';
import Content from './components/Content';
import Header from './components/Header';
import Layout from './components/Layout';
import { APP_TITLE } from './consts';

function App() {
  return (
    <Layout>
      <Header>
        <AppHeading>
          {APP_TITLE}
        </AppHeading>
        <Nav />
      </Header>
      <Content>
        <Router />
      </Content>
    </Layout>
  );
}

export default App;
