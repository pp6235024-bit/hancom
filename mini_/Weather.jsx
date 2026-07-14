import { useState, useEffect } from 'react'

// 도시별 위도/경도

const CITIES = {
  서울: { lat: 37.5665, lon: 126.9780 },
  부산: { lat: 35.1796, lon: 129.0756 },
  대구: { lat: 35.8714, lon: 128.6014 },
  제주: { lat: 33.4996, lon: 126.5312 },
}

const Weather = () => {
  const [city, setCity] = useState('서울')
  const [temp, setTemp] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const { lat, lon } = CITIES[city]
    setIsLoading(true)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.current_weather.temperature)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('기온 로딩 실패:', error)
        setIsLoading(false)
      })
  }, [city])

  return (
    <div className="card">
      <h2>🌟날씨</h2>
      <div className="weather-main">
        <div className="temp">
          {isLoading ? '…' : (temp !== null ? temp + '°C' : '?')}
        </div>
         </div>
      
      <div className="weather-sub">{city} 기온</div>
      <div className="city-row">
        {Object.keys(CITIES).map((c) => (
          <button
            key={c}
            className={c === city ? 'on' : ''}
            onClick={() => setCity(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Weather