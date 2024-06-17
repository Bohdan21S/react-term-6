import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup, FormControl, Checkbox } from 'react-bootstrap';
import "../assets/styles/LoginPage.css";

function LoginPage() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <h2 className="text-center mb-4">Вхід</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Запам'ятати мене" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              УВІЙТИ
            </Button>
            <div className="text-center mt-3">
              <a href="#">Забули пароль?</a>
            </div>
            <hr className="mt-4" />
            <h5 className="text-center mb-3">Вхід через соціальні мережі</h5>
            <Button variant="outline-primary" className="w-100">
              <i className="fab fa-facebook-f"></i>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;