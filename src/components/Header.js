import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="h">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Кінотеатр "UniFilms"
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              Про нас
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Фільми
            </Nav.Link>
            <Nav.Link as={Link} to="/schedule">
              Розклад
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Контакти
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              Новини
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Увійти
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Зареєструватися
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
