import React from 'react';
import Login from 'Container/Login';
import SignUp from 'Container/SignUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from 'Container/HomePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Add from 'Container/Add';
import Edit from 'Container/Edit';
const Index=()=>{


	return(
		<div>
			<ToastContainer />
			<BrowserRouter>
				<Routes>

					<Route path='/' element={<HomePage/>}/>
					<Route path = '/login' element ={<Login/>}/>
					<Route path ='/signup'  element ={<SignUp/>}/>
					<Route path='/add' element={<Add/>}/>
					<Route path ='/edit/:_id' element ={<Edit/>}/>
				</Routes>
			</BrowserRouter>

		</div>
	)
}
export default Index;