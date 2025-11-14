import { useEffect, useState } from 'react'

const CursorLight = ({ theme }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-32 h-32 rounded-full blur-3xl bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20"
        style={{
          boxShadow: `0 0 60px 30px rgba(255, 255, 255, 0.15), 0 0 100px 50px rgba(200, 200, 255, 0.1)`,
        }}
      />
    </div>
  )
}

export default CursorLight

