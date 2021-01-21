import React, { useState } from 'react';
import { SliderContainer, SliderHeader, Slider } from '../Styles';

const DownPayment = ({ downPayment, price, handleDownPaymentChange }) => {
  const [percent, setPercent] = useState(downPayment);
  const [value, setValue] = useState(price * (downPayment / 100));

  const [max, setMax] = useState(30);

  const handleDrag = (e) => {
    setPercent(e.target.value);

    handleDownPaymentChange(e.target.value);
  };

  const handleTextChange = (e) => {
    setPercent(e.target.value);
  };

  const handlePercentChange = (e) => {
    setValue(price * (percent / 100));
  };

  return (
    <SliderContainer>
      <SliderHeader>
        <span>
          $
          <input
            type="text"
            value={`${value || price * (downPayment / 100)}`}
            onChange={handleTextChange}
          />
        </span>
        <span>
          <input
            type="text"
            value={percent || 20}
            onChange={handlePercentChange}
          />
          %
        </span>
        {/* <strong>{value || initial}</strong> */}
      </SliderHeader>
      <Slider>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={percent}
          onChange={handleDrag}
          style={{ flex: '2' }}
        />
      </Slider>
    </SliderContainer>
  );
};

export default DownPayment;
