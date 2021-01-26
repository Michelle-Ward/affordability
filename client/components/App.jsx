import React, { Component } from 'react';
import axios from 'axios';
import FilterHub from './FilterHub';
import GraphTable from './GraphTable';
import Guide from './Guide';
import {
  calculatePrincipal, calculateTax, calculateAmount, calculateMortageInsurance,
} from './helpers';
import {
  GraphTableContainer, AffordabilityContainer, Caption, CaptionHeader,
} from './Styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      initial: 0,
      price: 0,
      perMonth: 0,
      downPayment: 20,
      interestRate: 2.74,
      loanType: 30,
      principal: 0,
      tax: 0,
      mortgageIns: 0,
      insurance: 75,
    };
    this.getPricing = this.getPricing.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
    this.handleLoanTypeChange = this.handleLoanTypeChange.bind(this);
  }

  componentDidMount() {
    this.getPricing();
  }

  handlePriceChange(newPrice) {
    const { downPayment } = this.state;
    this.setState({ price: newPrice });
    if (downPayment < 20) {
      this.setState({ mortgageIns: calculateMortageInsurance(newPrice, downPayment) },
        () => this.calculatePerMonth());
    } else {
      this.setState({ mortgageIns: 0 }, () => this.calculatePerMonth());
    }
  }

  handleDownPaymentChange(newDownPayment) {
    const { price } = this.state;
    this.setState({ downPayment: newDownPayment });
    if (newDownPayment < 20) {
      this.setState({ mortgageIns: calculateMortageInsurance(price, newDownPayment) },
        () => this.calculatePerMonth());
    } else {
      this.setState({ mortgageIns: 0 }, () => this.calculatePerMonth());
    }
  }

  handleInterestRateChange(newInterestRate) {
    this.setState({ interestRate: newInterestRate }, () => this.calculatePerMonth());
  }

  handleLoanTypeChange(newLoanType) {
    if (newLoanType === '30') {
      this.setState({ loanType: 30 }, () => {
        this.setState({ interestRate: 2.74 }, () => {
          this.calculatePerMonth();
        });
      });
    } else if (newLoanType === '20') {
      this.setState({ loanType: 20 }, () => {
        this.setState({ interestRate: 2.68 }, () => {
          this.calculatePerMonth();
        });
      });
    } else if (newLoanType === '15') {
      this.setState({ loanType: 15 }, () => {
        this.setState({ interestRate: 2.27 }, () => {
          this.calculatePerMonth();
        });
      });
    } else if (newLoanType === '10') {
      this.setState({ loanType: 10 }, () => {
        this.setState({ interestRate: 2.48 }, () => {
          this.calculatePerMonth();
        });
      });
    } else if (newLoanType === 'FHA 30') {
      this.setState({ loanType: 30 }, () => {
        this.setState({ interestRate: 0.00 }, () => {
          this.calculatePerMonth();
        });
      });
    } else if (newLoanType === 'FHA 15') {
      this.setState({ loanType: 15 }, () => {
        this.setState({ interestRate: 0.00 }, () => {
          this.calculatePerMonth();
        });
      });
    } else if (newLoanType === 'VA 30') {
      this.setState({ loanType: 30 }, () => {
        this.setState({ interestRate: 2.31 }, () => {
          this.calculatePerMonth();
        });
      });
    } else if (newLoanType === 'VA 15') {
      this.setState({ loanType: 15 }, () => {
        this.setState({ interestRate: 2.22 }, () => {
          this.calculatePerMonth();
        });
      });
    }
  }

  getPricing() {
    const randHome = Math.floor(Math.random() * 100);
    axios.get(`/api/home_price/${randHome}`)
      .then(({ data: price }) => {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ initial: Number(price[0].home_price) });
        this.handlePriceChange(Number(price[0].home_price));
        this.calculatePerMonth();
      })
      .catch((err) => console.log('unable to grab pricing of home: ', err));
  }

  setPrincipal(callback) {
    const {
      price, downPayment, interestRate, loanType,
    } = this.state;
    this.setState({ principal: calculatePrincipal(price, downPayment, interestRate, loanType) },
      () => callback());
  }

  calculatePerMonth() {
    this.setPrincipal(() => {
      const {
        price, downPayment, mortgageIns, principal, tax, insurance,
      } = this.state;
      this.setState({ tax: calculateTax(price) });
      if (downPayment < 20) {
        this.setState({ mortgageIns: calculateMortageInsurance(price, downPayment) });
      }
      this.setState({
        perMonth: ((calculateAmount(price, principal, tax, mortgageIns) / 12) + insurance),
      });
    });
  }

  render() {
    const { perMonth } = this.state;
    return (
      <AffordabilityContainer>
        <Caption>
          <CaptionHeader>Affordability</CaptionHeader>
          <p className="text-base header">Calculate your monthly mortgage payments</p>
          <p className="text-base secondary">
            Your est. payment: $
            {Intl.NumberFormat({ style: 'currency', currency: 'US' }).format(Math.floor(perMonth))}
            /month
          </p>
        </Caption>
        <FilterHub
          state={this.state}
          handlePriceChange={this.handlePriceChange}
          handleDownPaymentChange={this.handleDownPaymentChange}
          handleInterestRateChange={this.handleInterestRateChange}
          handleLoanTypeChange={this.handleLoanTypeChange}
        />
        <GraphTableContainer>
          <GraphTable
            state={this.state}
          />
          <Guide
            state={this.state}
          />
        </GraphTableContainer>
      </AffordabilityContainer>
    );
  }
}
