import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/modules/auth/actions';
import { NavLink } from "react-router-dom";

import iconLogout from '../assets/icons/logout.svg';
import iconProducts from '../assets/icons/buildings.svg';
import iconCategories from '../assets/icons/categories.svg';
import iconCollections from '../assets/icons/interface.svg';
import iconPhoto from '../assets/icons/photo.svg';

export default function Nav() {
  const dispatch = useDispatch();
  function logout(){
    dispatch(signOut());
  }

  return(
  <ul className="navbar-nav mr-auto nav-logged">
    <li className="nav-item"><NavLink to="/categories" activeClassName="active"><img src={iconCollections} alt="" /><h2> Categories</h2></NavLink></li>
    <li className="nav-item"><NavLink to="/collections" activeClassName="active"><img src={iconCategories} alt="" /><h2> Collections</h2></NavLink></li>
    <li className="nav-item"><NavLink to="/products" activeClassName="active"><img src={iconProducts} alt="" /><h2> Products</h2></NavLink></li>
    <li className="nav-item"><NavLink to="/photos" activeClassName="active"><img src={iconPhoto} alt="" /><h2> Photos</h2></NavLink></li>
    <li className="nav-item" onClick={logout}><img src={iconLogout} alt="" /> <h2> Logout</h2></li>
  </ul>
  );
};