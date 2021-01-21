import React from 'react';
import HomePrice from './filters/HomePrice';
import DownPayment from './filters/DownPayment';
import InterestRate from './filters/InterestRate';
import LoanType from './filters/LoanType';

const FilterHub = ({
  initial,
  price,
  downPayment,
  interestRate,
  loanType,
  handlePriceChange,
  handleDownPaymentChange
}) => (
  <>
    <HomePrice
      initial={initial}
      price={price}
      handlePriceChange={handlePriceChange}
    />
    <DownPayment
      price={price}
      downPayment={downPayment}
      handleDownPaymentChange={handleDownPaymentChange}
    />
  </>
);

export default FilterHub;
