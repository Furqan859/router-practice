import React from 'react';
import {Link} from 'react-router-dom';
import './NavStyles/Login.css';

const Signup = () => {
  return (

<div className="login">    
    <form id="login">    
    <label><b>First Name    
        </b>    
        </label>    
        <input type="text" name="Uname" id="Uname" placeholder="Username"/>    
        <br/><br/> 
        <label><b>Last Name   
        </b>    
        </label>    
        <input type="text" name="Uname" id="Uname" placeholder="Username"/>    
        <br/><br/> 
        <label><b>Enter Email    
        </b>    
        </label>    
        <input type="text" name="Uname" id="Uname" placeholder="Username"/>    
        <br/><br/> 
           
        <label><b>Password     
        </b>    
        </label>    
        <input type="Password" name="Pass" id="Pass" placeholder="Password"/>    
        <br/><br/>    
        <button ><Link to="login" className="btn-login" style={{marginRight:"40px"}}>Login</Link></button> 
        <button><Link to='/' className="btn-login" style={{marginLeft:"40px"}}>Back</Link></button>      
        <br/><br/>    
        <input type="checkbox" id="check"/>    
        <span>Remember me</span>    
          
    </form>  
    
</div>

   
    
  )
}

export default Signup;