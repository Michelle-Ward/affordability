import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import {
//   DropDownContainer, DropDownHeader, DropDownList, ListItem,
// } from '../Styles';

const LoanType = ({ handleLoanTypeChange }) => {
  const [loanTypes] = useState([
    { label: '30-year fixed', value: 30 },
    { label: '20-year fixed', value: 20 },
    { label: '15-year fixed', value: 15 },
    { label: '10-year fixed', value: 10 },
    { label: 'FHA 30-year fixed', value: 30 },
    { label: 'FHA 15-year fixed', value: 15 },
    { label: 'VA 30-year fixed', value: 30 },
    { label: 'VA 15-year fixed', value: 15 },
  ]);
  const handleChange = (e) => {
    handleLoanTypeChange(Number(e.target.value));
  };
  return (
    <select onChange={handleChange}>
      LoanType
      {
        // eslint-disable-next-line react/no-array-index-key
        loanTypes.map((item, i) => <option key={i} value={item.value}>{item.label}</option>)
      }
    </select>
  );
};

LoanType.propTypes = {
  handleLoanTypeChange: PropTypes.func.isRequired,
};

export default LoanType;
