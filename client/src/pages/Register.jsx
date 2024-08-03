import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { registerRoute } from '../utils/apiRoutes';


function Register() {
  const [formValues, setFormValues] = useState({ username: "", email: "", password: "", confirmpassword: "" })

  const ToastOptions = {
    position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,}

  const handleValidation = () => {
    const { username, email, password, confirmpassword } = formValues
    if (password !== confirmpassword) {
      toast("Password and Confirm Password is Not Same ❌.",
        ToastOptions
      )
      return false
    }else if(username.length<3){
      toast("User name Should be Greater than 3 Chars ❌.",
        ToastOptions
      )
      return false
    }else if(password.length<8){
      toast("Password Should be Greater than 8 Chars ❌.",
        ToastOptions
      )
      return false
    }else if(!email.includes("@")){
      toast("Please Enter Valid Email ❌.",
        ToastOptions
      )
      return false
  }  
  return true
}
  const handleSubmit =async (e) => {
    e.preventDefault()
    if(handleValidation()){
      const {username, email, password, confirmpassword} = formValues
      const response = await axios.post(registerRoute, {username, email, password, confirmpassword})
      toast(response.data.message,
        ToastOptions
      )
    }
  }

  const handleChange = (e) => {
    console.log(e.target)
    setFormValues((prevState) => {
      return {
        ...formValues,
        [e.target.name]: e.target.value
      }
    })
  }
  console.log("formValues", formValues)
  return (
    <div>
      <FormContainer>
      <form onSubmit={handleSubmit}>
        <div className='brand' onChange={(e) => handleChange(e)}>
          <img src={Logo} alt="Logo" />
          <h1>Snappy</h1>
          <input type="text" placeholder='Username' name='username' />
          <input type="email" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <input type="password" placeholder='Confirmpassword' name='confirmpassword' />
          <button>Create User</button>
          <span>already have an account? <Link to='/login'>Login</Link></span>
        </div>
      </form>
    </FormContainer>
    <ToastContainer/>
    </div>
    
  )
}

const FormContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
background-color:#131324;
.brand {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:1rem;
  img{
    height:5rem
  }
  h1{
    color:white;
    text-transform:uppercase;
    letter-spacing:1px;
  }
}
form{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:1rem;
  border-radius:2rem;
  padding:3rem 5rem;
  background-color:#00000076;
  input{
    background-color:transparent;
    padding :1rem;
    border:0.1rem solid #4e0eff;
    border-radius:0.5rem;
    width:100%;
    color:white;
    font-size:1rem;
    &:focus{
      border:0.1rem solid #997af0;
      outline:none;
    }
  }
  button{
    background-color:#997af0;
    color:white;
    padding:1rem 2rem;
    border:none;
    border-radius:0.4rem;
    cursor:pointer;
    font-size:1rem;
    text-transform:uppercase;
    transition:all 0.3s ease;
    &:hover{
      background-color:#4e0eff;
    }
  }
  span{
    color:white;
    text-transform:uppercase;
    letter-spacing:1px;
    font-size:0.8rem;
    a{
      color:#997af0;
      text-decoration:none;
      font-weight:bold;
      &:hover{
        text-decoration:underline;
      }
  }
}
`

export default Register