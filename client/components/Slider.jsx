import React, { Component, createRef } from 'react';
import styled from 'styled-components';

import {
  getPercentage, getValue, getLeft, getPricePercentage,
} from './helpers';

const StyledSlider = styled.div`
position: relative;
border-radius: 3px;
background: #dddddd;
height: 15px;
width: 50%;
cursor: pointer;
`;

const StyledPos = styled.div`
width: 10px;
height: 25px;
border-radius: 3px;
position: relative;
top: -5px;
opacity: 0.5;
background: #823eb7;
cursor: pointer;
overflow: hidden;
`;

const SliderHeader = styled.div`
display: flex;
justify-content: flex-end;
width: 50%;
`;

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = createRef();
    this.posRef = createRef();
    this.currentRef = createRef();
    this.state = {
      mouseDown: false,
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.setMouseDown = this.setMouseDown.bind(this);
  }

  handleDrag(e) {
    const {
      sliderRef, posRef, currentRef,
    } = this;
    const { initial, onChange } = this.props;
    let newX = e.clientX - sliderRef.current.getBoundingClientRect().left - 5;
    const end = sliderRef.current.offsetWidth - posRef.current.offsetWidth;

    const start = 0;

    if (newX < start) {
      newX = 0;
    }

    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);

    const newValue = getValue(newPercentage, end);

    const OldRange = (end - 0);
    const NewRange = (200 - 0);
    const pricePercentage = (((newValue - 0) * NewRange) / OldRange) + 0;
    const price = getPricePercentage(pricePercentage, initial);

    posRef.current.style.left = getLeft(newPercentage);

    currentRef.current.textContent = price;

    onChange(newValue);
  }

  setMouseDown() {
    const { mouseDown } = this.state;
    this.setState({ mouseDown: !mouseDown });
  }

  render() {
    const {
      mouseDown,
    } = this.state;
    const {
      handleDrag, setMouseDown, currentRef, sliderRef, posRef,
    } = this;
    const { initial, max } = this.props;

    const initialpercentage = getPercentage(initial, max);

    return (
      <>
        <SliderHeader>
          <strong ref={currentRef}>{initial}</strong>
        </SliderHeader>
        <StyledSlider
          ref={sliderRef}
          onMouseDown={setMouseDown}
          onMouseUp={setMouseDown}
          onMouseMove={mouseDown ? handleDrag : null}
        >
          <StyledPos
            ref={posRef}
            style={{ left: getLeft(initialpercentage) }}
          />
        </StyledSlider>
      </>
    );
  }
}
