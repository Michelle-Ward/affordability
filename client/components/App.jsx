import React, { Component } from 'react';
import axios from 'axios';
import FilterHub from './FilterHub';
import GraphTable from './GraphTable';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: '',
      price: '',
      perMonth: '',
      downPayment: 20,
      interestRate: '',
      loanType: 30,
    };
    this.getPricing = this.getPricing.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
  }

  componentDidMount() {
    this.getPricing();
  }

  handlePriceChange(newPrice) {
    this.setState({ price: newPrice });
    this.calculatePerMonth();
  }

  handleDownPaymentChange(newDownPayment) {
    this.setState({ downPayment: newDownPayment });
    this.calculatePerMonth();
  }

  getPricing() {
    const randHome = Math.floor(Math.random() * 100);
    axios.get(`/api/home_price/${randHome}`)
      .then(({ data: price }) => {
        this.setState({ initial: price[0].home_price });
        this.handlePriceChange(price[0].home_price);
      })
      .catch((err) => console.log('unable to grab pricing of home: ', err));
  }

  calculatePerMonth() {
    const { loanType, price, downPayment } = this.state;
    this.setState({
      perMonth: (price - (price * (downPayment / 100))) / (12 * loanType),
    });
  }

  render() {
    const {
      initial, price, downPayment, interestRate, perMonth, loanType,
    } = this.state;
    return (
      <div className="affordability-container">
        <div className="caption">
          <p className="text-base header">Calculate your monthly mortgage payments</p>
          <p className="text-base secondary">
            Your est. payment: $
            { Intl.NumberFormat({ style: 'currency', currency: 'US' }).format(Math.floor(perMonth)) }
            /month
          </p>
        </div>
        <FilterHub
          initial={initial}
          price={price}
          downPayment={downPayment}
          interestRate={interestRate}
          loanType={loanType}
          handlePriceChange={this.handlePriceChange}
          handleDownPaymentChange={this.handleDownPaymentChange}
        />
        <GraphTable />
      </div>
    );
  }
}
