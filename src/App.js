import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/Nav';
import {Down} from './Components/Down'
import { Expert } from './Components/Expert';
import { Topstories } from './Components/Topstories';
import { Advertisement } from './Components/Advertisement';
import { Trends } from './Components/Trends';
import { Contributors } from './Components/Contributors';
import { Feedback } from './Components/Feedback';
import { Living } from './Components/Living';
import { Footer } from './Components/Footer';
import { Footer1 } from './Components/Footer1';
import { Footer2 } from './Components/Footer2';
import { Helthaz } from './Components/Helthaz';
import { Home } from './Components/Home';
import { BrowserRouter } from 'react-router-dom';
import {  Routes,Route } from "react-router-dom";
import { DRUGSSUPPLIESMENT } from './Components/DRUGS & SUPPLIESMENT';
import { LIVINGHELTHY } from './Components/LIVING HELTHY';
import { FAMILY } from './Components/FAMILY & PREGNENCY';
import { NEWS } from './Components/NEWS & EXPERTS';

function App() {
  return (
    <>
    
    

    
<Nav/>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/az' element={<Helthaz/>}></Route>
    <Route path='/drugs' element={<DRUGSSUPPLIESMENT/>}></Route>
    <Route path='/living' element={<LIVINGHELTHY/>}></Route>
    <Route path='/family' element={<FAMILY/>}></Route>
    <Route path='/news' element={<NEWS/>}></Route>
    <Route path='/home' element={<Home/>}></Route>

    </Routes>   

    
    
    
      </>

       
  )
}

export default App;
