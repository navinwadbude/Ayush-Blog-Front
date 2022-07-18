import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom"



function Private(props) {
    const navigate=useNavigate()
    const a=props.Component
  useEffect(()=>{
    if(localStorage.getItem("accessToken")){
        navigate("/")
    }
  })

  return (
    <div>

     
    </div>
  )
}

export default Private
