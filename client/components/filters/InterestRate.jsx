import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SliderContainer, SliderHeader, Slider } from '../Styles';

const InterestRate = ({ interestRate, handleInterestRateChange }) => {
  const [value, setValue] = useState(interestRate);

  const handleDrag = (e) => {
    const target = Number(e.target.value);
    setValue(target);
    handleInterestRateChange(target);
  };

  const handleTextChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SliderContainer>
      <SliderHeader>
        <span>
          <input
            type="text"
            value={`${value || interestRate}`}
            onChange={handleTextChange}
          />
          %
        </span>
      </SliderHeader>
      <Slider>
        <input
          type="range"
          min="0"
          max={6.50}
          step="0.1"
          value={value}
          onChange={handleDrag}
          style={{ flex: '2' }}
        />
      </Slider>
    </SliderContainer>
  );
};

InterestRate.propTypes = {
  interestRate: PropTypes.number,
  handleInterestRateChange: PropTypes.func,
};

InterestRate.defaultProps = {
  interestRate: 2.74,
  handleInterestRateChange: () => {},
};

export default InterestRate;
