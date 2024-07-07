import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'


function Register() {

  const handleSubmit = (e)=>{
      e.preventDefault()
      alert("Form")
  }
  const handleChange = (e)=>{
      console.log(e.target)
  }
  return (
    <div><FormContainer>
      <form onSubmit={handleSubmit}>
        <div className='brand' onChange={(e)=>handleChange(e)}>
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
      </FormContainer></div>
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