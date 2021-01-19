import React, { Component } from 'react';
import Slider from './Slider';

export default class FilterHub extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Slider
          initial={10}
          max={25}
          onChange={(value) => console.log(value)}
        />
      </>
    );
  }
}
