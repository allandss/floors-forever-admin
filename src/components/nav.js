import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/modules/auth/actions';
import { NavLink } from "react-router-dom";

import iconLogout from '../assets/icons/logout.svg';
import iconProducts from '../assets/icons/buildings.svg';
import iconCategories from '../assets/icons/interface.svg';


export default function Nav() {
  const dispatch = useDispatch();
  function logout(){
    dispatch(signOut());
  }

  return(
  <ul className="navbar-nav mr-auto nav-logged">
    <li className="nav-item"><NavLink to="/products" activeClassName="active"><img src={iconProducts} alt="" /><h2> Products</h2></NavLink></li>
    <li className="nav-item"><NavLink to="/categories" activeClassName="active"><img src={iconCategories} alt="" /><h2> Categories</h2></NavLink></li>
    <li className="nav-item" onClick={logout}><img src={iconLogout} alt="" /> <h2> Logout</h2></li>
  </ul>
  );
};