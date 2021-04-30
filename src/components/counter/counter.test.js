import React from "react";
import { shallow, render, mount } from "enzyme";
import Counter from "./index";

test("the increment method increments count", () => {
  const wrapper = mount(<Counter />);
  expect(wrapper.instance().state.count).toBe(0);

  wrapper.instance().increment();
  expect(wrapper.instance().state.count).toBe(1);
});
