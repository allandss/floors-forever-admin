import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Subheader } from '../../styles';
import { ProductList } from '../../styles';
import api from '../../services/api';
import { readCollectionRequest } from '../../store/modules/collections/actions';
import serverFile from '../../services/serverFile';

export default function Collections() {
  const dispatch = useDispatch();
  const [collections, setCollections] = useState([]);
  useEffect(()=> {
    async function loadCollections(){
      const response = await api.get('serie');
      const data = response.data.series;
      setCollections(data);
    }
    loadCollections();
  }, []);

  function selectCollection(id){
    dispatch(readCollectionRequest(id));
  }
  
  return (
    <>
    <Header />
    <Subheader>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>
              Collections
              <span />
            </h3>
          </div>
          <div className="col-6">
            <a href="/new-collection">
              <button type="button">New collection</button>
            </a>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Collection List</h2>
        <ProductList>
          <div className="row">
            {console.log(collections)}
          { collections.map(collection => (
            <div className="col-md-3">
              <div className="product" onClick={() => selectCollection(collection._id)}>
                <img src={serverFile+collection.image} alt="" className="thumb" /> 
                <div className="content">
                  <h3>{collection.name}</h3>
                  <p className="description">{collection.description}</p>
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
