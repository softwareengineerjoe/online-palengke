import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

//pages
const Home = lazy(() => import("./pages/Home"));
const CityPage = lazy(() => import("./pages/CityPage"));
const MarketPage = lazy(() => import("./pages/MarketPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const PriceIndexPage = lazy(() => import("./pages/PriceIndexPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow bg-gray-50">
          <Suspense
            fallback={
              <div className="text-center py-10 text-gray-500">Loading...</div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="city/:cityName" element={<CityPage />} />
              <Route
                path="city/:cityName/market/:marketId"
                element={<MarketPage />}
              />
              <Route
                path="/category/:categoryName"
                element={<CategoryPage />}
              />
              <Route path="/price-index" element={<PriceIndexPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <footer className="bg-white shadow-inner py-4">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} OnlinePalengke. All rights reserved.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
