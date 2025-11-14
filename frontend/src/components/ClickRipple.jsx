import { useState, useEffect } from 'react'

const ClickRipple = () => {
  const [ripples, setRipples] = useState([])

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setRipples((prev) => [...prev, newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 1000)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="w-6 h-6 rounded-full bg-gradient-to-r from-white via-gray-200 to-white animate-ripple"
            style={{
              boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.8), 0 0 0 0 rgba(200, 200, 255, 0.6)',
            }}
          />
        </div>
      ))}
    </>
  )
}

export default ClickRipple

