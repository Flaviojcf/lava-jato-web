import Login from "./pages/Login/Login";
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Login/>}/>
            <Route path= "/Register" element={<Register/>}/> 
          </Routes>
          <Footer/>
        </BrowserRouter>
  )
}

export default App;
