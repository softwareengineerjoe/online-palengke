import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import CityPage from './pages/CityPage'
import MarketPage from './pages/MarketPage'
import Home from './pages/Home'
import PriceIndexPage from './pages/PriceIndexPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="city/:cityName" element={<CityPage />}>
              <Route path="market/:marketId" element={<MarketPage />} />
            </Route>
            <Route path="/price-index" element={<PriceIndexPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer className="bg-white shadow-inner py-4">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} OnlinePalengke. All rights reserved.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
