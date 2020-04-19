import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import backgroundHeader from './assets/images/background-1.png';

export const LoginPage = styled.div`
  background: #fff;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  .title {
    max-width: 800px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    color: #f8bf45;
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 20px;
  }

  .content {
    max-width: 900px;
    background: #f3f3f3;
    padding: 20px 40px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    margin-bottom: 50px;

    h5 {
      font-size: 19px;
      font-weight: 600;
      line-height: 60px;
      color: #353535;
    }
  }

  .box-about {
    min-height: 100vh;
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .box {
    padding: 80px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .box h3 {
    margin-top: 50px;
    margin-bottom: 40px;
    font-size: 24px;
    text-align: center;
  }

  .box h1 strong {
    color: #f8bf45;
  }

  .text-info{
    color: #000 !important;
    float: left;
    margin-top: 13px;
  }

  .left {
    float: left;
  }

  h5 {
    font-size: 15px;
  }

  h1 {
    font-size: 24px;
    font-weight: 800;
    text-align: center;
  }

  h5 span {
    color: #f8bf45;
    display: inline;
    font-size: 15px;
    cursor: pointer;
  }

  .forgot {
    float: right;
    font-size: 13px;
    span {
      color: #f8bf45;
    }
  }

  button.send {
    background: #f8bf45;
    color: #fff;
    border: 0px;
    border-radius: 3px;
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    cursor: pointer;
  }

  .label {
    margin-bottom: 5px;
    font-size: 15px;
  }

  .form-control {
    height: 50px;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 13px;
  }

  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #f8bf45;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.16);
  }

  button.back {
    background: #fff;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 25px;
    left: 30px;
    border-radius: 30px;
    border: 1px solid #ddd;
  }

  button.back img {
    width: 12px;
    height: 12px;
    float: left;
    margin-left: 5px;
  }

  .register form > span {
    display: block;
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 13px;
    color: #f00;
  }

  form .row .col-md-6 > span {
    display: block;
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 13px;
    color: #f00;
  }

  .sign-in {
    text-align: center;
    margin-top: 50px;
    width: 100%;
    float: left;
    margin-bottom: 30px;
  }

  .next {
    padding: 10px;
    min-width: 120px;
    border-radius: 4px;
    border: 2px solid #f8bf45;
    background: #f8bf45;
    color: #fff;
    font-weight: 600;
    float: right;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
  }

  .previous {
    padding: 10px;
    min-width: 120px;
    border-radius: 4px;
    background: #fff;
    color: #f8bf45;
    font-weight: 600;
    float: left;
    border: 2px solid #f8bf45;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
  }

  .role {
    margin-bottom: 35px;
    width: 280px;
    margin-left: auto;
    margin-right: auto;

    li {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      padding: 8px;
      width: 100px;
      border-radius: 30px;
      text-align: center;
      font-size: 14px;
      margin-right: 20px;
      cursor: pointer;
      color: #f8bf45;
      font-weight: 500;
      border: 2px solid #f8bf45;
    }
  }

  .type-radio {
    span {
      display: block;
      margin-top: 0px;
      margin-bottom: 8px;
      font-size: 13px;
      color: #f00;
    }
    label {
      padding: 0px 8px;
      margin-right: 10px;
    }
  }

  span {
    display: block;
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 13px;
    color: #f00;
  }

  .role .active {
    background: #f8bf45;
    color: #fff;
  }

  .step {
    display: none;
  }

  .step1 {
    display: block;
  }

  .register {
    .box h3 {
      span {
        color: #f8bf45;
        display: inline;
        font-size: 24px;
      }
    }
  }

  .logo {
    width: 230px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .radio {
    float: right;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 13px;
  }

  .label-radio {
    margin-bottom: 10px;
    margin-top: 12px;
  }

  .mgT15 {
    margin-top: 15px;
  }

  textarea {
    min-height: 80px;
  }

  span.error {
    font-size: 13px;
    display: block;
    margin-bottom: 4px;
    color: red;
    margin-top: -5px;
  }

  .alert-error {
    padding: 10px 30px;
    border-radius: 4px;
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    font-size: 13px;
  }

  @media (max-width: 992px) {
    .box {
      padding: 80px 20px;
    }

    .box-about {
      display: none;
    }

    h1 {
      text-align: center;
      margin-top: 15px;
    }
  }
`;

export const Footer = styled.footer`
  font-family: Lato;
  background: #47525e;
  color: #fff;
  padding-top: 0px;
  padding-bottom: 0px;
  background: #100f12;

  
  .copyright {
    height: 80px;
    border: 1px solid #212121;
    text-align: center;
  }

  .copyright p {
    font-size: 13px;
    margin-top: 30px;
  }
`;
export const Header = styled.header`
  font-family: Lato;
  height: 70px;
  line-height: 55px;
  position: absolute;
  width: 100%;
  z-index: 100;
  border: 1px solid rgba(193, 193, 193, 0.26);

  @media (max-width: 992px) {
    .container {
      max-width: 100%;
      padding: 0px;
    }

    .logo {
      margin-left: 30px;
    }

    .navbar-toggler {
      margin-right: 30px;
    }

    .navbar-collapse {
      background: rgba(10, 10, 10, 0.97);
      position: absolute;
      top: 69px;
      width: 100%;
      padding-bottom: 25px;
    }

    .register {
      line-height: 32px;
      height: 50px;
    }

    .active {
      color: #f8bf45;
    }

    .active:after {
      content: '';
      height: 0px;
    }

    nav ul li {
      border-bottom: 1px solid #000;
    }
  }


  p.logout {
    position: absolute;
    right: 0;
    color: #f8bf45;
    background: #fff;
    height: 40px;
    margin: 0px;
    line-height: 37px;
    border-radius: 30px;
    width: 100px;
    text-align: center;
    cursor: pointer;
  }

  .menu-left{
    width: 20px;
    margin-right: 20px;
  }

  .nav-logged{
    li{
      img{
        width: 22px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 8px;
      }
    }
    h2{
      font-size: 16px;
      margin-top: 4px;
    }

    .icon-search{
      max-width: 26px;
      display: block;
      margin-top: -2px;
      margin-left: 14px;
      cursor: pointer;
    }

    .search{
      position: absolute;
      right: 0px;
      top: 71px;
      border-radius: 3px;
      border: 1px solid #f8bf45;
      height: 45px;
      width: 230px;
      padding: 0px 12px;
    }
  }

  .logo {
    max-width: 140px;
    margin-top: 0px;
    cursor: pointer;
  }

  .bg-light {
    background-color: transparent !important;
    padding: 0;
  }

  .navbar-nav {
    margin-left: auto !important;
    margin-right: 0px !important;
  }

  .navbar {
    height: 68px;

    .user {
      img {
        width: 40px;
        border-radius: 20px;
        box-shadow: 3px 2px 7px 3px rgba(103, 103, 103, 0.09);
      }
    }

    .notification {
      .detail {
        position: absolute;
        background: #f8bf45;
        width: 20px;
        height: 20px;
        line-height: 17px;
        border-radius: 20px;
        margin-left: 48px;
        font-size: 12px;
        top: 12px;
        padding: 1px;
      }
      img {
        width: 24px;
      }
    }
  }

  .active:after {
    content: '';
    min-width: 40px;
    width: 100%;
    height: 4px;
    background: #f8bf45;
    display: block;
    margin-top: 6px;
    margin-left: auto;
    margin-right: auto;
  }

  .register .active:after {
    display: none;
  }

  .register {
    background: #f8bf45;
    padding: 7px 20px 12px 20px;
    line-height: 23px;
    border-radius: 60px;
    height: 40px;
    margin-top: 13px;
    opacity: 0.9;
  }

  nav ul li {
    display: inline-block;
    margin: 0px 15px;
    min-width: 40px;
    text-align: center;
    margin-top: 5px;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  .nav-item-black {
    color: black;
  }

  .navbar-light .navbar-toggler {
    background: rgba(15, 15, 18, 0.58);
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(233, 109, 58, 1.0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
`;

export const AddProduct = styled.div`
    .content{
      background: #fff;
      padding: 50px;
      border-radius: 3px;
      .form-control {
        height: 50px;
        margin-bottom: 10px;
        padding-left: 20px;
        font-size: 13px;
      }
      textarea {
        min-height: 80px;
      }
      .label {
        margin-bottom: 5px;
        font-size: 15px;
        span{
          font-size: 12px;
        }
      }
      button.send {
        background: #f8bf45;
        color: #fff;
        border: 0px;
        border-radius: 3px;
        width: 100%;
        height: 50px;
        margin-bottom: 30px;
        cursor: pointer;
      }
      .form-control-file{
        margin-bottom: 30px;
      }
    }
    
`;

export const Subheader = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backgroundHeader});

  h3 {
    color: #fff;
    span {
      font-size: 17px;
      color: #f8bf45;

      b {
        color: #fff;
      }
    }
  }

  button.delete {
    background: #F44336;
  } 
  
  button {
    background: #f8bf45;
    color: #fff;
    padding: 10px 20px;
    border: 0px;
    border-radius: 4px;
    font-size: 16px;
    float: right;
    margin-top: 2px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const ProductList = styled.div`
  padding-bottom: 40px;

  .product {
    position: relative;
    background: #fff;
    padding: 0px;
    margin: 10px 0;
    min-height: 120px;
    transition: 0.2s;
    cursor: pointer;
    box-shadow: 3px 2px 7px 3px rgba(103, 103, 103, 0.07);
    border-radius: 5px;

    .thumb{
      display: block;
      border-radius: 5px 0px 0px 5px;
      float: left;
      height: 120px;
    }

    .content{
      padding: 20px 40px 20px 20px;
      width: calc(100% - 120px);
      float: left;

      .description{
        color: #999;
      }
    }

    h3{
      font-size: 20px;
      margin-bottom: 4px;
      margin-top: 0px;
      color: #3c3c3c;
    }

    .where{
      font-size: 13px;
      color: #757575;
      margin-bottom: 5px;
      
      img{
        float: left;
        width: 18px;
        margin-right: 12px;
      }
    }
  }

  .product:hover {
    box-shadow: 3px 2px 7px 3px rgba(103, 103, 103, 0.2);
  }

`;

export const Preview = styled.div`
  align-self: center;
  margin-top: 30px;

  label{
    cursor: pointer;
    width: 100%;

    &:hover{
      opacity: 0.7;
    }

    img{
      height: 150px;
      width: 150px;
      border-radius: 5px;
      border: 3px solid rgba(255,255,255,0.3);
      background: #eee;
      margin: 0px auto 0px auto;
      display: block;
      margin-bottom: 20px;
      margin-top: -20px;
    }

    input{
      display: none;
    }

    p{
      text-align: center;
      text-transform: uppercase;
      font-size: 12px;
      color: #a2a2a2;
      margin: 8px 0px 0px 0px;
    }

  }

}`;