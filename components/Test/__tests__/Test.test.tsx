import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Test from "../Test";

describe("test component", () => {
  it("should initialize without error", () => {
    render(<Test toggle={() => {}} />);
  });
});
