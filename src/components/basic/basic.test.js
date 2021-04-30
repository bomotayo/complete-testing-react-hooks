import React from "react";
import { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Basic from "./index";

it("renders correctly enzime", () => {
  const wrapper = shallow(<Basic />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
