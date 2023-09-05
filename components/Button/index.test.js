import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("render()", () => {
    it("should render", () => {
        const element = render(<Button />);
    });
});
