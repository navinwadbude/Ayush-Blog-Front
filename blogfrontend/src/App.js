import "./App.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Private from "./routes/Private";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Not_match from "./pages/Not_match";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<Private />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Not_match />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
