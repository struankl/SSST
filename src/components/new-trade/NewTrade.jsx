import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addTrade } from '../../redux/actions';

import styles from './newTrade.css';

class NewTrade extends PureComponent {
  state = {
    symbol: '',
    price: '',
    number: '',
  };

  onChange = (e) => {
    const {
      target:
      {
        value = '',
        dataset: { fieldName },
      },
    } = e;
    this.setState({ [fieldName]: value.toUpperCase() });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addTrade } = this.props;
    const { symbol, price, number } = this.state;
    if (!symbol || !price || !number) {
      return false;
    }
    addTrade({
      symbol,
      price: Number(price),
      number: Number(number),
      date: new Date(),
    });
    this.setState({
      symbol: '',
      price: '',
      number: '',
    });
    return false;
  };

  render() {
    const { symbol, price, number } = this.state;
    return (
      <form className={styles['new-trade-form']} onSubmit={this.onSubmit}>
        <input type="text" value={symbol} data-field-name="symbol" onChange={this.onChange} placeholder="Stock Symbol" required />
        <input type="number" value={price} data-field-name="price" onChange={this.onChange} placeholder="Price per Share" required step="0.0001" />
        <input type="number" value={number} data-field-name="number" onChange={this.onChange} placeholder="Number of Shares" required />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTrade },
)(NewTrade);
