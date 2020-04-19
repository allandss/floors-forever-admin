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

import { store } from '../../store';

import { updateProductRequest } from '../../store/modules/products/actions';

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { productSelected } = store.getState().products;
  function handleSubmit(data){
    dispatch(updateProductRequest(data));
  } 

  function deleteProduct(){
    api.delete(`/products/${productSelected._id}`).then(function (response) {
      toast.success('Successfully deleted');
      history.push('/products');
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
          <h3>Products <span><b>/</b> Edit</span></h3>
          </div>
          <div className="col-6">
            <button type="button" className="delete" onClick={deleteProduct}>Delete</button>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Edit product</h2>
        <AddProduct>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <Form onSubmit={handleSubmit} initialData={productSelected}>
                <Input name="_id" className="form-control" type="hidden" />
                <p className="label">Name</p>
                <Input name="name" className="form-control" type="text" />
                <p className="label">Description</p>
                <Input name="description" className="form-control" type="text" multiline="true" />
                <p className="label">Image</p>
                <Input name="imagem" className="form-control-file" type="file" />
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
