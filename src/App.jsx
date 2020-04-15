import React, { Fragment } from 'react';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
        <main className="container mt-6">
          <div className="columns is-mobile">
            <Routes />
          </div>
        </main>
      <Footer />
    </Fragment>
  );
}

export default App;