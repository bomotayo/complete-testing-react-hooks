import React from "react";
import { act, render, fireEvent, cleanup } from "@testing-library/react";
import Context from "../../store/context";
import TestHookContext from "../test_hook_context";
import App from "../../../App";

afterEach(cleanup);

it("Context value is updated by child component", () => {
  const { container, getByText } = render(
    <App>
      <Context.Provider>
        <TestHookContext />
      </Context.Provider>
    </App>
  );

  expect(getByText(/Some/i).textContent).toBe("Some Text");
  fireEvent.click(getByText("Change Text"));
  expect(getByText(/Some/i).textContent).toBe("Some Other Text");
});
