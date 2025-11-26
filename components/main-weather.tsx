"use client"

interface MainWeatherProps {
  weatherData: any
  location: {
    name: string
    state?: string
    country: string
  }
}

export default function MainWeather({ weatherData, location }: MainWeatherProps) {
  if (!weatherData || !location) return null

  const lastUpdated = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })

  // Converter código do país em nome completo
  const countryName = new Intl.DisplayNames(["pt-BR"], { type: "region" }).of(location.country)

  return (
    <section className="px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Lado esquerdo */}
          <div className="space-y-2">
            {/* Nome da cidade */}
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
              {location.name}
            </h2>

            {/* Nome do Estado */}
            <p className="text-white/80 text-xl md:text-2xl"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
              {location.state ? `${location.state}, ` : ""}
              {countryName}
            </p>

            {/* Nome do País */}
            <p className="text-white/60 text-sm md:text-base"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
              Última atualização: {lastUpdated}
            </p>
          </div>

          {/* Lado Direito */}
          <div className="text-left md:text-right space-y-2">

            <div className="flex items-center gap-3 md:justify-end">
              {/* Ícone */}
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
                className="w-12 h-12"
              />

              {/* Descrição do tempo */}
              <p
                className="text-white text-2xl md:text-3xl font-semibold capitalize"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
              >
                {weatherData.weather[0].description}
              </p>
            </div>

            {/* Temperatura */}
            <p
              className="text-white text-7xl md:text-8xl lg:text-9xl font-bold"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
            >
              {Math.round(weatherData.main.temp)}°C
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}