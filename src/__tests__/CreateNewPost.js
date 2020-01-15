import CreateNewPost from '../components/CreateNewComment';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('New post', () => {
    it('should have a form', () => {
        const wrapper = mount(<CreateNewPost />);
        (wrapper.find('#title')).simulate("change",{
            target: {title: "hej"}
        });
        expect(wrapper.state().onSubmit).toBe("hej");
      });
})

// it('update state on search change', () => {
//     const wrapper = shallow(<App />);
//     wrapper.find('input').simulate('change', {
//       target: { name: 'search', value: 'AUD' }
//     });
//     expect(wrapper.state().search).toEqual('AUD');
//   });
