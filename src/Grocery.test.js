import React from 'react';
import ReactDOM from 'react-dom';
import { Grocery } from './Grocery';
import { shallow } from 'enzyme';

describe('Grocery', () => {

  it('renders without crashing with expected props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Grocery name='' />, div);
  });

  it('renders the name of the grocery in <h3> tags', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);
    const titleHTML = <h3>Bananas</h3>;

    expect(wrapper.contains(titleHTML)).toEqual(true);
  });

})
