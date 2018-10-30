import React from 'react';
import NewTrade from '../new-trade';
import TradesTable from '../trades-table';
import StockDetailTable from '../stock-detail-table/StockDetailTable';

import styles from './stockMarket.css';

const StockMarket = () => (
  <section className={styles['stock-market']}>
    <NewTrade />
    <TradesTable />
    <StockDetailTable />
  </section>
);

export default StockMarket;
