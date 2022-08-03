import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { userExists, userDetails } from '../services';
function Login() {
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
      console.log(userDetails(users, formData));
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
