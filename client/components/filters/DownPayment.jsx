import React, { useState, useEffect } from 'react';
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
  const [percent, setPercent] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(price * (percent / 100));
  }, [price]);

  const handleDrag = (e) => {
    const target = Number(e.target.value);
    setPercent(target);
    setValue(price * (target / 100));

    handleDownPaymentChange(target);
  };

  const calculateDecimalPlaces = (number) => {
    let decimalPlace = 0;
    if (number === 0) {
      return 0;
    }
    let digitArray = Array.from(String(number), Number);
    digitArray = digitArray.filter((val) => !Number.isNaN(val));
    for (let digit = 0; digit < digitArray.length; digit += 1) {
      if (digitArray[digit] === 0) {
        decimalPlace += 1;
      } else {
        break;
      }
    }
    return decimalPlace;
  };

  const handleTextChange = (e) => {
    const target = parseFloat(e.target.value.replace(/[^0-9-.]/g, ''));
    const per = ((target / price) * 100) || 0;
    if (per > 100) {
      setValue(price);
      setPercent(100);
    } else {
      setValue(target || 0);
      setPercent(per.toFixed(calculateDecimalPlaces(per)));
    }
    handleDownPaymentChange(per);
  };

  const handlePercentChange = (e) => {
    const target = Number(e.target.value);
    setValue(price * (target / 100) || 0);
    setPercent(target || 0);
    handleDownPaymentChange(target);
  };

  return (
    <SliderContainer>
      <SliderHeader>
        <SliderCaption>Down Payment</SliderCaption>
        <DualSliderInput>
          <SliderDollarSymbol>
            {console.log(value)}
            <DualSliderTotalInput
              type="text"
              value={`${value !== 0 ? Math.floor(value).toLocaleString() : Math.floor(price * (downPayment / 100)).toLocaleString()}`}
              onChange={handleTextChange}
            />
          </SliderDollarSymbol>
          <SliderPercentSymbol>
            <DualSliderPercentInput
              type="text"
              value={percent !== null ? percent : 20}
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
          value={percent || 20}
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
