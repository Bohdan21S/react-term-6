import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup, FormControl, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <h2 className="text-center mb-4">Реєстрація</h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Ім'я</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Повторіть пароль</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Згода з умовами використання" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              ЗАРЕЄСТРУВАТИСЯ
            </Button>
            <div className="text-center mt-3">
              <Link to="/login">Уже зареєстровані?</Link>
            </div>
            <hr className="mt-4" />
            <h5 className="text-center mb-3">Реєстрація через соціальні мережі</h5>
            <Button variant="outline-primary" className="w-100">
              <i className="fab fa-facebook-f"></i>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;