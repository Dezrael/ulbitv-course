import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
  test("render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("with theme", () => {
    render(<Button buttonTheme={ButtonTheme.Clear}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
