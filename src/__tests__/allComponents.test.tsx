// @vitest-environment happy-dom

import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";
import App from "../App";
import InaccessiblePage from "../pages/InaccessiblePage/InaccessiblePage";
import InaccessibleForm from "../components/InaccessibleForm/InaccessibleForm";
import StartPage from "../pages/StartPage";
import FinishPage from "../pages/FinishPage";
import ExerciseComplete from "../pages/ExerciseComplete/ExerciseComplete";

expect.extend(toHaveNoViolations);

describe.each([
  { Component: App, props: {} },
  { Component: InaccessiblePage, props: {} },
  { Component: InaccessibleForm, props: {} },
  { Component: StartPage, props: {} },
  { Component: FinishPage, props: {} },
  { Component: ExerciseComplete, props: {} },
])("Testing $Component.name component", ({ Component, props }) => {
  it("should render", () => {
    render(<Component {...props} />);
  });
  it("should be accessible", async () => {
    const { container } = render(<Component {...props} />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
