import styled from 'styled-components';

export const AffordabilityContainer = styled.div`
  width: 100%
  height: 100%;
  box-sizing: border-box;
  margin: 0 50px;
`;

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SliderHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;

`;

export const Slider = styled.form`
  display: flex;
  width: 50%;
`;

export const InnerText = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: inline-block;
  text-align: center;
  margin-top: 0.4rem;
`;

export const PerMonthValue = styled.div`
  font-size: 350%;
  font-weight: 900;
`;
export const PerMonthText = styled.p`
  font-size: 150%;
  margin-top: 0!important;
`;

export const FilterHubContainer = styled.div``;

export const GraphTableContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 10px;
  `;

export const Graph = styled.div`
  position: relative;
`;

export const Index = styled.div`
  width: 500px;
  padding: 45px 0px 20px 16px;
  display: flex;
  flex-direction: column;
  min-width: 50%;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 5px 0 5px;
  font-size: 16px;
  line-height: 1.5;
`;

export const FactorColor = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0 5px;
`;

export const FactorText = styled.div`
  flex: 1;

`;

export const Price = styled.div`
  font-weight: 900;
`;
