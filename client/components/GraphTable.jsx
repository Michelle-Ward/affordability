import React, { Component } from 'react';

export default class GraphTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <svg width="50%" height="50%" viewBox="0 0 42 42" className="donut">
        <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff" />
        <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3" />

        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3" strokeDasharray="85 15" strokeDashoffset="25" />
        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#b1c94e" strokeWidth="3" strokeDasharray="15 85" strokeDashoffset="40" />
      </svg>
    );
  }
}
