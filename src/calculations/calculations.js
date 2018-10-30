import { PREFERRED } from '../redux/stockTypes';

export const dividendYield = (stock, price) => {
  const {
    type, fixedDividend, lastDividend = 0, parValue = 0,
  } = stock;
  if (!price) {
    return 'N/A';
  }
  switch (type) {
    case PREFERRED:
      return ((fixedDividend * parValue) / price).toFixed(4);
    default:
      return (lastDividend / price).toFixed(4);
  }
};

export const peRatio = (stock, price) => {
  const { lastDividend } = stock;
  if (!lastDividend || !price) {
    return 'N/A';
  }

  return (price / lastDividend).toFixed(4);
};

export const geometricMean = (trades = []) => {
  if (trades.length === 0) {
    return 'N/A';
  }
  const totalPrice = trades.map(t => t.price).reduce((p, c) => p * c, 1);
  return (totalPrice ** (1 / trades.length)).toFixed(4);
};

export const volumeWeightedStockPrice = (trades = []) => {
  if (trades.length === 0) {
    return 'N/A';
  }
  const numerator = trades.map(t => t.price * t.number).reduce((p, c) => p + c, 0);
  const denominator = trades.map(t => t.number).reduce((p, c) => p + c, 0);
  return (numerator / denominator).toFixed(4);
};
