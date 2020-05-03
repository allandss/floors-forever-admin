import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Subheader } from '../../styles';
import { ProductList } from '../../styles';
import api from '../../services/api';
import { readCategoryRequest } from '../../store/modules/category/actions';
import serverFile from '../../services/serverFile';

export default function Categories() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(()=> {
    async function loadCategories(){
      const response = await api.get('categories');
      const data = response.data.categories;
      setCategories(data);
    }
    loadCategories();
  }, []);

  function selectCategory(id){
    dispatch(readCategoryRequest(id));
  }
  
  return (
    <>
    <Header />
    <Subheader>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>
              Category
              <span />
            </h3>
          </div>
          <div className="col-6">
            <a href="/new-category">
              <button type="button">New category</button>
            </a>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Category List</h2>
        <ProductList>
          <div className="row">
            {console.log(categories)}
          { categories.map(category => (
            <div className="col-md-12">
              <div className="product" onClick={() => selectCategory(category._id)}>
                <img src={serverFile+category.image} alt="" className="thumb" /> 
                <div className="content">
                  <h3>{category.name}</h3>
                  <p className="description">{category.description}</p>
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
