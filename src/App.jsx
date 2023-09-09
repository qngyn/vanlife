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
import HostVan from './pages/Host/HostVan'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import Error from './pages/Error'
import './server'
import HostVanDetail from './pages/Host/HostVanDetail'

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
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVan />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />}/>
              <Route path="photos" element={<HostVanPhotos />}/> 
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
