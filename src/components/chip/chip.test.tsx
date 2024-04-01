import React from "react";
import { render } from "@testing-library/react";

import Chip from "./chip";

describe("Chip", () => {
  test("renders the Chip component", () => {
    render(<Chip>Hello world!</Chip>);
  });
});
