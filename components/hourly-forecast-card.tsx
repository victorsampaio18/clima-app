"use client"

interface HourlyForecastCardProps {
  forecastData: any
  backgroundColor: string
}

export default function HourlyForecastCard({ forecastData, backgroundColor }: HourlyForecastCardProps) {
  if (!forecastData || !forecastData.list) return null

  // Apresenta 8 períodos (24 horas, horário exibido de 3 em 3 horas)
  const hourlyData = forecastData.list.slice(0, 8)

  return (
    <div
      className="rounded-xl shadow-xl border-2 border-white p-6 backdrop-blur-sm transition-colors duration-700"
      style={{ backgroundColor }}
    >
      <h3 className="text-white text-xl font-bold mb-6"
      style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>Previsão por Hora</h3>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {hourlyData.map((item: any, index: number) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })

          return (
            <div key={index} className="flex items-center justify-between">

              {/* Hora */}
              <span
                className="text-white/90 text-sm w-16"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
              >
                {time}
              </span>

              {/* Descrição */}
              <span
                className="text-white text-sm capitalize flex-1 px-4"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
              >
                {item.weather[0].description}
              </span>

              {/* Ícone */}
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="weather icon"
                className="w-8 h-8 mx-3"
              />

              {/* Temperatura */}
              <span
                className="text-white text-lg font-semibold"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
              >
                {Math.round(item.main.temp)}°C
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}