import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SliderContainer,
  SliderHeader,
  Slider,
  SliderInput,
  SliderDollarSymbol,
  SliderCaption,
  CustomSlider,
} from '../Styles';

const HomePrice = ({ initial, handlePriceChange }) => {
  const [value, setValue] = useState(null);

  // const [max, setMax] = useState(0);
  // const [prevMax, setPrevMax] = useState(0);

  const handleDrag = (e) => {
    setValue(Number(e.target.value) || 0);
    // setFill((e.target.value / max || initial * 2) * 100);
    // setPrevMax(value);
    // console.log(prevMax, max)
    // if (max > prevMax) {
    //   console.log('we here?');
    //   setMax(value * 2);
    // } else if (max < prevMax) {
    //   console.log('or here?');

    //   setMax(value * 1.5);
    // }
    handlePriceChange(Number(e.target.value) || 0);
  };

  const handleTextChange = (e) => {
    const target = parseFloat(e.target.value.replace(/[^0-9-.]/g, ''));
    setValue(target || 0);
  };

  return (
    <SliderContainer>
      <SliderHeader>
        <SliderCaption>Home Price</SliderCaption>
        <SliderDollarSymbol>
          <SliderInput
            type="text"
            value={`${value !== null ? value.toLocaleString() : initial.toLocaleString()}`}
            onChange={handleTextChange}
          />
        </SliderDollarSymbol>
      </SliderHeader>
      <Slider>
        <CustomSlider
          type="range"
          min="0"
          max={initial * 2}
          step="10"
          value={value !== null ? value : initial}
          onChange={handleDrag}
          style={{ flex: '2' }}
        />
      </Slider>
    </SliderContainer>
  );
};

HomePrice.propTypes = {
  initial: PropTypes.number,
  handlePriceChange: PropTypes.func,
};

HomePrice.defaultProps = {
  initial: 1000000,
  handlePriceChange: () => { },
};

export default HomePrice;
