import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

function Logout() {
  return (
    <Container>
      <br />
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>you have been successfully logged out</p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use phone otp in upcoming future we
          might add some integreting products for you. please sure to visit us
          again.
        </p>
      </Alert>
    </Container>
  );
}
export default Logout;
