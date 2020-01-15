import CreateNewPost from "../components/CreateNewPost";
import React from "react";
import { shallow, mount } from "enzyme";
import Index from "../api/index";

// beforeEach(() => {
//     jest.resetModules();
//   });

// it('create a new post', () => {
//     const title = "Titeln"
//     const wrapper = mount(<CreateNewPost/>);
//     expect(wrapper.state.title().title).toBe(title)
//     expect(wrapper.find('#title')).toBe(title);
//     // expect(wrapper.state().user).toBeFalsy();

// });



describe("New Post", () => {
  //   it("create a new post", () => {
  //     const wrapper = mount(<CreateNewPost />);
  //     const title = "Titeln";
  //     const content = "contents";
  //     wrapper.find("#title").simulate("submit", {
  //       target: { value: title }
  //     });
  //     wrapper.find("#content").simulate("submit", {
  //       target: { value: content }
  //     });
  //     expect(wrapper.state().onSubmit).toEqual(title, content);
  //   });
//   test("title to be hej", () => {
//     const beverage = { title: "hej" };
//     const drink = jest.fn(beverage => beverage.title);

//     drink(beverage);

//     expect(drink).toHaveReturnedWith("hej");
//   });
});
