"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

interface NavbarProps {
  onSearch: (cityObj: { name: string; state?: string; country: string }) => void
  backgroundColor: string
}

export default function Navbar({ onSearch, backgroundColor }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Buscar cidades reais usando OpenWeather Geocoding API
  const fetchCitySuggestions = async (query: string) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
      if (!apiKey) {
        console.error("API Key not found. Check your .env.local")
        return
      }

      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
      )

      const data = await response.json()

      // Mapeia os dados recebidos para simplificar
      const formatted = data.map((city: any) => ({
        name: city.name,
        state: city.state,
        country: city.country,
      }))

      setSuggestions(formatted)
      setShowSuggestions(true)
    } catch (error) {
      console.error("Erro ao buscar cidades:", error)
    }
  }

  
  useEffect(() => {
    if (searchQuery.length > 1) {
      fetchCitySuggestions(searchQuery)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchQuery])

  const handleSearch = (cityObj: { name: string; state?: string; country: string }) => {
    onSearch(cityObj)
    setSearchQuery("")
    setShowSuggestions(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      handleSearch({
        name: searchQuery,
        state: "",
        country: "",
      })
    }
  }

  return (
    <nav className="px-4 py-6 transition-colors duration-700" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <Image src="/logo.png" alt="Weather Logo" width={40} height={40} />
          </div>
          <h1 className="text-white text-2xl font-bold hidden sm:block"
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.2)"}}>Clima App</h1>
        </div>

        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar cidade..."
              className="w-full px-4 py-2.5 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </form>

          {/* Lista de sugestões */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden z-50 max-h-60 overflow-y-auto">
              {suggestions.map((city, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(city)}
                  className="w-full px-4 py-2.5 text-left hover:bg-gray-100 transition-colors text-gray-800"
                >
                  {city.name}
                  {city.state ? `, ${city.state}` : ""}
                  {" - "}
                  {new Intl.DisplayNames(["pt-BR"], { type: "region" }).of(city.country)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}