
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./conpents/Home/Home";
import Login from "./conpents/Login/Login";
import SingUp from "./conpents/SingUp/SingUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/singup" element={<SingUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
