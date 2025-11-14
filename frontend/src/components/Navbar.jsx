import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 ${
        theme === 'dark' ? 'glass-dark' : 'glass-light'
      } shadow-lg`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            Nilesh Kumar
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-white font-semibold'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
                  />
                )}
              </Link>
            ))}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-black/30 text-yellow-400 border border-yellow-400/30'
                  : 'bg-white/30 text-gray-800 border border-gray-800/30'
              }`}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-black/30 text-yellow-400 border border-yellow-400/30'
                  : 'bg-white/30 text-gray-800 border border-gray-800/30'
              }`}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg backdrop-blur-sm ${
                theme === 'dark'
                  ? 'text-white bg-black/30 border border-white/20'
                  : 'text-gray-800 bg-white/30 border border-gray-800/20'
              }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all backdrop-blur-sm ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white border border-white/30 shadow-lg'
                    : theme === 'dark'
                    ? 'glass-dark text-gray-300 hover:bg-black/40 hover:text-white'
                    : 'glass-light text-gray-300 hover:bg-black/40 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar

