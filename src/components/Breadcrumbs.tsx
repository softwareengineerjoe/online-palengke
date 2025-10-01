import { Link, useParams } from 'react-router-dom'
import { palengkes } from '../constants/palengkes'

export default function Breadcrumbs() {
  const { cityName, marketId, categoryName } = useParams<{
    cityName?: string
    marketId?: string
    categoryName?: string
  }>()

  const market = marketId
    ? palengkes.find((m) => m.id === Number(marketId))
    : undefined

  // Capitalize helper
  const capitalizeWords = (str: string) =>
    str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

  return (
    <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="list-reset flex space-x-2 items-center flex-wrap">
        <li>
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
        </li>

        {cityName && (
          <>
            <li>/</li>
            <li>
              <Link
                to={`/city/${cityName}`}
                className="hover:text-gray-700 capitalize"
              >
                {cityName}
              </Link>
            </li>
          </>
        )}

        {market && (
          <>
            <li>/</li>
            <li>
              <Link
                to={`/city/${cityName}/market/${market.id}`}
                className="hover:text-gray-700"
              >
                {market.name}
              </Link>
            </li>
          </>
        )}

        {categoryName && (
          <>
            <li>/</li>
            <li>
              <Link
                to={`/category/${categoryName}`}
                className="hover:text-gray-700"
              >
                {capitalizeWords(decodeURIComponent(categoryName))}
              </Link>
            </li>
          </>
        )}
      </ol>
    </nav>
  )
}
