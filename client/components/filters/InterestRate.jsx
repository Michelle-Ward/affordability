import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SliderContainer,
  SliderHeader,
  Slider,
  SliderPercentInput,
  SliderPercentSymbol,
  SliderCaption,
  CustomSlider,
} from '../Styles';

const InterestRate = ({ interestRate, handleInterestRateChange }) => {
  const [value, setValue] = useState(null);

  const handleDrag = (e) => {
    const target = Number(e.target.value);
    setValue(target || 0);
    handleInterestRateChange(target || 0);
  };

  const handleTextChange = (e) => {
    setValue(e.target.value || 0);
  };

  return (
    <SliderContainer>
      <SliderHeader>
        <SliderCaption>Interest Rate</SliderCaption>
        <SliderPercentSymbol>
          <SliderPercentInput
            type="text"
            value={`${value !== null ? value : interestRate}`}
            onChange={handleTextChange}
          />
        </SliderPercentSymbol>
      </SliderHeader>
      <Slider>
        <CustomSlider
          type="range"
          min="0"
          max={6.50}
          step="0.1"
          value={value !== null ? value : interestRate}
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
  handleInterestRateChange: () => { },
};

export default InterestRate;
