
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import ScrollAnimation from './pages/ScrollAnimation';
import Animation1 from './pages/Animation1';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ScrollAnimation" element={<ScrollAnimation/>} />
        <Route path="/Animation1" element={<Animation1/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
