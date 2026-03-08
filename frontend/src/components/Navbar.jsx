import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun, FiZap, FiShield } from 'react-icons/fi'

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
        theme === 'dark' ? 'glass-dark' : theme === 'marvel' ? 'glass-marvel' : theme === 'superman' ? 'glass-superman' : 'glass-light'
      } shadow-lg`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold bg-clip-text text-transparent ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                : theme === 'marvel'
                ? 'bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                : theme === 'superman'
                ? 'bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                : 'bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 drop-shadow-sm'
            }`}
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
                    ? (theme === 'dark' ? 'text-white font-semibold' : theme === 'marvel' ? 'text-yellow-400 font-semibold' : theme === 'superman' ? 'text-yellow-400 font-semibold' : 'text-purple-700 font-semibold')
                    : (theme === 'dark' ? 'text-gray-300 hover:text-white' : theme === 'marvel' ? 'text-gray-300 hover:text-yellow-400' : theme === 'superman' ? 'text-gray-300 hover:text-red-400' : 'text-gray-600 hover:text-purple-600')
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-transparent via-white to-transparent'
                        : theme === 'marvel'
                        ? 'bg-gradient-to-r from-transparent via-yellow-400 to-transparent'
                        : theme === 'superman'
                        ? 'bg-gradient-to-r from-transparent via-red-500 to-transparent'
                        : 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'
                    }`}
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
                  : theme === 'marvel'
                  ? 'bg-red-900/50 text-yellow-500 border border-red-500/50 hover:bg-red-900/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                  : theme === 'superman'
                  ? 'bg-blue-900/50 text-red-500 border border-blue-500/50 hover:bg-blue-900/80 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                  : 'bg-purple-100 text-purple-700 border border-purple-300 hover:bg-purple-200'
              }`}
            >
              {theme === 'dark' ? <FiSun size={20} /> : theme === 'marvel' ? <FiZap size={20} /> : theme === 'superman' ? <FiShield size={20} /> : <FiMoon size={20} />}
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
                  : theme === 'marvel'
                  ? 'bg-red-900/50 text-yellow-500 border border-red-500/50 hover:bg-red-900/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                  : theme === 'superman'
                  ? 'bg-blue-900/50 text-red-500 border border-blue-500/50 hover:bg-blue-900/80 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                  : 'bg-purple-100 text-purple-700 border border-purple-300 hover:bg-purple-200'
              }`}
            >
              {theme === 'dark' ? <FiSun size={20} /> : theme === 'marvel' ? <FiZap size={20} /> : theme === 'superman' ? <FiShield size={20} /> : <FiMoon size={20} />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg backdrop-blur-sm ${
                theme === 'dark'
                  ? 'text-white bg-black/30 border border-white/20'
                  : theme === 'marvel'
                  ? 'text-yellow-400 bg-red-900/30 border border-red-500/50 hover:bg-red-900/60'
                  : theme === 'superman'
                  ? 'text-red-500 bg-blue-900/30 border border-blue-500/50 hover:bg-blue-900/60'
                  : 'text-purple-700 bg-white/50 border border-gray-300 hover:bg-purple-50'
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
                    ? (theme === 'dark'
                        ? 'bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white border border-white/30 shadow-lg'
                        : theme === 'marvel'
                        ? 'bg-gradient-to-r from-red-600/40 via-red-500/40 to-red-600/40 text-yellow-400 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                        : theme === 'superman'
                        ? 'bg-gradient-to-r from-blue-600/40 via-blue-500/40 to-blue-600/40 text-yellow-400 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                        : 'bg-purple-100 text-purple-700 border border-purple-200 font-semibold')
                    : theme === 'dark'
                    ? 'glass-dark text-gray-300 hover:bg-black/40 hover:text-white'
                    : theme === 'marvel'
                    ? 'glass-marvel text-gray-300 hover:bg-red-900/40 hover:text-yellow-400'
                    : theme === 'superman'
                    ? 'glass-superman text-gray-300 hover:bg-blue-900/40 hover:text-yellow-400'
                    : 'bg-white border text-gray-700 hover:bg-gray-50 hover:text-purple-700'
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

