import { useSearchParams } from 'react-router-dom'
import LocationFilter from '../components/LocationFilter'
import { palengkes } from '../constants/palengkes'

export default function LandingPage() {
  const [searchParams] = useSearchParams()
  const locationFilter = searchParams.get('location')?.toLowerCase() ?? ''

  const filteredListings = palengkes.filter((item) =>
    item.location.toLowerCase().includes(locationFilter)
  )

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Directory Listings</h1>
      
      <LocationFilter />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredListings.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-4 border border-gray-100">
            <h2 className="text-xl font-medium text-gray-700">{item.name}</h2>
            <p className="text-gray-500">{item.location}</p>
          </div>
        ))}
        {filteredListings.length === 0 && (
          <p className="text-gray-500 col-span-full">No listings found for that location.</p>
        )}
      </div>
    </main>
  )
}
