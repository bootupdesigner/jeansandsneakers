import React from "react";

import { Container, Offcanvas, Navbar, Nav, NavDropdown } from "react-bootstrap";

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
                <NavDropdown
                    title="Topics"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="self-worth">Self-Worth</NavDropdown.Item>
                    <NavDropdown.Item href="positude">Positude</NavDropdown.Item>
                    <NavDropdown.Item href="etiquette">Etiquette</NavDropdown.Item>
                    <NavDropdown.Item href="health-and-hygiene">Health and Hygiene</NavDropdown.Item>
                    <NavDropdown.Item href="physical-activity-and-nutrition">Physical Activity and Nutrtion</NavDropdown.Item>
                    <NavDropdown.Item href="your-body">Your Body</NavDropdown.Item>
                    <NavDropdown.Item href="dating-and-sex">Dating and Sex</NavDropdown.Item>
                    <NavDropdown.Item href="safety">Safety</NavDropdown.Item>
                    <NavDropdown.Item href="closing">Closing</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="hotlines">Hotlines</Nav.Link>
                  <Nav.Link href="websites">Websites</Nav.Link>
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