import React,{useState} from 'react'
import { Link } from "react-router-dom";

const Login = () => {
    const [username,setUserName]=useState({
       username:"",
       password:"" 
    })
    const handlChanges=(e)=>{
        const {name,value}=e.target
        console.log(name,value)
        setUserName({
            ...username,
            [name]:value
        })
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("datZ",e.target.name);
        if(!username.username){
          alert('Enter your  username')
        }else if(!username.password){
            alert('Emter your password')
          }
    }
  return (
    <div>
    <div className="login">
    <span className="loginTitle">Login page</span>
    <form className="loginForm"   onSubmit={handleSubmit}  >
      <label>Username</label>
      <input
        type="text"
        className="loginInput"
        placeholder="Enter your username..." name='username'
        value={username.username} onChange={handlChanges} 
      />
      <label>Password</label>
      <input
        type="password"
        className="loginInput"
        placeholder="Enter your password..." name='password'
        value={username.password} onChange={handlChanges} 
      />
      <button className="loginButton" type="submit" >
        Login
      </button>
  
    </form>
    <Link to={"/signup"} className="registerLoginButton">
   Signup
  </Link>
    </div>
    </div>
  )
}

export default Login
