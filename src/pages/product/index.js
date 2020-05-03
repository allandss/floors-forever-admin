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


import { createProductRequest } from '../../store/modules/products/actions';

export default function Product() {
  const dispatch = useDispatch();
  const [collection, setCollection] = useState([]);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(()=> {
    async function loadCollections(){
      let data = [];
      const response = await api.get('serie');
      data = response.data.series.map(item => {
        return { value: item._id, label: item.name }
      });
      console.log(data);
      setCollection(data);
    }
    loadCollections();

  }, []);

  function handleSubmit({name, description, image, warranty}){
    if(name && description && image && selectedOption.value){
      dispatch(createProductRequest(name, description, selectedOption.value, image, warranty));
      console.log(name, description, selectedOption.value, image, warranty)
    }else{
      console.log(name, description, selectedOption.value, image, warranty)
      alert('Preencha todos os campos para continuar');
    }
    
  }

  function handleChange(selectedOption){
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };


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
                <p className="label">Collection</p>
                <Select options={collection} value={selectedOption} onChange={handleChange} />
                <p className="label mgT10">Warranty</p>
                <Input name="warranty" className="form-control" type="text" />
                <p className="label mgT10">Image <span>(Click image to add)</span></p>
                <ImagePreview name="image" />
                <button type="submit" className="send mgT30">Add new product</button>
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
