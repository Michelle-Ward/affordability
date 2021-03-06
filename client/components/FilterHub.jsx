import React from 'react';
import PropTypes from 'prop-types';
import HomePrice from './filters/HomePrice';
import DownPayment from './filters/DownPayment';
import InterestRate from './filters/InterestRate';
import LoanType from './filters/LoanType';
import { FilterHubContainer, SliderHub } from './Styles';

const FilterHub = ({
  state, handlePriceChange, handleDownPaymentChange, handleInterestRateChange, handleLoanTypeChange,
}) => {
  const {
    initial, price, downPayment, interestRate,
  } = state;
  return (
    <FilterHubContainer>
      <SliderHub>
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
      </SliderHub>
      <LoanType
        handleLoanTypeChange={handleLoanTypeChange}
      />
    </FilterHubContainer>
  );
};

FilterHub.propTypes = {
  state: PropTypes.shape({
    initial: PropTypes.number,
    price: PropTypes.number,
    downPayment: PropTypes.number,
    interestRate: PropTypes.number,
    loanType: PropTypes.number,
  }).isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  handleDownPaymentChange: PropTypes.func.isRequired,
  handleInterestRateChange: PropTypes.func.isRequired,
  handleLoanTypeChange: PropTypes.func.isRequired,
};

export default FilterHub;
