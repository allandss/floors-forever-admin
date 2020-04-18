import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Subheader } from '../../styles';
import { ProductList } from '../../styles';

export default function products() {
  return (
    <>
    <Header />
    <Subheader>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>
              Products
              <span />
            </h3>
          </div>
          <div className="col-6">
            <a href="/job/new">
              <button type="button">New product</button>
            </a>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Product List</h2>
        <ProductList>
          <div className="row">
            <div className="col-md-12">
              <div className="product">
                <img src="/images/product-300x300.jpg" alt="" className="thumb" />
                <div className="content">
                  <h3>High-Quality Interior Vinyl Flooring</h3>
                  <p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
              </div>
            </div>
          </div>
        </ProductList>
      </div>
    </div>
    <Footer/>
    </>
  );
}
