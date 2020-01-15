import React from 'react';
import { shallow, mount } from 'enzyme';
import Index from '../api/index';
import SingleComment from '../components/SingleComment';


it('should have an x-button', () => {
    const wrapper = mount(<SingleComment />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

