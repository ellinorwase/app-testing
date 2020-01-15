import React from 'react';
import { shallow, mount } from 'enzyme';
import Bot from '../components/Bot/Bot';


it('should have an MessageForm', () => {
    const wrapper = mount(<Bot />);
    expect(wrapper.find('MessageForm')).toHaveLength(1);
  });
it('should have TypingIndicator', () => {
    const wrapper = mount(<Bot />);
    expect(wrapper.find('TypingIndicator')).toHaveLength(1);
  });