import { render, screen } from "@testing-library/react";

import ComponentTest from "../../app/test/page";

describe("<MyTemplate/>", () => {
  it("shold it render component", () => {
    render(<ComponentTest />);

    expect(screen.getByText("Teste Rota")).toBeInTheDocument();
  });
});
