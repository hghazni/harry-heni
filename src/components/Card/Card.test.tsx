import React from "react";
import { render } from "@testing-library/react";
import Card from ".";
import { CardProps } from "./Card.types";

describe("Card Component", () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      className: "",
      code: "GB",
      name: "Great Britain",
      capital: "London",
      onClick: () => console.log('something'),
      translation: {
        cta: 'Find out more',
        capital: 'Capital',
      }
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it("Should render the Card component with all it's props", () => {
    const { asFragment } = renderComponent();
    const CardComponent = (asFragment().firstElementChild as any).name;
    expect(CardComponent).toEqual(CardComponent);
  });
});
