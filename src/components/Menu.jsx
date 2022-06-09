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
                  <hr />
                  <NavDropdown
                    title="Topics"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item >
                      <Link to="/self-worth">Self-Worth</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="positude">Positude</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="etiquette">Etiquette</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="health-and-hygiene">Health ad Hygiene</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="physical-activity-and-nutrition">Physical Activity and Nutrtion</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="your-body">Your Body</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="dating-and-sex">Dating and Sex</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="safety">Safety</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="closing">Closing</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <hr />
                  <Link to="hotlines">Hotlines</Link>
                  <hr />
                  <Link to="websites">Websites</Link>
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