import {BrowserRouter, Routes, Route} from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";

import './App.css';


function App() {



  return (
  <BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />}/>
  </Routes>
  </BrowserRouter> )
}

export default App
