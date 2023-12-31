import { fireEvent, screen } from "@testing-library/react";

import { renderWithTheme } from "~/utils/tests";

import { Menu } from ".";

describe("<Menu />", () => {
	it("should render the menu", () => {
		renderWithTheme(<Menu />);

		expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument();
		expect(screen.getByRole("img", { name: /Won Games/i })).toBeInTheDocument();
		expect(screen.getByLabelText(/Search/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Open Shopping Cart/i)).toBeInTheDocument();
	});

	it("should handle the open/close mobile menu", () => {
		renderWithTheme(<Menu />);

		const fullMenuElement = screen.getByRole("navigation", { hidden: true });

		expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
		expect(fullMenuElement).toHaveStyle({ opacity: 0 });

		fireEvent.click(screen.getByLabelText(/Open Menu/i));

		expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false");
		expect(fullMenuElement).toHaveStyle({ opacity: 1 });

		fireEvent.click(screen.getByLabelText(/Close Menu/i));

		expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
		expect(fullMenuElement).toHaveStyle({ opacity: 0 });
	});
});
