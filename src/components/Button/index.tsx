

//@ts-nocheck
import React, { Children } from "react";
import './Button.scss';
import { ButtonInterface  } from "Modolas/interface";
import { Link } from "react-router-dom";


const Button =({children, requestPath,  ...props }:ButtonInterface) =>{

	 let className = 'Button';

return(
	<div className="btn-holder">
	  <section className="Button-Wrapper">
            <Link to={requestPath} className ={className}  {...props} >
                {children} 
            </Link>
        </section>
	</div>
)
}

export default Button;