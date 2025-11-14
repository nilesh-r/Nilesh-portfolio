import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = ({ theme }) => {
  return (
    <footer className={`py-8 ${
      theme === 'dark' ? 'glass-dark' : 'glass-light'
    } border-t ${
      theme === 'dark' ? 'border-white/10' : 'border-white/30'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`text-sm mb-4 md:mb-0 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            © 2025 Nilesh Kumar. All rights reserved.
          </motion.p>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:nileshsahu8674@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              <FiMail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

