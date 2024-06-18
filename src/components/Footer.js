import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Кінотеатр "UniFilms"</h5>
            <p>Адреса: вул. Енергії 21</p>
            <p>Телефон: +380999999999</p>
            <p>Email: info@kinoteatr.com</p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Швидкі посилання</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Головна
                </a>
              </li>
              <li>
                <a href="/movies" className="text-white">
                  Фільми
                </a>
              </li>
              <li>
                <a href="/schedule" className="text-white">
                  Розклад сеансів
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  Про нас
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Контакти
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Соціальні мережі</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} Кінотеатр "UniFilms". Усі права захищені.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
