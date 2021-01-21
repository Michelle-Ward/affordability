import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SliderContainer, SliderHeader, Slider } from '../Styles';

const DownPayment = ({ downPayment, price, handleDownPaymentChange }) => {
  const [percent, setPercent] = useState(downPayment);
  const [value, setValue] = useState(price * (downPayment / 100));

  const handleDrag = (e) => {
    setPercent(e.target.value);

    handleDownPaymentChange(Number(e.target.value));
  };

  const handleTextChange = (e) => {
    setPercent(Number(e.target.value));
  };

  const handlePercentChange = () => {
    setValue(price * (percent / 100));
  };

  return (
    <SliderContainer>
      <SliderHeader>
        <span>
          $
          <input
            type="text"
            value={`${Math.floor(value || price * (downPayment / 100))}`}
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

DownPayment.propTypes = {
  price: PropTypes.number,
  downPayment: PropTypes.number,
  handleDownPaymentChange: PropTypes.func,
};

DownPayment.defaultProps = {
  price: 1000000,
  downPayment: 20,
  handleDownPaymentChange: () => {},
};

export default DownPayment;
