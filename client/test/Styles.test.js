import React from 'react';
import Styles from '../src/components/Styles';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TestScheduler } from 'jest';
configure({ adapter: new Adapter() });

describe('Styles child component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
    <Styles
    selectedStyle={{style_id: 2, name: 'Slick' }}
    styles={[{style_id: 1, name: 'Retro', photos:[{thumbnail_url:null}]}, {style_id: 2, name: 'Slick', photos:[{thumbnail_url:null}]}]}
    changeStyle={() => {selectedStyle = {style_id: 3, name: 'Modern', photos:[{thumbnail_url:null}]}}}
    />)
  });

  test('Should correctly render the name of the style being displayed', () => {
    expect(wrapper.find('#styleName').text()).toBe('STYLE\xa0>\xa0\xa0SLICK')
  });


})