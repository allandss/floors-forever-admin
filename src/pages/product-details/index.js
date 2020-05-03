import React, { useState, useEffect } from 'react';
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
import Select from 'react-select';

import { store } from '../../store';

import { updateProductRequest } from '../../store/modules/products/actions';

export default function ProductDetails() {
  const { productSelected } = store.getState().products;
  const [collections, setCollections] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const dispatch = useDispatch();
  
  function handleSubmit(data){
    if(data, selectedOption.value){      
      dispatch(updateProductRequest(data, selectedOption.value));
    }else{
      alert('Preencha todos os campos para continuar');
    }
    
  }

  useEffect(()=> {
    async function loadCategories(){
      let data = [];
      const response = await api.get('serie');
      const collectionSelected = await api.get(`serie/${productSelected.serie}`);
      data = response.data.series.map(item => {
        return { value: item._id, label: item.name }
      });
      
      setCollections(data);
      setSelectedOption({value: collectionSelected.data.serie._id, label: collectionSelected.data.serie.name });
    }
    loadCategories();
  }, []);

  function handleChange(selectedOption){
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

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
                <p className="label">Collection</p>
                <Select options={collections} value={selectedOption} onChange={handleChange} />
                <p className="label mgT10">Warranty</p>
                <Input name="warranty" className="form-control" type="text" />
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
