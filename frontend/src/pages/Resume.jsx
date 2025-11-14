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
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-white'
          }`}
        >
          Resume
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-2xl ${
            theme === 'dark' ? 'glass-dark' : 'glass-light'
          } shadow-xl`}
        >
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-white/30 via-gray-200/30 to-white/30 p-1 border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <div
                className={`w-full h-full rounded-full ${
                  theme === 'dark' ? 'bg-black/40' : 'bg-black/40'
                } flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]`}
              >
                NK
              </div>
            </div>
            <h2
              className={`text-3xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Nilesh Kumar
            </h2>
            <p
              className={`text-lg ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Software Engineer, Web Developer & Full-Stack Developer
            </p>
          </div>

          {/* Resume Preview Section */}
          <div
            className={`mb-8 p-6 rounded-lg border-2 border-dashed ${
              theme === 'dark'
                ? 'border-gray-700 bg-gray-900'
                : 'border-gray-300 bg-gray-50'
            }`}
          >
            <p
              className={`text-center ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Resume PDF will be displayed here. Upload your resume.pdf file to the public folder
              to enable preview.
            </p>
          </div>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="w-full md:w-auto mx-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-white/30 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:from-white/30 hover:via-gray-200/30 hover:to-white/30"
          >
            <FiDownload size={20} />
            Download Resume
          </motion.button>

          {/* Contact Info */}
          <div className="mt-8 space-y-2 text-center">
            <p
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <strong>Email:</strong> nileshsahu8674@gmail.com
            </p>
            <p
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <strong>Phone:</strong> +918674892407
            </p>
            <p
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
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

