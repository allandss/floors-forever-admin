import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Subheader } from '../../styles';
import { AddProduct } from '../../styles';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import ImagePreview from '../../components/imagePreview';
import Select from 'react-select';
import api from '../../services/api';
import { store } from '../../store';
import history from '../../services/history';
import { toast } from 'react-toastify';

import { updateCollectionRequest } from '../../store/modules/collections/actions';

export default function Collection() {
  const { collectionSelected } = store.getState().collection;
  console.log(collectionSelected)
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(()=> {
    async function loadCategories(){
      let data = [];
      const response = await api.get('categories');
      const categorySelected = await api.get(`categories/${collectionSelected.category}`);
      data = response.data.categories.map(item => {
        return { value: item._id, label: item.name }
      });
      setCategories(data);
      setSelectedOption({value: categorySelected.data.category._id, label: categorySelected.data.category.name });
    }
    loadCategories();

  }, []);

  function handleSubmit(data){
    console.log(data)
    if(data && selectedOption.value){
      console.log(data, selectedOption.value)
      dispatch(updateCollectionRequest(data, selectedOption.value));
    }else{
      alert('Preencha todos os campos para continuar');
    }
  }

  function handleChange(selectedOption){
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  function deleteCollection(){
    api.delete(`/serie/${collectionSelected._id}`).then(function (response) {
      toast.success('Successfully deleted');
      history.push('/collections');
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
          <h3>Collection <span><b>/</b> Edit</span></h3>
          </div>
          <div className="col-6">
            <button type="button" className="delete" onClick={deleteCollection}>Delete</button>
          </div>
        </div>
      </div>
    </Subheader>
    <div className="main">
      <div className="container">
        <h2>Edit collection</h2>
        <AddProduct>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <Form onSubmit={handleSubmit} initialData={collectionSelected}>
                <Input name="_id" className="form-control" type="hidden" />
                <p className="label">Name</p>
                <Input name="name" className="form-control" type="text" />
                <p className="label">Description</p>
                <Input name="description" className="form-control" type="text" multiline="true" />
                <p className="label">Category</p>
                <Select options={categories} value={selectedOption} onChange={handleChange} />
                <p className="label mgT10">Image <span>(Click image to add)</span></p>
                <ImagePreview name="image" />
                
                <button type="submit" className="send mgT30">Save</button>
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
