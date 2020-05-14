import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Subheader } from '../../styles';
import { ProductList } from '../../styles';
import api from '../../services/api';
import { readPhotoRequest } from '../../store/modules/photo/actions';
import serverFile from '../../services/serverFile';

export default function Photos() {
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([]);
  useEffect(()=> {
    async function loadPhotos(){
      const response = await api.get('photo');
      const data = response.data.photos;
      setPhotos(data);
    }
    loadPhotos();
  }, []);

  function selectPhoto(id){
    dispatch(readPhotoRequest(id));
  }
  
  return (
    <>
    <Header />
    <Subheader>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>
              Photos
              <span />
            </h3>
          </div>
          <div className="col-6">
            <a href="/new-photo">
              <button type="button">New photo</button>
            </a>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Photo List</h2>
        <ProductList>
          <div className="row">
            {console.log(photos)}
          { photos.map(photo => (
            <div className="col-md-3">
              <div className="product" onClick={() => selectPhoto(photo._id)}>
                <img src={serverFile+photo.image} alt="" className="thumb" /> 
                <div className="content">
                  <h3>{photo.name}</h3>
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
