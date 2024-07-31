import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import News from './News';
import Contact from './Contact';
import Navigation from './Navigation';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Footer from './Footer';


function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Navigation/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About Us/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/contact' element={<Contact/>}/>

         </Routes>
         <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;


