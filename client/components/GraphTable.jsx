import React from 'react';
import PropTypes from 'prop-types';
import {
  Graph, InnerText, PerMonthValue, PerMonthText, GraphSVG
} from './Styles';

const GraphTable = ({ state }) => {
  const {
    perMonth, principal, mortgageIns, tax, insurance,
  } = state;
  const principalPerMonth = Math.floor(principal / 12);
  const mortgageInsPerMonth = Math.floor(mortgageIns / 12);
  const section = (data, total) => (data / total) * 100;
  const total = principalPerMonth + mortgageInsPerMonth + tax + insurance;
  const principalSection = section(principalPerMonth, total);
  const mortgageInsSection = section(mortgageInsPerMonth, total);
  const taxSection = section(tax, total);
  const insuranceSection = section(insurance, total);

  const taxSectionOffset = 100 - principalSection + 25;
  const insuranceSectionOffset = taxSectionOffset - taxSection;
  const mortgageInsSectionOffset = insuranceSectionOffset - insuranceSection;

  return (
    <Graph>
      <InnerText>
        <PerMonthValue>
          $
          { Intl.NumberFormat({ style: 'currency', currency: 'US' }).format(Math.floor(perMonth)) }
        </PerMonthValue>
        <PerMonthText>/month</PerMonthText>
      </InnerText>
      <GraphSVG width="50%" height="50%" viewBox="0 0 42 42" className="donut">
        <circle
          cx="21"
          cy="21"
          r="15.91549430918952"
          fill="none"
          stroke="#052286"
          strokeWidth="3.8"
          strokeDasharray={`${principalSection} ${100 - principalSection}`}
          strokeDashoffset="25"
        />
        {
          mortgageIns
            ? (
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
            )
            : null
        }
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
      </GraphSVG>
    </Graph>
  );
};

GraphTable.propTypes = {
  state: PropTypes.shape({
    perMonth: PropTypes.number.isRequired,
    principal: PropTypes.number.isRequired,
    mortgageIns: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    insurance: PropTypes.number.isRequired,
  }).isRequired,
};

export default GraphTable;
