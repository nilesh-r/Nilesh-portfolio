import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Home = ({ theme }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-white' : theme === 'superman' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Hi, I'm{' '}
            <span className={`bg-clip-text text-transparent ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'
                : theme === 'marvel'
                ? 'bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                : theme === 'superman'
                ? 'bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                : 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]'
            }`}>
              Nilesh Kumar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xl md:text-2xl mb-4 font-medium ${
              theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-400' : 'text-purple-600'
            }`}
          >
            Software Engineer, Web Developer & Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : theme === 'marvel' ? 'text-white' : theme === 'superman' ? 'text-gray-300' : 'text-gray-600'
              }`}
          >
            Building scalable, secure, and intelligent enterprise systems. Hands-on experience in full-stack development,
            REST APIs, AI integrations, and modern frameworks (React.js, Spring Boot, FastAPI, Next.js).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/projects"
              className={`px-8 py-3 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white border border-white/30 hover:shadow-2xl hover:shadow-white/30 hover:from-white/30 hover:via-gray-200/30 hover:to-white/30'
                  : theme === 'marvel'
                  ? 'bg-gradient-to-r from-red-600/40 via-red-500/40 to-red-600/40 text-yellow-400 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:from-red-600/60 hover:via-red-500/60 hover:to-red-600/60'
                  : theme === 'superman'
                  ? 'bg-gradient-to-r from-blue-600/40 via-blue-500/40 to-blue-600/40 text-yellow-400 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:from-blue-600/60 hover:via-blue-500/60 hover:to-blue-600/60'
                  : 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-white border border-transparent shadow hover:shadow-xl'
              }`}
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className={`px-8 py-3 rounded-full font-semibold border-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-white/40 text-white bg-black/20 hover:bg-white/10 hover:border-white/60 hover:shadow-lg hover:shadow-white/20'
                  : theme === 'marvel'
                  ? 'border-yellow-500/50 text-yellow-400 bg-red-900/30 hover:bg-red-900/60 hover:border-yellow-400/80 hover:shadow-lg hover:shadow-red-500/20'
                  : theme === 'superman'
                  ? 'border-red-500/50 text-red-500 bg-blue-900/30 hover:bg-blue-900/60 hover:border-red-500/80 hover:shadow-lg hover:shadow-blue-500/20'
                  : 'border-purple-600 text-purple-600 bg-white/50 hover:bg-purple-50 hover:shadow-lg'
              }`}
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block"
            >
              <FiArrowDown
                size={32}
                className={`${theme === 'dark' ? 'text-gray-400' : theme === 'marvel' ? 'text-yellow-500' : theme === 'superman' ? 'text-red-500' : 'text-purple-500'}`}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home

