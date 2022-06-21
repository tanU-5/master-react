
//@ts-nocheck
import React from 'react';
import { InputInterface } from 'Modolas/interface';
import './Input.scss';
const Input = ({label, placeholder, type, value, handleInputChange, required ,name}) =>{

	return(
		<div className='Input-holder'>
			<input 
			label= 'UserName'
			 type={type}
			 placeholder={placeholder}
			 className='Input-Field'
			 value={value}
			 name={name}
			 onChange={handleInputChange}
			 required={required}
			 />
		</div>
	);

}
export default Input;