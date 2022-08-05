import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
function Profile() {
  const state = useSelector((s) => s);
  const { user } = state;
  const { name, email, phone, password } = user;
  return (
    <Container>
      <br />
      <br />
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" value={name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>phone</Form.Label>
          <Form.Control type="phone" placeholder="Enter phone" value={phone} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update My Profile
        </Button>
      </Form>
    </Container>
  );
}

export default Profile;
