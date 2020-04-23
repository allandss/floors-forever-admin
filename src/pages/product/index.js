import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Subheader } from '../../styles';
import { AddProduct } from '../../styles';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import ImagePreview from '../../components/imagePreview';

import { createProductRequest } from '../../store/modules/products/actions';

export default function Product() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  function handleSubmit({name, description, image}){
    dispatch(createProductRequest(name, description, image))
    console.log(name, description, image)
  }
  return (
    <>
    <Header />
    <Subheader>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h3>Products <span><b>/</b> Add new</span></h3>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Create new product</h2>
        <AddProduct>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <Form onSubmit={handleSubmit}>
                <p className="label">Name</p>
                <Input name="name" className="form-control" type="text" />
                <p className="label">Description</p>
                <Input name="description" className="form-control" type="text" multiline="true" />
                <p className="label">Image <span>(Click image to add)</span></p>
                <ImagePreview name="image" />
                <button type="submit" className="send">Add new product</button>
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
