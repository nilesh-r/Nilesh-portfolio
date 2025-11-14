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
              theme === 'dark' ? 'text-white' : 'text-white'
            }`}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Nilesh Kumar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xl md:text-2xl mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-100'
            }`}
          >
            Software Engineer, Web Developer & Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-200'
            }`}
          >
            Detail-oriented Web Developer with hands-on experience in full-stack development,
            REST API integration, and building scalable, responsive web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-white/30 border border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:from-white/30 hover:via-gray-200/30 hover:to-white/30"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-semibold border-2 border-white/40 text-white bg-black/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:shadow-lg hover:shadow-white/20"
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
                className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-200'}`}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home

