import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';
import '../assets/styles/Header.css';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const location = useLocation();

  const handleLinkClick = () => {
    sessionStorage.setItem('previousPath', location.pathname);
  };

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
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  Мій кабінет
                </Nav.Link>
                <Nav.Link onClick={logout}>
                  Вийти
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to={{ pathname: '/login'}} onClick={handleLinkClick}>
                  Увійти
                </Nav.Link>
                <Nav.Link as={Link} to={{ pathname: '/signup'}} onClick={handleLinkClick}>
                  Зареєструватися
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
