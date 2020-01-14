import React from 'react';
import { mount, render } from 'enzyme';
import App from '../components/App';

test('renders the app', () => {
 let wrapper = mount(<App />);

 expect(wrapper.find('img')).toHaveLength(1);
});

test('renders the app', () => {
  let wrapper = mount(<App />);
 
  expect (wrapper.find('option')).toHaveLength(3);
 });
 

