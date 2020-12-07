/* eslint-disable jest/no-conditional-expect */
import App from "./../App";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const wait = (time) =>
  act(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  });

//*************** sample test Cards ***************
test("card styles", async () => {
  render(<App intervalTime={150} />);
  await wait(1.25 * 150);
  let a = (await screen.findByTestId("percentage-element")).textContent;
  if (a.startsWith("+") && a.endsWith("%")) {
    //test left text class
    expect(
      await (await screen.findByText(a)).classList.contains("percentage_up")
    ).toBe(true);

    //test arrow up
    expect(screen.getByTestId("arrow-element").classList.contains("up")).toBe(
      true
    );
  } else if (a.startsWith("-") && a.endsWith("%")) {
    //test left text class
    expect(
      await (await screen.findByText(a)).classList.contains("percentage_down")
    ).toBe(true);

    //test arrow down
    expect(screen.getByTestId("arrow-element").classList.contains("down")).toBe(
      true
    );
  } else {
    expect(a).toHaveTextContent("+ | - and end with %");
  }
});

//*************** sample test Chart ***************
test("chart counts to be 50", async () => {
  const { container } = render(<App intervalTime={20} />);
  await wait(1500);
  let children = container.querySelector(".chartContainer").childElementCount;
  expect(children).toBe(50);
});
