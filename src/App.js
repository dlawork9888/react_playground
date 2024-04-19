
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Scroll from './pages/Scroll'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Scroll" element={<Scroll/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
