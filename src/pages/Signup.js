import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signupUser, isUserEmailExists } from '../services';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
function Signup() {
  const navigate = useNavigate();
  const state = useSelector((s) => s);
  const { users } = state;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    if (isUserEmailExists(users, formData)) {
      toast('failed to signup');
    } else {
      signupUser(formData).then((d) => {
        // console.log(d);
        dispatch({ type: 'signup', payload: d });
        toast('signup successfull');
        navigate('/login');
      });
    }
  };

  return (
    <div>
      <Container>
        <br />
        <br />
        <Row>
          <br />
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>Signup page</p>
            <hr />
          </Alert>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control mb-4"
              placeholder="name"
              {...register('name', { required: true })}
            />
            {errors.name && <p>name required</p>}
            <input
              className="form-control mb-4"
              placeholder="email"
              {...register('email', { required: true })}
            />
            {errors.email && <p>email required</p>}

            <input
              className="form-control mb-4"
              placeholder="phone"
              {...register('phone', { required: true })}
            />
            {errors.phone && <p>phone required</p>}

            <input
              className="form-control mb-4"
              placeholder="password"
              {...register('password', { required: true })}
            />
            {errors.password && <p>password required</p>}

            <Button>Register Me</Button>
          </form>
        </Row>
      </Container>
    </div>
  );
}
export default Signup;
