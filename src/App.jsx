import Login from "./pages/Login/Login";
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import Register from "./pages/Register/Register";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Login/>}/>
            <Route path= "/Register" element={<Register/>}/> 
          </Routes>
        </BrowserRouter>
  )
}

export default App;
