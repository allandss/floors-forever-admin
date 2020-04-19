import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { Preview } from '../styles';
import imgDefault from '../assets/images/img-default.png';

export default function ImagePreview() {
  const { defaultValue, registerField } = useField('image');
  const [preview, setPreview] = useState(defaultValue);
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

  return(
  <Preview>
    <label htmlFor="image">
      <img src={preview ? preview : imgDefault} alt="" />
      <input type="file" 
      id="image"
      name="image" 
      accept="image/*"
      data-file={file}
      ref={ref}
      onChange={(e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        
        if(reader && file){
          reader.onloadend = () => {
            setFile(file);
            setPreview(reader.result);
            setFile(reader.result);
          }
          reader.readAsDataURL(file);
        }
      }} />
    </label>
  </Preview>
  );
}