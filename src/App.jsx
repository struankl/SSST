import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import StockMarket from './components/stock-market';
import styles from './app.css';

const App = () => (
  <Provider store={store}>
    <div className={styles.app}>
      <header className="App-header">
        <h1 className={styles.headline}>JP Morgan Super Simple Stock Market</h1>
        <h2 className={styles.subline}>By Struan Kerr-Liddell</h2>
      </header>
      <StockMarket />
    </div>
  </Provider>
);

export default App;
