import React from 'react';
import iconLogout from '../assets/icons/logout.svg';

export default function nav() {
  return(
  <ul className="navbar-nav mr-auto nav-logged">
      <li className="nav-item"><img src={iconLogout} alt="" /> <h2> Logout</h2></li>
  </ul>
  );
};