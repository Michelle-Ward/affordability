import React, { Component } from 'react';
import axios from 'axios';
import FilterHub from './FilterHub';
import GraphTable from './GraphTable';
import {
  calculatePrinciple, calculateTax, calculateAmount, calculateMortageInsurance,
} from './helpers';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 0,
      price: 0,
      perMonth: 0,
      downPayment: 20,
      interestRate: 2.74,
      loanType: 30,
      principle: 0,
      tax: 0,
      mortgageIns: 0,
      insurance: 75,
    };
    this.getPricing = this.getPricing.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
  }

  componentDidMount() {
    this.getPricing();
  }

  handlePriceChange(newPrice) {
    this.setState({ price: newPrice });
    this.setPrinciple();
    this.calculatePerMonth();
  }

  handleDownPaymentChange(newDownPayment) {
    const { principle } = this.state;
    this.setState({ downPayment: newDownPayment });
    if (newDownPayment < 20) {
      this.setState({ mortgageIns: calculateMortageInsurance(principle) });
    } else {
      this.setState({ mortgageIns: 0 });
    }
    this.calculatePerMonth();
  }

  handleInterestRateChange(newInterestRate) {
    this.setState({ interestRate: newInterestRate });
    this.calculatePerMonth();
  }

  getPricing() {
    const randHome = Math.floor(Math.random() * 100);
    axios.get(`/api/home_price/${randHome}`)
      .then(({ data: price }) => {
        this.setState({ initial: Number(price[0].home_price) });
        this.handlePriceChange(Number(price[0].home_price));
      })
      .catch((err) => console.log('unable to grab pricing of home: ', err));
  }

  setPrinciple() {
    const {
      price, downPayment, interestRate, loanType,
    } = this.state;
    this.setState({ principle: calculatePrinciple(price, downPayment, interestRate, loanType) });
  }

  calculatePerMonth() {
    const {
      price, mortgageIns, principle, tax, insurance,
    } = this.state;
    this.setPrinciple();
    this.setState({ tax: calculateTax(price) });
    this.setState({
      perMonth: (calculateAmount(principle, tax, mortgageIns, insurance) / 12),
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
          handleInterestRateChange={this.handleInterestRateChange}
        />
        <GraphTable
          state={this.state}
        />
      </div>
    );
  }
}
