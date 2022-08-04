import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signupUser, isUserEmailExists } from '../services';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
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
      <h1>signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register('name', { required: true })} />
        {errors.name && <p>name required</p>}
        <input placeholder="email" {...register('email', { required: true })} />
        {errors.email && <p>email required</p>}
        <input placeholder="phone" {...register('phone', { required: true })} />
        {errors.phone && <p>phone required</p>}
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
export default Signup;
