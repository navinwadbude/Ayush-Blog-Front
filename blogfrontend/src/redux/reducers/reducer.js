import { signup,login } from "../action";

const initialState = {
    username:"",
    email:"",
    password:"",
    cpassword:""

};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return state;
    case "LOGIN":
      return state;

    default:
      return state;
  }
};

export default user