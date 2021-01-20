import React, { Component, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

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

const getPercentage = (current, max) => (100 * current) / max;

const getValue = (percentage, max) => (max / 100) * percentage;

const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

const getPricePercentage = (percentage, price) => Math.floor(((percentage / 100) ** 2) * price);

const Slider = ({ initial, max, onChange }) => {
  const sliderRef = useRef();
  const posRef = useRef();
  const currentRef = useRef();

  const initialpercentage = getPercentage(initial, max);

  const [mouseDown, setMouseDown] = useState(false);

  const handleDrag = ((e) => {
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
  });

  return (
    <>
      <SliderHeader>
        <strong ref={currentRef}>{initial}</strong>
      </SliderHeader>
      <StyledSlider
        ref={sliderRef}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseMove={mouseDown ? handleDrag : null}
      >
        <StyledPos
          ref={posRef}
          style={{ left: getLeft(initialpercentage) }}
        />
      </StyledSlider>
    </>
  );
};

export default Slider;
