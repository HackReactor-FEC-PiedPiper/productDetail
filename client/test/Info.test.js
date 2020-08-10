import React from 'react';
import Info from '../src/components/Info';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Info child component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
    <Info
    reviews={{results:[{rating:3}, {rating:1}, {rating:4}]}}
    product={{name: 'Heir Force Ones', category:'Kicks', default_price: 99}}
    selectedStyle={null}
    />)
  });

    test('Product category should render accurately', () => {
      expect(wrapper.find('#category').text()).toBe('KICKS');
    });

    test('Product title should render accurately', () => {
      expect(wrapper.find('#name').text()).toBe('Heir Force Ones');
    });

    test('Number of reviews in link should render accurately', () => {
      expect(wrapper.find('#rating').text()).toBe(`Read\xa03\xa0reviews`);
    });

    test('Only original/default price should render in the case of no sale price', () => {
      expect(wrapper.find('#price').text()).toBe('$99');
    })

    test('In the case of a sale price, the sale price followed by the original price should render', () => {
      //Change wrapper to include a sale price
      wrapper = shallow(
          <Info
          reviews={{results:[]}}
          product={{name: 'Heir Force Ones', category:'Kicks', defaultPrice: 99}}
          selectedStyle={{sale_price: '49', original_price: '99'}}
          />)

      //Checking to see both original and sale price render
      expect(wrapper.find('#price').text()).toBe('$49\xa0$99');
    })

    test('Facebook share button should always render', () => {
      expect(wrapper.find('.fb-share-button').text()).toBe('Share');
    })

    test('Twitter tweet button should always render', () => {
      expect(wrapper.find('.twitter-share-button').text()).toBe('Tweet');
    })

});
