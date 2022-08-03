import { store } from "../../../../src/Store";
import { Provider } from "react-redux";
import {
  fireEvent,
  render as rtlrender,
  screen,
  cleanup,
} from "@testing-library/react";
import Login from "./Login";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const render = (component: any) =>
  rtlrender(<Provider store={store}>{component}</Provider>);
afterEach(cleanup);
describe("Login", () => {
  it("render Login component Without crashing", () => {
    render(<Login />);
  });
  it("check  Login having input email", () => {
    const { getByTestId } = render(<Login />);
    const headerElement = getByTestId("email");
    expect(headerElement.textContent).toBe("");
  });
  it("check  Login having input password", () => {
    const { getByTestId } = render(<Login />);
    const headerElement = getByTestId("Password");
    expect(headerElement.textContent).toBe("");
  });
  it("check  Login having custom button Login", () => {
    const { getByTestId } = render(<Login />);
    const headerElement = getByTestId("Button");
    expect(headerElement.textContent).toBe("LOGIN");
  });
});
