import React from "react";
import { shallow, mount } from "enzyme";
import SinglePost from "../components/SinglePost";

it("should have an x-button", () => {
  const wrapper = mount(<SinglePost />);
  expect(wrapper.find("button")).toHaveLength(1);
});

it("should have an Comments", () => {
  const wrapper = mount(<SinglePost />);
  expect(wrapper.find("Comments")).toHaveLength(1);
});
