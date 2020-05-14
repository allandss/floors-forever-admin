import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Subheader } from '../../styles';
import { AddProduct } from '../../styles';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import ImagePreview from '../../components/imagePreview';

import { createPhotoRequest } from '../../store/modules/photo/actions';

export default function Photo() {
  const dispatch = useDispatch();

  function handleSubmit({name, image}){
    dispatch(createPhotoRequest(name, image))
  }
  return (
    <>
    <Header />
    <Subheader>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h3>Photo <span><b>/</b> Add new</span></h3>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Create new photo</h2>
        <AddProduct>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <Form onSubmit={handleSubmit}>
                <p className="label">Name</p>
                <Input name="name" className="form-control" type="text" />
                <p className="label mgT10">Image <span>(Click image to add)</span></p>
                <ImagePreview name="image" />
                <button type="submit" className="send">Add new photo</button>
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
