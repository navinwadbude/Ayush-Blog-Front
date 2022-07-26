import React from 'react'
const initialState={}
const apiReducer = (state=initialState,action) => {
    const {type,payload}=action
    switch (type) {
        case "API_CALLING":
           return {...payload.data}
    
         case "LOGIN" :
            return {...payload.token} 
        default:
           return initialState;
    }
 
}

export {apiReducer}
