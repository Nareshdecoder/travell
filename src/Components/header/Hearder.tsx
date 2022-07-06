import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "../Core/S4-button/Button";
// import Button from "../Core/S4-button/Button";
function Header() {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <div>
              <Navbar.Brand href="#home">Voyaging</Navbar.Brand>
            </div>
            <div className="d-flex justify-content-between">
              <Nav className="me-auto gap-4">
                <Nav.Link href="/" className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="text-white">
                  About
                </Nav.Link>

                <Nav.Link href="/trips" className="text-white">
                  Trips
                </Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
