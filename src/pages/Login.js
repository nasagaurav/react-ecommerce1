import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { userExists, userDetails, setStorage } from '../services';
import { useNavigate } from 'react-router-dom';
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
      navigate('/');
    } else {
      toast('user not found');
    }
  };
  return (
    <div>
      <h1>login page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" {...register('email', { required: true })} />
        {errors.email && <p>email required</p>}
        <input
          placeholder="password"
          {...register('password', { required: true })}
        />
        {errors.password && <p>password required</p>}

        <input type="submit" />
      </form>
    </div>
  );
}
export default Login;
