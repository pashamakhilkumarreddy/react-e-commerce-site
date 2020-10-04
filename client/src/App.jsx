import React from 'react';
import { Helmet } from 'react-helmet';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Alerts from './components/Alerts';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Home | E-commerce</title>
      </Helmet>
      <Alerts />
      <AppHeader />
        <main className='container mt-6'>
          <Routes />
        </main>
      <AppFooter />
    </>
  );
}

export default App;
