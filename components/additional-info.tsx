"use client"

import HourlyForecastCard from "./hourly-forecast-card"
import DailyForecastCard from "./daily-forecast-card"

interface AdditionalInfoProps {
  weatherData: any
  forecastData: any
  backgroundColor: string
}

export default function AdditionalInfo({ weatherData, forecastData, backgroundColor }: AdditionalInfoProps) {
  if (!weatherData) return null

  return (
    <section className="px-4 py-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Três cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card informando a umidade */}
          <div
            className="rounded-xl shadow-xl border-2 border-white p-6 backdrop-blur-sm transition-colors duration-700"
            style={{ backgroundColor }}
          >
            <p className="text-white/80 text-sm uppercase tracking-wide mb-2"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>Umidade</p>
            <p className="text-white text-4xl font-bold"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>{weatherData.main.humidity}%</p>
          </div>

          {/* Card informando a sensação térmica */}
          <div
            className="rounded-xl shadow-xl border-2 border-white p-6 backdrop-blur-sm transition-colors duration-700"
            style={{ backgroundColor }}
          >
            <p className="text-white/80 text-sm uppercase tracking-wide mb-2"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>Sensação Térmica</p>
            <p className="text-white text-4xl font-bold"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>{Math.round(weatherData.main.feels_like)}°C</p>
          </div>

          {/* Card informando a velocidade do vento */}
          <div
            className="rounded-xl shadow-xl border-2 border-white p-6 backdrop-blur-sm transition-colors duration-700"
            style={{ backgroundColor }}
          >
            <p className="text-white/80 text-sm uppercase tracking-wide mb-2"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>Velocidade do Vento</p>
            <p className="text-white text-4xl font-bold"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>{Math.round(weatherData.wind.speed * 3.6)} km/h</p>
          </div>
        </div>

        {/* Parte com dois cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HourlyForecastCard forecastData={forecastData} backgroundColor={backgroundColor} />
          <DailyForecastCard forecastData={forecastData} backgroundColor={backgroundColor} />
        </div>
      </div>
    </section>
  )
}