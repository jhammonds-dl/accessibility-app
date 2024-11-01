// @vitest-environment happy-dom

import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";
import App from "../App";
import JSImage from "../components/JSImage/JSImage";
import JSImageNoAlt from "../components/JSImage/JSImageNoAlt";
import MUIImage from "../components/MUIImage/MUIImage";
import MUIImageNoAlt from "../components/MUIImage/MUIImageNoAlt";
import RBImage from "../components/RBImage/RBImage";
import RBImageNoAlt from "../components/RBImage/RBImageNoAlt";
import ImageComparison from "../pages/ImageComparison/ImageComparison";

expect.extend(toHaveNoViolations);

describe.each([
  { Component: App, props: {} },
  { Component: ImageComparison, props: {} },
  { Component: JSImage, props: {} },
  { Component: JSImageNoAlt, props: {} },
  { Component: MUIImage, props: {} },
  { Component: MUIImageNoAlt, props: {} },
  { Component: RBImage, props: {} },
  { Component: RBImageNoAlt, props: {} },
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
