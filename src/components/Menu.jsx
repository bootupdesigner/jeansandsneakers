import React from "react";
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

import { Container, Offcanvas, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  const { logOutUser } = useContext(UserContext);

  // This function is called when the user clicks the "Logout" button.
  const logOut = async () => {
    try {
      // Calling the logOutUser function from the user context.
      const loggedOut = await logOutUser();
      // Now we will refresh the page, and the user will be logged out and
      // redirected to the login page because of the <PrivateRoute /> component.
      if (loggedOut) {
        window.location.reload(true);
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Sneakers & Jeans</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Sneakers & Jeans
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <hr />
                  <Nav.Link href="/">Chapters</Nav.Link>
                  <hr />
                  <Link to="/hotlines">Hotlines</Link>
                  <hr />
                  <Link to="/websites">Websites</Link>
                </Nav>
                <hr />
                <Button variant="primary" onClick={logOut}>Logout</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}
export default Menu;