//@ts-nocheck
import { useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import "./Login.scss";
import httpRequest from "utility/axiosClient";
import { Link, useNavigate } from "react-router-dom";
import { access } from "fs";
import { toast } from "react-toastify";

const Login = () => {
  const [children, setChildren] = useState("Login");
  const [requestPath, setRequestPath] = useState("/");
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });


  const [inputError, setInputError] = useState({
    name: " ",
    email: " ",
    password: " ",
    confirmPassword: " ",
  });
 
 

  let navigate = useNavigate();
  const handleInputChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };
  
  const loginForm = (e) => {
    httpRequest
      .post("/login", inputFields)
      .then((response) => {
        console.log(response);
        // alert(response.data.message);             
 
    toast(response.data.message, { position: toast.POSITION.TOP_RIGHT });
        if (response.data.status) {
	window.localStorage.setItem('access_token', response.data.data.access_token)
          navigate("/");
        }
      })
      .catch((error) => {
        const { errors , message } = error.response.data;
	
        if (errors.length > 0) {
          const inputErr = {};
          errors.map((error) => {
            inputErr[error.param] = error.msg;
            console.log(errors);
          });
          console.log(inputErr);
	  alert(inputErr);
          setInputError(inputErr);
        }
	alert(message);
	
      });
      
    e.preventDefault();
  };
  
  return (
    <div className="login-holder form-holder">
      <form className="form-layout">
        <div className="login-input">
          <label>UserName</label>
          <Input
            placeholder="enter your email address"
            type="email"
            name="email"
            handleInputChange={handleInputChange}
          />
          <span>{inputError?.email}</span>
        </div>
        <div className="login-input">
          <label>Enter Your Password</label>
          <Input
            name="password"
            placeholder="password"
            type="password"
            handleInputChange={handleInputChange}
          />
          <span>{inputError?.password}</span>
        </div>
        <Button requestPath={requestPath} disable={false} onClick={loginForm}>
          <button>{children}</button>
        </Button>
        <p>
          {" "}
          Need an Account ?
          <Link to="/signup">
            {" "}
            <span>SignUp</span>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
