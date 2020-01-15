import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleComment from '../components/SingleComment';


it('should have an x-button', () => {
    const wrapper = mount(<SingleComment />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

