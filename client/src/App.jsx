import React from 'react';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Routes from './routes';

const App = () => {
  return (
    <>
      <AppHeader />
        <main className="container mt-6">
          <Routes />
        </main>
      <AppFooter />
    </>
  );
}

export default App;
