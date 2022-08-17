import { store } from "../../../../src/Store";
// import { Provider } from "react-redux";
// import { render as rtlrender, cleanup } from "@testing-library/react";
// import Register from "./Register";
// import { BrowserRouter as Router } from "react-router-dom";
// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import App from "../../../App";

// Enzyme.configure({ adapter: new Adapter() });

// const render = (component: any) =>
//   rtlrender(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// afterEach(cleanup);
// describe("Login", () => {
//   it("render Login component Without crashing", () => {
//     render(<Register />);
//   });
//   it("check  Login having input email", () => {
//     const { getByTestId } = render(<Register />);
//     const headerElement = getByTestId("email");
//     expect(headerElement.textContent).toBe("");
//   });
//   it("check  Login having input password", () => {
//     const { getByTestId } = render(<Register />);
//     const headerElement = getByTestId("Password");
//     console.log(headerElement, "headerElement");
//     expect(headerElement.textContent).toBe("");
//   });
//   it("check  Login having custom button Login", () => {
//     const { getByTestId } = render(<Register />);
//     const headerElement = getByTestId("Button");
//     expect(headerElement.textContent).toBe("LOGIN");
//   });
// });
