import React, { Component } from 'react';
import Slider from './Slider';

export default class FilterHub extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { price } = this.props;
    return (
      <>
        <Slider
          initial={price}
          max={price * 2}
          onChange={(value) => console.log(value)}
        />
      </>
    );
  }
}
