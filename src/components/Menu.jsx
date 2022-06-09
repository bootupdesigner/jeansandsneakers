import React from "react";

import { Container, Offcanvas, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Jeans & Sneakers</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Jeans & Sneakers
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Introduction</Nav.Link>
                  <Nav.Link href="/self-worth">Self-Worth</Nav.Link>
                  <Nav.Link href="positude">Positude</Nav.Link>
                  <Nav.Link href="etiquette">Etiquette</Nav.Link>
                  <Nav.Link href="health-and-hygiene">Health ad Hygiene</Nav.Link>
                  <Nav.Link href="physical-activity-and-nutrition">Physical Activity and Nutrtion</Nav.Link>
                  <Nav.Link href="your-body">Your Body</Nav.Link>
                  <Nav.Link href="dating-and-sex">Dating and Sex</Nav.Link>
                  <Nav.Link href="safety">Safety</Nav.Link>
                  <Nav.Link href="closing">Closing</Nav.Link>
                  <Nav.Link href="hotlines">Hotlines</Nav.Link>
                  <Nav.Link href="websites">Websites</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item >
                      <Link to="safety">Safety</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}
export default Menu;