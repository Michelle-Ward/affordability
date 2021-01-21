import React from 'react';
import PropTypes from 'prop-types';

const GraphTable = ({ state }) => {
  const {
    principle, mortgageIns, tax, insurance,
  } = state;
  const section = (data, total) => (data / total) * 100;
  const total = principle + mortgageIns + tax + insurance;

  const principleSection = section(principle, total);
  const mortgageInsSection = section(mortgageIns, total);
  const taxSection = section(tax, total);
  const insuranceSection = section(insurance, total);

  const taxSectionOffset = 100 - taxSection + 25;
  const insuranceSectionOffset = taxSectionOffset - taxSection;
  const mortgageInsSectionOffset = insuranceSectionOffset - insuranceSection;

  return (
    <svg width="50%" height="50%" viewBox="0 0 42 42" className="donut">
      <circle
        cx="21"
        cy="21"
        r="15.91549430918952"
        fill="none"
        stroke="#ceb6ff"
        strokeWidth="3.8"
        strokeDasharray={`${mortgageInsSection} ${100 - mortgageInsSection}`}
        strokeDashoffset={mortgageInsSectionOffset}
      />
      <circle
        cx="21"
        cy="21"
        r="15.91549430918952"
        fill="none"
        stroke="#052286"
        strokeWidth="3.8"
        strokeDasharray={`${principleSection} ${100 - principleSection}`}
        strokeDashoffset="25"
      />
      <circle
        cx="21"
        cy="21"
        r="15.91549430918952"
        fill="none"
        stroke="#00adbb"
        strokeWidth="3.8"
        strokeDasharray={`${taxSection} ${100 - taxSection}`}
        strokeDashoffset={taxSectionOffset}
      />
      <circle
        cx="21"
        cy="21"
        r="15.91549430918952"
        fill="none"
        stroke="#c2d500"
        strokeWidth="3.8"
        strokeDasharray={`${insuranceSection} ${100 - insuranceSection}`}
        strokeDashoffset={insuranceSectionOffset}
      />
      <circle cx="21" cy="21" r="15.91549430918952" fill="none" />
    </svg>
  );
};

GraphTable.propTypes = {
  state: PropTypes.shape({
    principle: PropTypes.number.isRequired,
    mortgageIns: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    insurance: PropTypes.number.isRequired,
  }).isRequired,
};

export default GraphTable;
