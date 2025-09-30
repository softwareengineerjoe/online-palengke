// src/pages/CityPage.tsx
import { useParams, Link, Outlet } from 'react-router-dom'
import { palengkes } from '../constants/palengkes'
import Breadcrumbs from '../components/Breadcrumbs'

export default function CityPage() {
  const { cityName } = useParams<{ cityName: string }>()
  if (!cityName) return <p>Invalid city</p>
  const cityLower = cityName.toLowerCase()

  const markets = palengkes.filter(
    (m) => m.location.toLowerCase() === cityLower
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Breadcrumbs />
      <h1 className="text-3xl font-bold text-gray-800 mb-6 capitalize">{cityName}</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {markets.map((m) => (
          <Link
            key={m.id}
            to={`market/${m.id}`}
            className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:scale-[1.02]"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-700 group-hover:text-blue-600 transition">
                {m.name}
              </h2>
              <p className="mt-2 text-gray-500">
                {m.stores.length} stores
              </p>
            </div>
          </Link>
        ))}
        {markets.length === 0 && (
          <p className="text-gray-500">No markets in this city.</p>
        )}
      </div>

      <Outlet />
    </div>
  )
}
