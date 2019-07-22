import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayedStocks: [],
    portfolio: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(json => this.setState({stocks: json, displayedStocks: json}))
  }

  buyStock = stock => {
    this.setState({portfolio: [...this.state.portfolio, stock]})
  }

  sellStock = stock => {
    const portfolio = [...this.state.portfolio].filter(element => element.id !== stock.id)
    this.setState({ portfolio })
  }

  sortStocks = sortMethod => {
    if (sortMethod === 'Price') {
      const displayedStocks = [...this.state.displayedStocks]
      displayedStocks.sort((a, b) => b.price - a.price)
      this.setState({displayedStocks})
    }
    else if (sortMethod === 'Alphabetically') {
      const displayedStocks = [...this.state.displayedStocks]
      displayedStocks.sort((a, b) => {
        if (a.ticker < b.ticker) {
          return -1
        }
        if (a.ticker > b.ticker) {
          return 1
        }
        return 0
      })
      this.setState({displayedStocks})
    }
    else {
      const displayedStocks = [...this.state.stocks].filter(stock => stock.type === sortMethod)
      this.setState({ displayedStocks })
    }
  }

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayedStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
