import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SliderContainer, SliderHeader, Slider } from '../Styles';

const HomePrice = ({ initial, handlePriceChange }) => {
  const [value, setValue] = useState(initial);
  // const [max, setMax] = useState(0);
  // const [prevMax, setPrevMax] = useState(0);

  const handleDrag = (e) => {
    console.log(Number(e.target.value));
    setValue(Number(e.target.value));
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
    handlePriceChange(Number(e.target.value));
  };

  const handleTextChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <SliderContainer>
      <SliderHeader>
        <span>
          $
          <input
            type="text"
            value={`${value || initial}`}
            onChange={handleTextChange}
          />
        </span>
        {/* <strong>{value || initial}</strong> */}
      </SliderHeader>
      <Slider>
        <input
          type="range"
          min="0"
          max={initial * 2}
          step="10"
          value={value || initial}
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
  handlePriceChange: () => {},
};

export default HomePrice;
