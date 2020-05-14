import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Subheader } from '../../styles';
import { AddProduct } from '../../styles';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import api from '../../services/api';
import history from '../../services/history';
import { toast } from 'react-toastify';
import ImagePreview from '../../components/imagePreview';

import { store } from '../../store';

import { updatePhotoRequest } from '../../store/modules/photo/actions';

export default function PhotoDetails() {
  const dispatch = useDispatch();
  const { photoSelected } = store.getState().photo;
  function handleSubmit(data){
    dispatch(updatePhotoRequest(data));
  } 

  function deletePhoto(){
    api.delete(`/photo/${photoSelected._id}`).then(function (response) {
      toast.success('Successfully deleted');
      history.push('/photos');
      console.log(response);
    })
    .catch(function (error) {
      toast.success('Request error');
    })
  }

  return (
    <>
    <Header />
    <Subheader>
      <div className="container">
        <div className="row">
          <div className="col-6">
          <h3>Photo <span><b>/</b> Edit</span></h3>
          </div>
          <div className="col-6">
            <button type="button" className="delete" onClick={deletePhoto}>Delete</button>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Edit photo</h2>
        <AddProduct>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <Form onSubmit={handleSubmit} initialData={photoSelected}>
                <Input name="_id" className="form-control" type="hidden" />
                <p className="label">Name</p>
                <Input name="name" className="form-control" type="text" />
                <p className="label">Image <span>(Click image to change)</span></p>
                <ImagePreview name="image" />
                <button type="submit" className="send">Save</button>
              </Form>
            </div>
          </div>
        </div>
        </AddProduct>
      </div>
    </div>
    <Footer/>
    </>
  );
}
