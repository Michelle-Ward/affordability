/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/components/App';
import FilterHub from '../client/components/FilterHub';
import HomePrice from '../client/components/filters/HomePrice';
import DownPayment from '../client/components/filters/DownPayment';
import InterestRate from '../client/components/filters/InterestRate';
import GraphTable from '../client/components/GraphTable';
import { SliderContainer, SliderHeader, Slider } from '../client/components/Styles';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    console.log(wrapper.find('FilterHub'));
  });
  it('Should contain <FilterHub /> component', () => {
    expect(wrapper.contains(<FilterHub />)).toEqual(true);
  });
  it('Should contain <GraphTable /> component', () => {
    expect(wrapper.contains(<GraphTable />)).toEqual(true);
  });
});

describe('<FilterHub />', () => {
  it('Should contain all the sliders', () => {
    const wrapper = shallow(<FilterHub />);
    expect(wrapper.contains(<HomePrice />)).toEqual(true);
    expect(wrapper.contains(<DownPayment />)).toEqual(true);
    expect(wrapper.contains(<InterestRate />)).toEqual(true);
  });
});

describe('<HomePrice />', () => {
  it('Should contain the slider components', () => {
    const wrapper = shallow(<HomePrice />);
    expect(wrapper.contains(<SliderContainer />)).toEqual(true);
    const sliderWrapper = shallow(<SliderContainer />);
    expect(sliderWrapper.contains(<SliderHeader />)).toEqual(true);
    expect(sliderWrapper.contains(<Slider />)).toEqual(true);
  });
});

describe('<DownPayment />', () => {
  it('Should contain the slider components', () => {
    const wrapper = shallow(<DownPayment />);
    expect(wrapper.contains(<SliderContainer />)).toEqual(true);
    const sliderWrapper = shallow(<SliderContainer />);
    expect(sliderWrapper.contains(<SliderHeader />)).toEqual(true);
    expect(sliderWrapper.contains(<Slider />)).toEqual(true);
  });
});

describe('<InterestRate />', () => {
  it('Should contain the slider components', () => {
    const wrapper = shallow(<InterestRate />);
    expect(wrapper.contains(<SliderContainer />)).toEqual(true);
    const sliderWrapper = shallow(<SliderContainer />);
    expect(sliderWrapper.contains(<SliderHeader />)).toEqual(true);
    expect(sliderWrapper.contains(<Slider />)).toEqual(true);
  });
});
