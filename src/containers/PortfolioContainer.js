import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  handleClick = stock => {
    console.log('hi')
    this.props.sellStock(stock)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(stock => {
              return <Stock key={stock.id} handleOnClick={this.handleClick} stock={stock} />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
