import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Van from './pages/Van'
import VanDetail from './pages/VanDetail'
import './server'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/van">Van</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/van" element={<Van />} />
        <Route path="/van/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
