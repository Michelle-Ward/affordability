import React, { Component, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`
position: relative;
border-radius: 3px;
background: #dddddd;
height: 15px;
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
`;

const SliderHeader = styled.div`
display: flex;
justify-content: flex-end;
`;

const getPercentage = (current, max) => (100 * current) / max;

const getValue = (percentage, max) => (max / 100) * percentage;

const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

const Slider = ({ initial, max, onChange }) => {
  const sliderRef = useRef();
  const posRef = useRef();
  const diff = useRef();
  const currentRef = useRef();
  const initialpercentage = getPercentage(initial, max);

  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseDown = (e) => {
      diff.current = e.clientX - posRef.current.getBoundingClientRect().left;
    };
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [mouseDown]);

  const handleDrag = ((e) => {
    let newX = e.clientX
      - diff.current
      - sliderRef.current.getBoundingClientRect().left;
    const end = sliderRef.current.offsetWidth - posRef.current.offsetWidth;

    const start = 0;

    if (newX < start) {
      newX = 0;
    }

    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);

    const newValue = getValue(newPercentage, max);

    posRef.current.style.left = getLeft(newPercentage);

    onChange(newValue);
  });

  // const handleUp = (() => {
  //   document.removeEventListener('mouseup', handleUp);
  //   document.removeEventListener('mousemove', handleDrag);
  // });

  // const handleEvent = ((e) => {
  //     diff.current = e.clientX - posRef.current.getBoundingClientRect().left;
  //     // handleDrag(e);
  // });

  return (
    <>
      <SliderHeader>
        <strong ref={currentRef}>{initial}</strong>
        &nbsp;/&nbsp;
        {max}
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
