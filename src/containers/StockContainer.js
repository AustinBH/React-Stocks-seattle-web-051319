import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  handleClick = stock => {
    this.props.buyStock(stock)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => {
            return <Stock key={stock.id} handleOnClick={this.handleClick} stock={stock} />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
