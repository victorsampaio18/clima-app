"use client"

interface FooterProps {
  backgroundColor: string
}

export default function Footer({ backgroundColor }: FooterProps) {
  return (
    <footer className="px-4 py-6 transition-colors duration-700" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} Clima App. Developed by Victor Sampaio de Almeida <br />
        Powered by OpenWeatherMap API.</p>
      </div>
    </footer>
  )
}