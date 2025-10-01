  import { Link } from 'react-router-dom'
  import { palengkes } from '../constants/palengkes'

  export default function Home() {
    const cities = Array.from(new Set(palengkes.map((m) => m.location)))
    const allCategories = Array.from(
      new Set(
        palengkes.flatMap((market) =>
          market.stores
            .filter((store) => store.category)
            .map((store) => store.category!.trim())
        )
      )
    )
    

    return (
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* Browse by City */}
        <section>
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Browse by City</h1>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/city/${encodeURIComponent(city.toLowerCase())}`}
                className="block bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-medium text-gray-700 capitalize">{city}</h2>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by Category */}
        <section>
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Browse by Category</h1>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allCategories.map((category) => (
              <Link
                key={category}
                to={`/category/${encodeURIComponent(category.toLowerCase())}`}
                className="block bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-medium text-gray-700 capitalize">{category}</h2>
              </Link>
            ))}
          </div>
        </section>
      </main>
    )
  }
