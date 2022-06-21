//@ts-nocheck
import React, { useState } from "react";

import Button from "components/Button";
import Input from "components/Input";
import httpRequest from "utility/axiosClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";
// import { format } from 'path';

const Add = () => {



  const [children, setChildren] = useState('Add')
  const [requestPath, setRequestPath] = useState("/");

  const [inputField, setInputField] = useState({
	  title : '',
	  description: ''
  })
  const [inputError, setInputError] = useState({
  title : '',
	  description: ''	
  })

  let navigate = useNavigate();

  const handleInputChange = (e) => {
	setInputField({
		...inputField,
		[e.target.name]:e.target.value
	})

  };
 const addForm = (e) => {
   httpRequest
     .post("/posts", inputField)
     .then((response) => {
       console.log(response);
      
      toast(response.data.message, { position: toast.POSITION.TOP_RIGHT });
       
       if (response.data.status) {
       
         navigate("/");
       }
     })
     .catch((error) => {
       const { errors, message } = error.response.data;

       if (errors.length > 0) {
         const inputErr = {};
         errors.map((error) => {
           inputErr[error.param] = error.msg;
           console.log(errors);
         });
         console.log(inputErr);

         setInputError(inputErr);
       }
       alert(message);
     });

   e.preventDefault();
 };

  return (
    <div>
      <form>
        <div>
          <label>Title</label>
          <Input
            type="text"
            name="title"
            handleInputChange={handleInputChange}
          />
        </div>
        <div>
          <label>Title</label>
          <Input
            type="text"
            name="description"
            handleInputChange={handleInputChange}
          />
        </div>
        <div>
          <Button requestPath={requestPath} disable={false} onClick={addForm}>
            <button>{children}</button>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Add;
