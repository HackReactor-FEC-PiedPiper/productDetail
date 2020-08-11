import React from 'react';
import App from '../src/components/App';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App Parent Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />)
  });


  test(`Should contain the title 'Logo'`, () => {
    expect(wrapper.find('#nav').text()).toBe('Logo');
  });

  test(`Overview subcomponent should just contain text 'Overview' currently`, () => {
    expect(wrapper.find('.overview').text()).toBe('Overview');
  });

  // test(`Styles subcomponent should just contain text 'Styles' currently`, () => {
  //   expect(wrapper.find('.styles').text()).to('Styles');
  // });

  test(`Add to Cart subcomponent should just contain text 'Add to Cart' currently`, () => {
    expect(wrapper.find('.a2c').text()).toBe('Add to Cart');
  });

})
