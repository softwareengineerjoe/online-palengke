import { useSearchParams } from 'react-router-dom'

export default function LocationFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = searchParams.get('location') ?? ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value) {
      setSearchParams({ location: value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
      <label htmlFor="location" className="text-sm font-medium text-gray-700">
        Filter by location:
      </label>
      <input
        id="location"
        type="text"
        value={location}
        onChange={handleChange}
        placeholder="e.g. Cebu"
        className="mt-1 sm:mt-0 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
      />
    </div>
  )
}
