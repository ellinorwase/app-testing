import CreateNewPost from '../components/CreateNewComment';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('New post', () => {
    it('should add a new post', () => {
        const wrapper = mount(<CreateNewPost />);
        (wrapper.find('#title')).simulate("change",{
            target: {title: "hej"}
        });
        expect(wrapper.state().onSubmit).toBe("hej");
      });
})

