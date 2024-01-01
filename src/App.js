// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import {BrowserRouter as Router, Routes, Routes} from 'react-router-dom'
import Home from './views/components/Home';
import About from './views/components/About';
import Contact from './views/components/Contact';
import Products from './views/components/Products';
import Header from './views/base/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css'
import Electronics from './views/components/pages/Electronics';
import SideMenue from './views/components/sidemenue/SideMenue';
import Signup from './views/base/Signup';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/electronics' element={<Electronics/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
