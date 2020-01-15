import React from 'react';
import { mount, render } from 'enzyme';
import App from '../components/App';

test('renders the user', () => { // checking the first element in the dropdown menu
 let wrapper = mount(<App />);
 let user = wrapper.find('select').props().value;
 let src = wrapper.find("img").prop("src")
 let userImg = src.includes(user.toLowerCase());

 expect(userImg).toBeTruthy();
});


test('renders the dropdown menu', () => {
  let wrapper = mount(<App />);
 
  expect (wrapper.find('option')).toHaveLength(3);
 });
 

