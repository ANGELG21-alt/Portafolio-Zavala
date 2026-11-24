import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre_mi from "./pages/Sobre_mi";
import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre_mi" element={<Sobre_mi />} />
       {/*  
       <Route path="/Programacion" element={<Programacion />} />
        <Route path="/Tanatopraxia" element={<Tanatopraxia />} />
        <Route path="/Artistica" element={<Artistica />} /> 
        */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
