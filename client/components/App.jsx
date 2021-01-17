import React, { Component } from 'react';
import axios from 'axios';
import FilterHub from './FilterHub';
import GraphTable from './GraphTable';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
    };
    this.getPricing = this.getPricing.bind(this);
  }

  componentDidMount() {
    this.getPricing();
  }

  getPricing() {
    const randHome = Math.floor(Math.random() * 100);
    axios.get(`/api/home_price/${randHome}`)
      .then(({ data: price }) => this.setState({ price: price[0].home_price }))
      .catch((err) => console.log('unable to grab pricing of home: ', err));
  }

  render() {
    const { price } = this.state;
    return (
      <div className="affordability-container">
        <div className="caption">
          <p className="text-base header">Calculate your monthly mortgage payments</p>
          <p className="text-base secondary">
            Your est. payment:
            { price }
            /month
          </p>
        </div>
        <FilterHub />
        <GraphTable />
      </div>
    );
  }
}
