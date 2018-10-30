import {
  dividendYield, peRatio, geometricMean, volumeWeightedStockPrice,
} from './calculations';
import { PREFERRED } from '../redux/stockTypes';

describe('Dividend Yield', () => {
  it('returns "N/A" when there is no price', () => {
    expect(dividendYield({}, null)).toBe('N/A');
    expect(dividendYield({}, 0)).toBe('N/A');
  });

  it('calculates Preferred rate when fixed dividend', () => {
    expect(dividendYield({
      type: PREFERRED, fixedDividend: 2, parValue: 100,
    }, 50)).toBe('4.0000');
  });

  it('calculates Common rate when no fixed dividend', () => {
    expect(dividendYield({
      lastDividend: 5,
    }, 50)).toBe('0.1000');
  });
});

describe('P/E Ration', () => {
  it('returns "N/A" when price or dividend is falsey', () => {
    expect(peRatio({}, 2)).toBe('N/A');
    expect(peRatio({ lastDividend: null }, 3)).toBe('N/A');
    expect(peRatio({ lastDividend: 0 }, 4)).toBe('N/A');
    expect(peRatio({ lastDividend: 5 }, null)).toBe('N/A');
    expect(peRatio({ lastDividend: 6 }, 0)).toBe('N/A');
  });

  it('returns price over dividend', () => {
    expect(peRatio({ lastDividend: 5 }, 15)).toBe('3.0000');
  });
});

describe('Geometric Mean', () => {
  it('returns "N/A" when there have been no trades of the stock', () => {
    expect(geometricMean()).toBe('N/A');
    expect(geometricMean([])).toBe('N/A');
  });

  it('returns geometric mean when there have been trades', () => {
    expect(geometricMean([{ price: 5 }])).toBe('5.0000');
    expect(geometricMean([{ price: 5 }, { price: 6 }])).toBe('5.4772');
    expect(geometricMean([{ price: 5 }, { price: 6 }, { price: 7 }])).toBe('5.9439');
  });
});

describe('Volume Weighted Stock Price', () => {
  it('returns "N/A" when there have been no trades of the stock', () => {
    expect(volumeWeightedStockPrice()).toBe('N/A');
    expect(volumeWeightedStockPrice([])).toBe('N/A');
  });

  it('returns geometric mean when there have been trades', () => {
    expect(volumeWeightedStockPrice([{ price: 5, number: 5 }])).toBe('5.0000');
    expect(volumeWeightedStockPrice([{ price: 5, number: 5 },
      { price: 6, number: 6 }])).toBe('5.5455');
    expect(volumeWeightedStockPrice([{ price: 4, number: 56 },
      { price: 4, number: 234 }])).toBe('4.0000');
    expect(volumeWeightedStockPrice([{ price: 5, number: 5 },
      { price: 6, number: 6 }, { price: 7, number: 7 }])).toBe('6.1111');
  });
});
