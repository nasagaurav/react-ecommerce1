import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { userExists, userDetails, setStorage } from '../services';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Login() {
  const navigate = useNavigate();
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { users } = state;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    if (userExists(users, formData)) {
      const foundUser = userDetails(users, formData);
      setStorage('uid', foundUser.id);
      setStorage('name', foundUser.name);
      setStorage('email', foundUser.email);
      setStorage('phone', foundUser.phone);
      setStorage('password', foundUser.password);
      toast(`welcome ${foundUser.name}`);
      dispatch({ type: 'login', payload: foundUser });
      navigate('/');
    } else {
      toast('user not found');
    }
  };
  return (
    <Container>
      <br />
      <br />
      <Row>
        <br />
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>login page</p>
          <hr />
        </Alert>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control mb-4"
            placeholder="email"
            {...register('email', { required: true })}
          />
          {errors.email && <p>email required</p>}
          <input
            className="form-control mb-4"
            placeholder="password"
            {...register('password', { required: true })}
          />
          {errors.password && <p>password required</p>}

          <Button>Login as User</Button>
        </form>
      </Row>
    </Container>
  );
}
export default Login;
