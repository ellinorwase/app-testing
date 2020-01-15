import CreateNewPost from '../components/CreateNewComment';
import React from 'react';
import { shallow, mount } from 'enzyme';

it("should contain form", () => {
    const wrapper = mount(<CreateNewPost />);
    expect(wrapper.find("form")).toHaveLength(1);
  });
  