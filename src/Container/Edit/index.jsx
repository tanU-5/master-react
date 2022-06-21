//@ts-nocheck
import React, { useState ,useEffect} from "react";

import Button from "components/Button";
import Input from "components/Input";
import httpRequest from "utility/axiosClient";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import axiosClient from "utility/axiosClient";
// import { Link, useNavigate } from "react-router-dom";
// import { format } from 'path';

const Edit = () => {
  const [children, setChildren] = useState("Edit");
  const [requestPath, setRequestPath] = useState("/");

  const [inputField, setInputField] = useState({
    title: "",
    description: "",
  });
  const [inputError, setInputError] = useState({
    title: "",
    description: "",
  });

const {_id} = useParams()

console.log(_id)


	const getPosts = () => {
    axiosClient
      .get(`/posts/${_id}`)
      .then((response) => {
        console.log(response);
        setInputField(response.data.data);
      
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);


const editBtn = () => {
  axiosClient
    .put(`/posts/${_id}`,inputField)
    .then((response) => {
      console.log(response);
      
    toast(response.data.message, { position: toast.POSITION.TOP_RIGHT });
      getPosts();
    })
    .catch((err) => {
      console.log(err);
    });
};


let navigate = useNavigate();

const handleInputChange =(e)=>{
  setInputField({
    ...inputField,
    [e.target.name]:e.target.value
  })
  
}
console.log(inputField)
  
  return (
    <div>
      <form>
        <div>
          <label>Title</label>
          <Input
            type="text"
            name="title"
            value={inputField.title}
            handleInputChange={handleInputChange}
          />
        </div>
        <div>
          <label>Title</label>
          <Input
            type="text"
            name="description"
            value={inputField.description}
            handleInputChange={handleInputChange}
          />
        </div>
        <div>
          <Button
            requestPath={requestPath}
            disable={false}
            onClick={editBtn}
          >
            <button>{children}</button>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Edit;
