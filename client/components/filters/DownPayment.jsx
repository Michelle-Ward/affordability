import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SliderContainer,
  SliderHeader,
  Slider,
  DualSliderInput,
  DualSliderPercentInput,
  SliderDollarSymbol,
  SliderPercentSymbol,
  DualSliderTotalInput,
  SliderCaption,
  CustomSlider,
} from '../Styles';

const DownPayment = ({ downPayment, price, handleDownPaymentChange }) => {
  const [percent, setPercent] = useState(downPayment);
  const [value, setValue] = useState(price * (downPayment / 100));

  const handleDrag = (e) => {
    setPercent(Number(e.target.value));

    handleDownPaymentChange(Number(e.target.value));
  };

  const handleTextChange = (e) => {
    const target = parseFloat(e.target.value.replace(/[^0-9-.]/g, ''));

    setValue(target);
  };

  const handlePercentChange = (e) => {
    const target = Number(e.target.value);
    setValue(price * (target / 100));
    setPercent(target);
  };

  return (
    <SliderContainer>
      <SliderHeader>
        <SliderCaption>Down Payment</SliderCaption>
        <DualSliderInput>
          <SliderDollarSymbol>
            <DualSliderTotalInput
              type="text"
              value={`${Math.floor(value || price * (downPayment / 100)).toLocaleString()}`}
              onChange={handleTextChange}
            />
          </SliderDollarSymbol>
          <SliderPercentSymbol>
            <DualSliderPercentInput
              type="text"
              value={percent || 20}
              onChange={handlePercentChange}
            />
          </SliderPercentSymbol>
        </DualSliderInput>
      </SliderHeader>
      <Slider>
        <CustomSlider
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
  price: PropTypes.number.isRequired,
  downPayment: PropTypes.number.isRequired,
  handleDownPaymentChange: PropTypes.func.isRequired,
};

export default DownPayment;
