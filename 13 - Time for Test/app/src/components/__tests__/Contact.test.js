import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {

  beforeAll(() => {
    console.log(
      "Before All"
    )
  })

  beforeEach(() => {
    console.log(
      "Before Each"
    )
  })

  afterAll(() => {
    console.log(
      "After All"
    )
  })

  afterEach(() => {
    console.log(
      "After Each"
    )
  })


  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact us component", () => {
    // Rendering
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox"); // returns React Element Component / JSX Element

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
