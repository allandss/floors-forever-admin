import React from 'react';
import Nav from './nav';
import { Header } from '../styles';
import Logo from '../assets/images/logo-clean.png';

export default function header() {
  return (
    <Header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/">
            <img src={Logo} alt="Logo" className="logo" />
          </a>          
          <div className="navbar-collapse">
            <Nav />
          </div>
        </nav>
      </div>
    </Header>
  );
}