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

import { updateCategoryRequest } from '../../store/modules/category/actions';

export default function CategoryDetails() {
  const dispatch = useDispatch();
  const { categorySelected } = store.getState().category;
  function handleSubmit(data){
    dispatch(updateCategoryRequest(data));
  } 

  function deleteCategory(){
    api.delete(`/categories/${categorySelected._id}`).then(function (response) {
      toast.success('Successfully deleted');
      history.push('/categories');
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
          <h3>Category <span><b>/</b> Edit</span></h3>
          </div>
          <div className="col-6">
            <button type="button" className="delete" onClick={deleteCategory}>Delete</button>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Edit category</h2>
        <AddProduct>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <Form onSubmit={handleSubmit} initialData={categorySelected}>
                <Input name="_id" className="form-control" type="hidden" />
                <p className="label">Name</p>
                <Input name="name" className="form-control" type="text" />
                <p className="label">Description</p>
                <Input name="description" className="form-control" type="text" multiline="true" />
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
