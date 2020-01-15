import React from "react";
import { shallow, mount } from "enzyme";
import Index from "../api/index";
import SinglePost from "../components/SinglePost";

it("should have an x-button", () => {
  const wrapper = mount(<SinglePost />);
  expect(wrapper.find("button")).toHaveLength(1);
});
