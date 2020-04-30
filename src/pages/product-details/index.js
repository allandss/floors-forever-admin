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
import FileBase64 from 'react-file-base64';

import { store } from '../../store';

import { updateProductRequest } from '../../store/modules/products/actions';

export default function ProductDetails() {
  const { productSelected } = store.getState().products;
  console.log(productSelected);
  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [files, setFiles] = useState([productSelected.colors]);
  const [subs, setSubs] = useState(false);
  const dispatch = useDispatch();
  
  function handleSubmit(data){
    let images;
    if(data, selectedOption.value){
      if(subs){
        images = files.map(item =>{
          return { color: item.base64 }
        })
        console.log(images);
      }else{
        images = files;
      }
      
      dispatch(updateProductRequest(data, selectedOption.value, images));
      console.log(data, selectedOption.value, images);
    }else{
      alert('Preencha todos os campos para continuar');
    }
    
  }

  useEffect(()=> {
    async function loadCategories(){
      let data = [];
      const response = await api.get('categories');
      const categorySeleted = await api.get(`categories/${productSelected.category}`);
      data = response.data.categories.map(item => {
        return { value: item._id, label: item.name }
      });
      setCategories(data);
      setSelectedOption({value: categorySeleted.data.category._id, label: categorySeleted.data.category.name });
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

  function getFiles(files){
    setSubs(true);
    setFiles(files);
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
                <p className="label mgT10">Image <span>(Click image to add)</span></p>
                <ImagePreview name="image" />
                <p className="label">Name</p>
                <Input name="name" className="form-control" type="text" />
                <p className="label">Description</p>
                <Input name="description" className="form-control" type="text" multiline="true" />
                <p className="label">Category</p>
                <Select options={categories} value={selectedOption} onChange={handleChange} />
                <p className="label label-colors">Colors</p>
                <div className="thumbs">
                {productSelected.colors.map(item => (
                    <img src={item.color} class="thumb-color"></img>
                ))}
                </div>
                
                <FileBase64
                  multiple={true}
                  onDone={getFiles.bind(getFiles) } />
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
