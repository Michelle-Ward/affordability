import React from 'react';
import PropTypes from 'prop-types';
import {
  Index, Content, FactorColor, FactorText, Price,
} from './Styles';

const Guide = ({ state }) => {
  const {
    principal, tax, insurance, mortgageIns,
  } = state;
  return (
    <Index>
      <Content>
        <FactorColor
          style={{ background: '#052286' }}
        />
        <FactorText>Principal & Interest</FactorText>
        <Price>
          $
          { Math.floor(principal / 12).toLocaleString() }
        </Price>
      </Content>
      <Content>
        <FactorColor
          style={{ background: '#00adbb' }}
        />
        <FactorText>Property Taxes</FactorText>
        <Price>
          $
          { tax.toLocaleString() }
        </Price>
      </Content>
      <Content>
        <FactorColor
          style={{ background: '#c2d500' }}
        />
        <FactorText>Home Insurance</FactorText>
        <Price>
          $
          { insurance }
        </Price>
      </Content>
      <Content>
        <FactorColor
          style={{ background: '#ceb6ff' }}
        />
        <FactorText>Mortgage ins. & other</FactorText>
        <Price>
          $
          { Math.floor(mortgageIns / 12).toLocaleString() }
        </Price>
      </Content>
    </Index>
  );
};

Guide.propTypes = {
  state: PropTypes.shape({
    principal: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    insurance: PropTypes.number.isRequired,
    mortgageIns: PropTypes.number.isRequired,
  }).isRequired,
};

export default Guide;
