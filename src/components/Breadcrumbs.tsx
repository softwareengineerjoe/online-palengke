import { Link, useParams } from 'react-router-dom'
import { palengkes } from '../constants/palengkes';

export default function Breadcrumbs() {
  const { cityName, marketId } = useParams<{ cityName?: string; marketId?: string }>()

  const market = marketId ? palengkes.find(m => m.id === Number(marketId)) : undefined

  return (
    <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="list-reset flex space-x-2">
        <li>
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
        </li>
        {cityName && (
          <>
            <li>/</li>
            <li>
              <Link to={`/city/${cityName}`} className="hover:text-gray-700 capitalize">
                {cityName}
              </Link>
            </li>
          </>
        )}
        {market && (
          <>
            <li>/</li>
            <li>
              <Link to={`/city/${cityName}/market/${market.id}`} className="hover:text-gray-700">
                {market.name}
              </Link>
            </li>
          </>
        )}
      </ol>
    </nav>
  )
}
