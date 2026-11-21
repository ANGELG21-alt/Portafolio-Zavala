import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre_mi" element={<Sobre_Mi />} />
        <Route path="/Programacion" element={<Programacion />} />
        <Route path="/Tanatopraxia" element={<Tanatopraxia />} />
        <Route path="/Artistica" element={<Artistica />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
