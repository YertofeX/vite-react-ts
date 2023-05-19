import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  it("mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Get by h1
    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("Vite + React");

    // Get by text using the React testing library
    const text = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(text.textContent).toBeTruthy();
  });
  it("clicks the Vite logo", async () => {
    // Example with the user event library
    render(<App />);
    const user = userEvent.setup();

    const spyAnchorTag = vi.spyOn(user, "click");
    await user.click(screen.getByAltText("Vite logo"));

    expect(spyAnchorTag).toHaveBeenCalledTimes(1);
  });
});
