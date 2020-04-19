import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Subheader } from '../../styles';
import { ProductList } from '../../styles';
import api from '../../services/api';
import { readProductRequest } from '../../store/modules/products/actions';

export default function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    async function loadProducts(){
      const response = await api.get('products');
      const data = response.data.products;
      setProducts(data);
    }
    loadProducts();
  }, []);

  function selectProduct(id){
    dispatch(readProductRequest(id));
  }
  
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
            <a href="/new-product">
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
            {console.log(products)}
          { products.map(product => (
            <div className="col-md-12">
              <div className="product" onClick={() => selectProduct(product._id)}>
                <img src="" alt="" className="thumb" /> 
                <div className="content">
                  <h3>{product.name}</h3>
                  <p className="description">{product.description}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </ProductList>
      </div>
    </div>
    <Footer/>
    </>
  );
}
