import React, { Component } from 'react';
import FilterHub from './FilterHub';
import GraphTable from './GraphTable';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
    };
  }

  render() {
    const { total } = this.state;
    return (
      <div className="affordability-container">
        <div className="caption">
          <p className="text-base header">Calculate your monthly mortgage payments</p>
          <p className="text-base secondary">
            Your est. payment:
            {total}
            /month
          </p>
        </div>
        <FilterHub />
        <GraphTable />
      </div>
    );
  }
}
