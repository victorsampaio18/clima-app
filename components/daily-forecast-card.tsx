"use client"

interface DailyForecastCardProps {
  forecastData: any
  backgroundColor: string
}

export default function DailyForecastCard({ forecastData, backgroundColor }: DailyForecastCardProps) {
  if (!forecastData || !forecastData.list) return null

  const dailyData: any[] = []
  const seenDates = new Set()

  forecastData.list.forEach((item: any) => {
    const date = new Date(item.dt * 1000)
    const dateStr = date.toLocaleDateString("pt-BR")

    if (!seenDates.has(dateStr) && date.getHours() >= 12) {
      seenDates.add(dateStr)
      dailyData.push(item)
    }
  })

  // Estabelece o limite de 5 dias
  const limitedDailyData = dailyData.slice(0, 5)

  return (
    <div
      className="rounded-xl shadow-xl border-2 border-white p-6 backdrop-blur-sm transition-colors duration-700"
      style={{ backgroundColor }}
    >
      <h3 className="text-white text-xl font-bold mb-6"
      style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>Previsão dos Próximos Dias</h3>

      <div className="space-y-4">
        {limitedDailyData.map((item: any, index: number) => {
          const date = new Date(item.dt * 1000)
          const dayName = date.toLocaleDateString("pt-BR", { weekday: "long" })
          const dateStr = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })

          return (
            <div key={index} className="flex items-center justify-between">
              {/* Informação dia e data */}
              <div className="flex-1">
                <p className="text-white font-semibold capitalize"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>{dayName}</p>
                <p className="text-white/70 text-sm"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>{dateStr}</p>
              </div>

              <div className="flex flex-col items-center flex-1 text-center">
                {/* Ícone */}
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="weather icon"
                  className="w-10 h-10"
                />
                {/* Descrição */}
                <span
                  className="text-white text-sm capitalize mt-1"
                  style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
                >
                  {item.weather[0].description}
                </span>
              </div>

              {/* Temperaturas Máxima e Mínima */}
              <div className="flex items-center gap-3">
                <span className="text-white text-lg font-semibold"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>
                  {Math.round(item.main.temp_max)}°C
                </span>

                <span className="text-white/60 text-lg"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>
                  {Math.round(item.main.temp_min)}°C
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}