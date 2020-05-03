import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { Preview } from '../styles';
import imgDefault from '../assets/images/img-default.png';
import api from '../services/api';
import serverFile from '../services/serverFile';

export default function ImagePreview() {
  const { defaultValue, registerField } = useField('image');
  const [preview, setPreview] = useState(serverFile+defaultValue);
  const [file, setFile] = useState(defaultValue);
  const ref = useRef();

  useEffect(()=>{
    if(ref.current){
      registerField({
        name: 'image',
        ref: ref.current,
        path: 'dataset.file'
      })
    }
  }, [ref, registerField]);

  async function handlerFile(e){
    e.preventDefault();
    
    const config = { headers: 'Content-Type: multipart/form-data' };
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('/file', data);

    const { _id, path } = response.data;

    setFile(path);
    setPreview(serverFile + path);
    console.log(preview)
  }

  return(
  <Preview>
    <label htmlFor="image">
      <img src={!preview ? imgDefault : preview == serverFile+undefined ? imgDefault : preview } alt="" />
      <input type="file" 
      id="image"
      name="image" 
      accept="image/*"
      data-file={file}
      ref={ref}
      onChange={(e) => {handlerFile(e)}} />
    </label>
  </Preview>
  );
}