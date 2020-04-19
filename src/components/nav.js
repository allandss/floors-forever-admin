import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/modules/auth/actions';

import iconLogout from '../assets/icons/logout.svg';

export default function Nav() {
  const dispatch = useDispatch();
  function logout(){
    dispatch(signOut());
  }

  return(
  <ul className="navbar-nav mr-auto nav-logged">
      <li className="nav-item" onClick={logout}><img src={iconLogout} alt="" /> <h2> Logout</h2></li>
  </ul>
  );
};