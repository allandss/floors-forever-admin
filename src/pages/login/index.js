import React from 'react';
import { Login } from '../../styles';

export default function login() {
  return (
    <Login>
      <div className="row">
        <div className="col-lg-6">
          <div className="box">
            <form schema="" onSubmit="">
              <img className="logo" src="./logo.jpeg" alt=""/>
              <h3>Sign into your account</h3>
              <p className="label">Email address</p>
              <input name="id" className="form-control" type="text" placeholder="you@example.com" />
              <p className="label left">Password</p>
              <input name="password" className="form-control" type="password" placeholder="Enter 6 characters or more" />
              <button type="submit" className="send">Sign in</button>
            </form>
          </div>
        </div>
        <div className="col-lg-6 box-about" style={{ backgroundImage: "url('./images/background-1.jpg')" }}>
        </div>
      </div>
    </Login>
  );
}
