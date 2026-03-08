import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

const Resume = ({ theme }) => {
  const handleDownload = () => {
    // Create a link to download the resume PDF
    // In production, this would point to your actual resume file
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Place your resume.pdf in the public folder
    link.download = 'Nilesh_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-500' : theme === 'superman' ? 'text-red-500' : 'text-gray-900'
            }`}
        >
          Resume
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-2xl ${theme === 'dark' ? 'glass-dark' : theme === 'marvel' ? 'glass-marvel' : theme === 'superman' ? 'glass-superman' : 'glass-light'
            } shadow-xl`}
        >
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-white/30 via-gray-200/30 to-white/30 p-1 border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden">
              <img
                src="/profile.png"
                alt="Nilesh Kumar"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                style={{ display: 'none' }}
                className={`w-full h-full rounded-full ${theme === 'dark' ? 'bg-black/40' : theme === 'marvel' ? 'bg-red-900/60' : theme === 'superman' ? 'bg-blue-900/60' : 'bg-gray-200/60'
                  } flex items-center justify-center text-4xl font-bold ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'
                      : theme === 'marvel'
                      ? 'bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                      : theme === 'superman'
                      ? 'bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                      : 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]'
                  } bg-clip-text text-transparent`}
              >
                NK
              </div>
            </div>
            <h2
              className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-400' : 'text-gray-800'
                }`}
            >
              Nilesh Kumar
            </h2>
            <p
              className={`text-lg ${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-200' : theme === 'superman' ? 'text-gray-300' : 'text-gray-600'
                }`}
            >
              Software Engineer, Web Developer & Full-Stack Developer
            </p>
          </div>

          {/* Resume Preview Section */}
          <div
            className={`mb-8 p-6 rounded-lg ${theme === 'dark'
              ? 'bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30 border border-white/10'
              : theme === 'marvel'
              ? 'bg-gradient-to-r from-red-900/30 via-yellow-900/20 to-red-900/30 border border-red-500/20'
              : theme === 'superman'
              ? 'bg-gradient-to-r from-blue-900/30 via-red-900/20 to-blue-900/30 border border-blue-500/20'
              : 'bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-blue-50/50 border border-gray-200'
              }`}
          >
            <p
              className={`text-center font-medium ${theme === 'dark' ? 'text-blue-200' : theme === 'marvel' ? 'text-yellow-200' : theme === 'superman' ? 'text-blue-200' : 'text-blue-800'
                }`}
            >
              Click the button below to download the latest PDF.
            </p>
          </div>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className={`w-full md:w-auto mx-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white border border-white/30 hover:shadow-xl hover:shadow-white/30 hover:from-white/30 hover:via-gray-200/30 hover:to-white/30'
                : theme === 'marvel'
                ? 'bg-gradient-to-r from-red-600/40 via-red-500/40 to-red-600/40 text-yellow-400 border border-red-500/50 hover:shadow-lg hover:shadow-red-500/30 hover:from-red-600/60 hover:via-red-500/60 hover:to-red-600/60'
                : theme === 'superman'
                ? 'bg-gradient-to-r from-blue-600/50 via-red-500/50 to-blue-600/50 text-yellow-400 border border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 hover:from-blue-600/60 hover:via-red-500/60 hover:to-blue-600/60'
                : 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/30'
            }`}
          >
            <FiDownload size={20} />
            Download Resume
          </motion.button>

          {/* Contact Info */}
          <div className="mt-8 space-y-2 text-center">
            <p
              className={`${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-300' : theme === 'superman' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <strong>Email:</strong> nileshsahu8674@gmail.com
            </p>
            <p
              className={`${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-300' : theme === 'superman' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <strong>Phone:</strong> +91 8674892407
            </p>
            <p
              className={`${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-300' : theme === 'superman' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <strong>Location:</strong> Bengaluru, Karnataka, India
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume

