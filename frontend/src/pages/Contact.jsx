import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import axios from 'axios'

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`,
        formData
      )
      setStatus({ type: 'success', message: response.data.message || 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-white'
          }`}
        >
          Get In Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl ${
              theme === 'dark' ? 'glass-dark' : 'glass-light'
            } shadow-xl`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 rounded-full border border-white/30 backdrop-blur-sm">
                  <FiMail className="text-white" size={20} />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:nileshsahu8674@gmail.com"
                    className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500 transition-colors`}
                  >
                    nileshsahu8674@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <FiPhone className="text-white" size={20} />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+918674892407"
                    className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500 transition-colors`}
                  >
                    +91 8674892407
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <FiMapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Location
                  </h3>
                  <p
                    className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    Spice garden Marathahalli, Bengaluru, Karnataka, 560037, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl ${
              theme === 'dark' ? 'glass-dark' : 'glass-light'
            } shadow-xl`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-black/20 border-white/20 text-white placeholder-gray-400'
                      : 'bg-white/30 border-white/40 text-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-black/20 border-white/20 text-white placeholder-gray-400'
                      : 'bg-white/30 border-white/40 text-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-black/20 border-white/20 text-white placeholder-gray-400'
                      : 'bg-white/30 border-white/40 text-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none`}
                  placeholder="Your message here..."
                />
              </div>
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {status.message}
                </div>
              )}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-white/30 border border-white/30 backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:from-white/30 hover:via-gray-200/30 hover:to-white/30"
              >
                <FiSend size={20} />
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

