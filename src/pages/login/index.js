import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginPage } from '../../styles';
import backgroundLogin from '../../assets/images/background-1.jpg';
import logo from '../../assets/images/logo.jpeg';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  id: Yup.string().email('Enter a valid email address').required('Email is required'),
  password:  Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({email, password}){
    dispatch(signInRequest(email, password));
  }
  
  return (
    <LoginPage>
      <div className="row">
        <div className="col-lg-6">
          <div className="box">
            <Form schema={schema} onSubmit={handleSubmit}>
              <img className="logo" src={logo} alt=""/>
              <h3>Sign into your account</h3>
              <p className="label">Email address</p>
              <Input name="email" className="form-control" type="text" placeholder="you@example.com" />
              <p className="label left">Password</p>
              <Input name="password" className="form-control" type="password" placeholder="Enter 6 characters or more" />
              <button type="submit" className="send">{ loading ? 'Loading ...' : 'Sign in' }</button>
            </Form>
          </div>
        </div>
        <div className="col-lg-6 box-about" style={{ backgroundImage: `url('${backgroundLogin}')` }}>
        </div>
      </div>
    </LoginPage>
  );
}

