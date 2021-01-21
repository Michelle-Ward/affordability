import React from 'react';
import PropTypes from 'prop-types';
import HomePrice from './filters/HomePrice';
import DownPayment from './filters/DownPayment';
import InterestRate from './filters/InterestRate';
// import LoanType from './filters/LoanType';

const FilterHub = ({
  initial,
  price,
  downPayment,
  interestRate,
  // loanType,
  handlePriceChange,
  handleDownPaymentChange,
  handleInterestRateChange,
}) => (
  <>
    <HomePrice
      initial={initial}
      handlePriceChange={handlePriceChange}
    />
    <DownPayment
      price={price}
      downPayment={downPayment}
      handleDownPaymentChange={handleDownPaymentChange}
    />
    <InterestRate
      interestRate={interestRate}
      handleInterestRateChange={handleInterestRateChange}
    />
  </>
);

FilterHub.propTypes = {
  initial: PropTypes.number,
  price: PropTypes.number,
  downPayment: PropTypes.number,
  interestRate: PropTypes.number,
  // loanType: PropTypes.number,
  handlePriceChange: PropTypes.func,
  handleDownPaymentChange: PropTypes.func,
  handleInterestRateChange: PropTypes.func,
};

FilterHub.defaultProps = {
  initial: 1000000,
  price: 1000000,
  downPayment: 20,
  interestRate: 2.74,
  handlePriceChange: () => {},
  handleDownPaymentChange: () => {},
  handleInterestRateChange: () => {},
};

export default FilterHub;
