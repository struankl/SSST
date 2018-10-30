import React from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import styles from './tradesTable.css';

const TradesTable = ({ trades }) => (
  <section className={styles['trades-table-wrapper']}>
    <table>
      <tbody>
        <tr>
          <th>
                Date
          </th>
          <th>
                Time
          </th>
          <th>
                Stock Symbol
          </th>
          <th>
                Number of Shares
          </th>
          <th>
                Price
          </th>
        </tr>
        {trades.length === 0 && <tr><td colSpan="5">No trades placed yet</td></tr>}
        {trades.map((t) => {
          const tradeDate = dayjs(t.date);
          return (
            <tr key={t.symbol + t.date}>
              <td>{tradeDate.format('DD/MM/YYYY')}</td>
              <td>{tradeDate.format('HH:mm:ss.SSS')}</td>
              <td>{t.symbol}</td>
              <td>{t.number}</td>
              <td>{t.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </section>
);

const mapStateToProps = (state) => {
  const { trades = [] } = state;
  return { trades };
};

export default connect(mapStateToProps)(TradesTable);
