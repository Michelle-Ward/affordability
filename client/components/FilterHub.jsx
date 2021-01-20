import React from 'react';
import HomePrice from './HomePrice';

const FilterHub = ({ initial, price, handlePriceChange }) => (
  <>
    <HomePrice
      initial={initial}
      price={price}
      handlePriceChange={handlePriceChange}
    />
  </>
);

export default FilterHub;
