//@ts-nocheck
import React, { useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import { Link } from "react-router-dom";
import httpRequest from "utility/axiosClient";
import './SignUp.scss';
import axios from "axios";
import { toast } from "react-toastify";

const Sign = () => {
  const [children, setChildren] = useState("SignUp");

  const [requestPath, setRequestPath] = useState("/login");

  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
const [inputError,setInputError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
});

  const handleInputChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    httpRequest.post("/register", inputFields)
      .then((response) => {
        console.log(response);
        
      toast(response.data.message, { position: toast.POSITION.TOP_RIGHT });
      })
      .catch((error) => {
	console.log('<<<<',error)

	console.log('____',error.response.data.errors)
  
	const{errors} = error.response.data;
	if (errors.length > 0){
		const inputErr ={};
		errors.map(error=>{
			inputErr[error.param] = error.msg;
			console.log(errors)
		});
    console.log(inputErr);
		setInputError(inputErr);
	}
      });
    e.preventDefault();
  };



  return (


    <div className="form-holder">
      <form className="form-layout">



        <div className="input-div">
        <label>UserName</label>	
       
        <Input
          placeholder="Enter Your Name"
          type="text"
          name="name"
          handleInputChange={handleInputChange}
        />
        <span>{inputError?.name}</span>
      </div >
      
        <div  className="input-div"> 
        <label>Email</label>
        <Input
          placeholder="Enter Email Address"
          name="email"
          handleInputChange={handleInputChange}
          type="email"
        />
        <span>{inputError?.email}</span>
        </div>
          <div  className="input-div">
        <label>Password</label>
        <Input
          placeholder="Password"
          type="password"
          name="password"
          handleInputChange={handleInputChange}
        />
        <span>{inputError?.password}</span>
        </div>
<div  className="input-div">
        <label>Confirm password</label>
        <Input
          placeholder="Password"
          type="password"
          name="confirmPassword"
          handleInputChange={handleInputChange}
        />
        <span>{inputError?.confirmPassword}</span>
</div>

        <Button requestPath={requestPath} disable={false} onClick={submitForm}>
          <button>{children}</button>
        </Button>


       <p> Already have an account ?<Link to="/login"> <span>Login</span></Link></p>
      </form>
    </div>
  );
};
export default Sign;
