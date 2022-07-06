import "./App.css"

import Signup from './components/Signup';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
   
    
    <Routes>
      <Route path="/signup" element={ <Signup/>} />
      <Route path="/login" element={ <Login/>} />
      
    </Routes>
    </>
  );
}

export default App;
