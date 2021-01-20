import React, { useState } from 'react';
import styled from 'styled-components';

const SliderHeader = styled.div`
display: flex;
justify-content: flex-end;
width: 50%;
`;

const HomePrice = ({ initial, price, handlePriceChange }) => {
  const [value, setValue] = useState(price);
  const [fill, setFill] = useState(75);
  // const [max, setMax] = useState(value * 2);

  const max = initial * 2;
  const handleDrag = (e) => {
    setValue(e.target.value);
    setFill((e.target.value / max) * 100);
    // if (fill > 75) {
    //   setMax(e.target.value * 1.6);
    // } else {
    //   setMax(price * 2);
    // }
    handlePriceChange(e.target.value);
  };

  return (
    <>
      <SliderHeader>
        <strong>{value || price}</strong>
      </SliderHeader>
      <input className="range" type="range" min="0" max={max} step="10" value={value} onChange={handleDrag} />
    </>
  );
};

export default HomePrice;
