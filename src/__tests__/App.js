import React from 'react';
import { mount, render } from 'enzyme';
import App from '../components/App';

test('renders the img', () => {
 let wrapper = mount(<App />);

 expect(wrapper.find('img')).toHaveLength(1);
});


// test('renders the right img depending on name', () => {
//   let wrapper = mount(<App />);
 
//   expect(wrapper.find('img')).toBe('Zac');
//  });

test('renders the dropdown menu', () => {
  let wrapper = mount(<App />);
 
  expect (wrapper.find('option')).toHaveLength(3);
 });
 

