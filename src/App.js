import { useLocation, useOutlet } from 'react-router-dom';
import { SwitchTransition } from 'react-transition-group';
import Nav from './Nav';
import AppHeading from './components/AppHeading';
import Content from './components/Content';
import Header from './components/Header';
import Layout from './components/Layout';
import { APP_TITLE } from './consts';
import routes from './routes';
import CSSTransition from './containers/CSSTransition';
import Footer from './components/Footer';

function App() {
  const outlet = useOutlet();
  const location = useLocation();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <Layout>
      <Header>
        <AppHeading>
          {APP_TITLE}
        </AppHeading>
        <Nav />
      </Header>
      <Content>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={100}
            classNames="page"
            unmountOnExit
          >
            <div ref={nodeRef} className="page flex-1 col justify-start items-center">
              {outlet}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
