import React from 'react';
import { connect } from 'react-redux';

import {
  dividendYield, peRatio, geometricMean, volumeWeightedStockPrice,
} from '../../calculations';
import { PREFERRED } from '../../redux/stockTypes';

const DividendYield = ({ stock, trade }) => (
  <td>{dividendYield(stock, trade.price)}</td>
);

const PERatio = ({ stock, trade }) => (
  <td>{peRatio(stock, trade.price)}</td>
);

const GeometricMean = ({ trades }) => (
  <td>{geometricMean(trades)}</td>
);

const VolWeightStockPrice = ({ trades }) => (
  <td>{volumeWeightedStockPrice(trades)}</td>
);

const DetailRow = ({ stock, trades }) => {
  const lastTrade = trades[0] || {};
  return (
    <tr>
      <td>{stock.symbol}</td>
      <td>{stock.type === PREFERRED ? 'Preferred' : 'Common'}</td>
      <DividendYield stock={stock} trade={lastTrade} />
      <PERatio stock={stock} trade={lastTrade} />
      <GeometricMean trades={trades} />
      <VolWeightStockPrice trades={trades} />
    </tr>
  );
};

const StockDetailTable = ({ trades, stocks }) => (
  <table>
    <tbody>
      <tr>
        <th>Symbol</th>
        <th>Type</th>
        <th>Yield</th>
        <th>P/E Ratio</th>
        <th>Geometric Mean</th>
        <th>Volume Weighted Stock Price</th>
      </tr>
      {
        stocks.map(stock => (
          <DetailRow
            key={stock.symbol}
            stock={stock}
            trades={trades.filter(trade => trade.symbol === stock.symbol)}
          />))
      }
    </tbody>
  </table>
);

const mapStateToProps = (state) => {
  const { trades = [], stocks = [] } = state;
  return { trades, stocks };
};

export default connect(mapStateToProps)(StockDetailTable);
