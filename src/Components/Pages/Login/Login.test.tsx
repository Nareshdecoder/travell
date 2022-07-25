import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
test("renders input", async () => {
  render(<Login />);
  const email: any = await screen.findByTestId("email");
  const password: any = await screen.findByTestId("password");
  fireEvent.change(email, { target: { value: "email" } });
  fireEvent.change(password, { target: { value: "password" } });
  expect(email.value).toBe("email");
  expect(password.value).toBe("password");
});
