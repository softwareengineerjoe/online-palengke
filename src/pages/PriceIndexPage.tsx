import { useState, useEffect } from 'react'

interface PriceData {
  name: string
  todayPrice: number
  yesterdayPrice: number
  lastWeekPrice: number
}

const mockData: PriceData[] = [
  { name: 'Tomato', todayPrice: 55, yesterdayPrice: 52, lastWeekPrice: 50 },
  { name: 'Onion', todayPrice: 45, yesterdayPrice: 46, lastWeekPrice: 48 },
  { name: 'Potato', todayPrice: 60, yesterdayPrice: 58, lastWeekPrice: 57 },
]

export default function PriceIndexPage() {
  const [data, setData] = useState<PriceData[]>([])

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData(mockData)
    }, 500)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Produce Retail Price Index</h1>

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {data.map(({ name, todayPrice, yesterdayPrice, lastWeekPrice }) => {
            const changeDay = todayPrice - yesterdayPrice
            const changeWeek = todayPrice - lastWeekPrice

            return (
              <div key={name} className="bg-white p-6 rounded shadow">
                <h2 className="text-lg font-bold mb-2">{name}</h2>
                <p>Today: ₱{todayPrice.toFixed(2)}</p>
                <p>Yesterday: ₱{yesterdayPrice.toFixed(2)}</p>
                <p>Last Week: ₱{lastWeekPrice.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Change (1 day):{' '}
                  <span className={changeDay >= 0 ? 'text-red-600' : 'text-green-600'}>
                    {changeDay >= 0 ? '+' : ''}
                    {changeDay.toFixed(2)}
                  </span>
                  {' | '}
                  Change (1 week):{' '}
                  <span className={changeWeek >= 0 ? 'text-red-600' : 'text-green-600'}>
                    {changeWeek >= 0 ? '+' : ''}
                    {changeWeek.toFixed(2)}
                  </span>
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
