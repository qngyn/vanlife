import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Van from './pages/Vans/Van'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import HostLayout from './components/HostLayout'
import './server'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/van" element={<Van />} />
          <Route path="/van/:id" element={<VanDetail />} />
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
