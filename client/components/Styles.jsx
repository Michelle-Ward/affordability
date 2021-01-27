import styled from 'styled-components';

// TOP LEVEL CONTAINERS
// ____________________________________________________________________________

export const AffordabilityContainer = styled.div`
  box-sizing: border-box;
  // margin: 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilterHubContainer = styled.div`
  background-color: #f5f6f7;
  border-radius: 0.5rem;
  display: block;
  width: 50rem;
`;

export const GraphTableContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 10px;
  width: 65rem;
`;

// ____________________________________________________________________________

// HEADER
// ____________________________________________________________________________

export const Caption = styled.div`
width: 50rem;
`;

export const CaptionHeader = styled.div`
font-size: 20px;
font-weight: 700;
`;

// ____________________________________________________________________________

// SLIDER COMPONENTS
// ____________________________________________________________________________

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.8rem;
`;

export const SliderHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Slider = styled.form`
  display: flex;
  // width: 50%;
  margin-top: 1rem;
`;

export const CustomSlider = styled.input`
  -webkit-appearance: none;
  width: 2px;
  height: 2px;
  cursor: pointer;
  border-radius: 0.5rem;
  outline: none!important;
  background: linear-gradient(to right, #007882 0%, #007882 ${({ value, max }) => ((value / max) * 100).toFixed(2)}%, #cdd1d4 ${({ value, max }) => ((value / max) * 100).toFixed(2)}%, #cdd1d4 100%);
  // &::-webkit-slider-runnable-track {
  //   color: gray;
  // }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: #007882;
    border: 4.5px solid white;
    border-radius: 50%;
    box-shadow: 0 5px 15px #d8d8d8;
    cursor: pointer;
  }

`;

export const SliderHub = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SliderDollarSymbol = styled.span`
  position: relative;
  font-size: 12px;
  &:before {
    position: absolute;
    top: 27%;
    left: 10px;
    content: "$";
  }
`;

export const SliderPercentSymbol = styled.span`
  position: relative;
  font-size: 12px;
  &:before {
    position: absolute;
    top: 27%;
    right: 10px;
    content: "%";
  }
`;

export const DualSliderInput = styled.div`
  align-self: flex-end;
  display: flex;
`;

export const DualSliderTotalInput = styled.input`
  width: 60px;
  height: 30px;
  border-top: solid lightgray 0.1rem;
  border-bottom: solid lightgray 0.1rem;
  border-left: solid lightgray 0.1rem;
  border-right: solid white 0.1rem;
  padding-left: 17px;
  border-radius: 0.4rem 0 0 0.4rem;
  transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  outline: none !important;
  &:focus {
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px!important;
  }
`;

export const DualSliderPercentInput = styled.input`
  width: 40px;
  height: 30px;
  border: solid lightgray 0.1rem;

  padding-left: 5px;
  border-radius: 0 0.4rem 0.4rem 0;
  transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  outline: none !important;
  &:focus {
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px!important;
  }
`;

export const DualSliderDollarSymbol = styled.span`
  position: relative;
  font-size: 12px;
  &:before {
    position: absolute;
    top: 27%;
    left: 10px;
    content: "$";
  }
`;

export const DualSliderPercentSymbol = styled.span`
  position: relative;
  font-size: 12px;
  &:before {
    position: absolute;
    top: 27%;
    right: 10px;
    content: "%";
  }
`;

export const SliderInput = styled.input`
  width: 100px;
  height: 30px;
  align-self: flex-end;
  border: solid lightgray 0.1rem;
  padding-left: 17px;
  border-radius: 0.4rem;
  transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  outline: none !important;
  &:focus {
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px!important;
  }
`;

export const SliderCaption = styled.span`
  flex: 1;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
`;

export const SliderPercentInput = styled.input`
  width: 50px;
  height: 30px;
  border: solid lightgray 0.1rem;
  padding-left: 17px;
  border-radius: 0.4rem;
  transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  outline: none !important;
  &:focus {
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px!important;
  }
`;

export const LoanTypeInput = styled.div`
  display: block;
  margin: 1rem;
`;

export const LoanTypeSelect = styled.select`
  width: 31%;
  height: 30px;
  border: solid lightgray 0.1rem;
  border-radius: 0.4rem;
  transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  outline: none !important;
  &:focus {
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px!important;
  }
`;

export const LoanTypeCaption = styled.p`
  font-weight: 700;
`;

// ____________________________________________________________________________

// GRAPH TABLE COMPONENTS
// ____________________________________________________________________________

export const Graph = styled.div`
  position: relative;
  margin-left: -20px;
`;

export const Index = styled.div`
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

export const GraphSVG = styled.svg`
  width: 100%!important;
  height: 100%!important;
`;
