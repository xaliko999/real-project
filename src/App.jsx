import {Route, Routes } from "react-router-dom";
import Home from './component/Home'
import Navbar from './component/Navbar'
import './App.css'
import Service from './component/Service'
import About from './component/About'
import Money from './component/Money'
import Map from './component/Map'
import FooterComp from "./component/footer";

function App() {

  return (
<div className="megaBox">
   <div className='bigBox'>
  <Navbar/><br /><br /><br />
  <Home/>
  </div>
  <Service/><br /><br />
  <Money/><br /><br />
  <About/><br /><br />  

<Map/>
<FooterComp/>




  <Routes>
    <Route path='/more' element={<Home/>}></Route>
  </Routes>


 
 </div>

  )
}

export default App

