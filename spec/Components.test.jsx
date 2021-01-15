import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/components/App';
import FilterHub from '../client/components/FilterHub';
import GraphTable from '../client/components/GraphTable';

Enzyme.configure({ adapter: new Adapter() });

it('works', () => {
  const wrap = shallow(
    <App />,
  );

  expect(wrap.text()).toEqual('Calculate your monthly mortgage payments');
});

// describe('App', () => {
//   it('Should contain <FilterHub /> and <GraphTable /> components', () => {
//     const wrapper = shallow(<App />);
//     // console.log(wrapper);
//     expect(true).to.equal(true);
//   });
// });
