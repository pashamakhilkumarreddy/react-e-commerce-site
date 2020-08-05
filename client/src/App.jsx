import React from 'react';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Routes from './routes';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Home | E-commerce</title>
      </Helmet>
      <AppHeader />
        <main className="container mt-6">
          <Routes />
        </main>
      <AppFooter />
    </>
  );
}

export default App;
