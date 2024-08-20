import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import News from './News';
import SignIn from './Signin';
import Register from './Register';
import Fileupload from './Fileupload';
import Showimg from './Showimg';
import './Home.css'
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/news" element={<News />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/fileupload" element={<Fileupload />} />
      <Route path="/showimg" element={<Showimg />} />
    </Routes>
  );
}

export default App;
