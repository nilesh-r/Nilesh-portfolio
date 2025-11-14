import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

// Profile Image Component with multiple format support
const ProfileImage = () => {
  const [imageSrc, setImageSrc] = useState(null)
  const [showFallback, setShowFallback] = useState(true)

  useEffect(() => {
    // Try different image formats
    const imageFormats = ['/profile-pic.jpg', '/profile-pic.png', '/profile-pic.jpeg', '/profile.jpg', '/profile.png']
    let currentIndex = 0

    const tryNextImage = () => {
      if (currentIndex >= imageFormats.length) {
        setShowFallback(true)
        return
      }

      const img = new Image()
      img.onload = () => {
        setImageSrc(imageFormats[currentIndex])
        setShowFallback(false)
      }
      img.onerror = () => {
        currentIndex++
        tryNextImage()
      }
      img.src = imageFormats[currentIndex]
    }

    tryNextImage()
  }, [])

  if (!imageSrc) {
    return null
  }

  return (
    <img
      src={imageSrc}
      alt="Nilesh Kumar"
      className="w-full h-full rounded-full object-cover"
      onError={() => {
        setShowFallback(true)
      }}
      onLoad={() => {
        setShowFallback(false)
        const fallback = document.getElementById('initials-fallback')
        if (fallback) {
          fallback.style.display = 'none'
        }
      }}
    />
  )
}

const About = ({ theme }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [expandedExperience, setExpandedExperience] = useState(null)

  const skills = [
    'JavaScript (ES6+)',
    'Python',
    'Java',
    'React.js',
    'Node.js',
    'Express.js',
    'Angular',
    'MongoDB',
    'Supabase',
    'Next.js',
    'Tailwind CSS',
    'Git/GitHub',
    'RESTful APIs',
    'HTML5 & CSS3',
    'C/C++',

  ]

  const tools = [
    'VS Code',
    'Postman',
    'Vercel',
    'Thunderhead',
    'PowerBI',
    'Framer Motion',
    'Agile & Scrum',
    'CI/CD',
    'Docker',
  ]

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
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl ${
              theme === 'dark' ? 'glass-dark' : 'glass-light'
            } shadow-xl`}
          >
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-white/30 via-gray-200/30 to-white/30 p-1 border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden relative">
              <ProfileImage />
              <div
                id="initials-fallback"
                className={`absolute inset-0 w-full h-full rounded-full ${
                  theme === 'dark' ? 'bg-black/40' : 'bg-black/40'
                } flex items-center justify-center text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]`}
              >
                NK
              </div>
            </div>
            <h2
              className={`text-2xl font-bold mb-4 text-center ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Nilesh Kumar
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Detail-oriented Web Developer and Computer Applications graduate with hands-on
              experience in full-stack development, REST API integration, and database management.
              Proficient in React.js, Node.js, JavaScript, Python, MongoDB, and Supabase, with
              expertise in building scalable, responsive, and performance-optimized web
              applications.
            </p>
            <p
              className={`text-lg leading-relaxed mt-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Strong collaborator with proven ability to deliver projects using Agile methodology,
              version control (Git/GitHub), and cloud deployment (Vercel/CI/CD).
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
              Skills & Technologies
            </h2>
            <div className="mb-8">
              <h3
                className={`text-lg font-semibold mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Programming Languages & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white rounded-full text-sm font-medium border border-white/30 backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: (skills.length + index) * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-gray-200'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-12 p-8 rounded-2xl ${
            theme === 'dark' ? 'glass-dark' : 'glass-light'
          } shadow-xl`}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            Experience
          </h2>
          <div className="space-y-6">
            {/* Internship 1 */}
            <motion.div
              className={`border-l-2 border-white/30 pl-6 relative cursor-pointer transition-all ${
                expandedExperience === 1 ? 'border-white/50' : ''
              }`}
              onClick={() => setExpandedExperience(expandedExperience === 1 ? null : 1)}
              whileHover={{ x: 5 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-white/30 to-white/20 border-2 border-white/40"></div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3
                    className={`text-xl font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Web Developer Intern
                  </h3>
                  <p
                    className={`text-lg font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    Labmentix Pvt. Ltd.
                  </p>
                  <p
                    className={`text-sm mb-3 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Feb '25 – Mar '25 | Pune, India (Remote)
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedExperience === 1 ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-1 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}
                >
                  <FiChevronDown size={24} />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedExperience === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h4
                        className={`text-lg font-semibold mb-3 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        Key Responsibilities:
                      </h4>
                      <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1 text-lg">•</span>
                          <span>
                            <strong className="text-white">Full-Stack Development:</strong> Developed
                            and maintained React.js + Node.js applications to improve web
                            functionality. Built and integrated RESTful APIs with MongoDB/Supabase
                            for seamless data flow and real-time data synchronization.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1 text-lg">•</span>
                          <span>
                            <strong className="text-white">UI/UX Enhancement:</strong> Enhanced
                            UI/UX design, improving user engagement and reducing bounce rate by 25%.
                            Implemented responsive design principles and modern web standards.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1 text-lg">•</span>
                          <span>
                            <strong className="text-white">Team Collaboration:</strong> Collaborated
                            with cross-functional team using Agile methodology and version control
                            (GitHub). Participated in daily standups, sprint planning, and code
                            reviews.
                          </span>
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <h4
                          className={`text-lg font-semibold mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-800'
                          }`}
                        >
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {['React.js', 'Node.js', 'MongoDB', 'Supabase', 'RESTful APIs', 'Git/GitHub', 'Agile'].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white rounded-full border border-white/20 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Internship 2 */}
            <motion.div
              className={`border-l-2 border-white/30 pl-6 relative cursor-pointer transition-all ${
                expandedExperience === 2 ? 'border-white/50' : ''
              }`}
              onClick={() => setExpandedExperience(expandedExperience === 2 ? null : 2)}
              whileHover={{ x: 5 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-white/30 to-white/20 border-2 border-white/40"></div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3
                    className={`text-xl font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Web Development Intern & Trainee
                  </h3>
                  <p
                    className={`text-lg font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    Infotact Solutions Pvt. Ltd
                  </p>
                  <p
                    className={`text-sm mb-3 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    May '25 – Aug '25 | India (Remote)
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedExperience === 2 ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-1 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}
                >
                  <FiChevronDown size={24} />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedExperience === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h4
                        className={`text-lg font-semibold mb-3 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        Key Responsibilities:
                      </h4>
                      <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1 text-lg">•</span>
                          <span>
                            <strong className="text-white">Training & Development:</strong> Completed
                            hands-on training and internship in Web Development. Developed and
                            integrated RESTful APIs to ensure efficient data flow with MongoDB.
                            Learned industry best practices and modern development workflows.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1 text-lg">•</span>
                          <span>
                            <strong className="text-white">Real-Time Projects:</strong> Worked on
                            real-time projects, enhancing front-end and back-end skills. Built
                            dynamic web applications with real-time data updates and interactive
                            user interfaces.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-white/60 mt-1 text-lg">•</span>
                          <span>
                            <strong className="text-white">Problem Solving:</strong> Applied
                            concepts of responsive design, dynamic websites, and problem-solving.
                            Debugged and fixed issues, optimized performance, and ensured
                            cross-browser compatibility.
                          </span>
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <h4
                          className={`text-lg font-semibold mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-800'
                          }`}
                        >
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {['React.js', 'Node.js', 'MongoDB', 'RESTful APIs', 'Responsive Design', 'JavaScript', 'HTML/CSS'].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white rounded-full border border-white/20 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-12 p-8 rounded-2xl ${
            theme === 'dark' ? 'glass-dark' : 'glass-light'
          } shadow-xl`}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.a
              href="https://drive.google.com/file/d/1ZwsHYJGyvfuVl2__oQst-iejA2squuX9/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-4 rounded-lg border border-white/20 backdrop-blur-sm ${
                theme === 'dark' ? 'bg-black/20 hover:bg-black/30' : 'bg-white/10 hover:bg-white/20'
              } transition-all cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 rounded-lg border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Angular Course
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Infosys Springboard | Oct '25
                  </p>
                </div>
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1CuzVphCRe-9PmbCtigbTLfHhMl7QCxhP/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-4 rounded-lg border border-white/20 backdrop-blur-sm ${
                theme === 'dark' ? 'bg-black/20 hover:bg-black/30' : 'bg-white/10 hover:bg-white/20'
              } transition-all cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 rounded-lg border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Agile Scrum in Practice
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Infosys Springboard | Oct '25
                  </p>
                </div>
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1tYs-KJGgZRRThycKJ8EPayfRUG_3gtxW/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-4 rounded-lg border border-white/20 backdrop-blur-sm ${
                theme === 'dark' ? 'bg-black/20 hover:bg-black/30' : 'bg-white/10 hover:bg-white/20'
              } transition-all cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 rounded-lg border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    AINACT 2025
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Noukri.com | May '25
                  </p>
                </div>
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1gbIFaftNlM-5YnLsT480FUXo5ixGyehm/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-4 rounded-lg border border-white/20 backdrop-blur-sm ${
                theme === 'dark' ? 'bg-black/20 hover:bg-black/30' : 'bg-white/10 hover:bg-white/20'
              } transition-all cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 rounded-lg border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Web Developer Internship
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Infotact Solutions Pvt Ltd | Aug '25
                  </p>
                </div>
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1wOLFXI_c3hskQCZ7BGyXF85aqaZA2NxI/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-4 rounded-lg border border-white/20 backdrop-blur-sm ${
                theme === 'dark' ? 'bg-black/20 hover:bg-black/30' : 'bg-white/10 hover:bg-white/20'
              } transition-all cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 rounded-lg border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    PowerBI Workshop
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    officeMaster | Apr '25
                  </p>
                </div>
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1E0Czrsasi_-f_dCyiKZ0oLnjbn-g7_oP/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-4 rounded-lg border border-white/20 backdrop-blur-sm ${
                theme === 'dark' ? 'bg-black/20 hover:bg-black/30' : 'bg-white/10 hover:bg-white/20'
              } transition-all cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 rounded-lg border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Web Developer Internship
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Labmentix Pvt Ltd | Mar '25
                  </p>
                </div>
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-12 p-8 rounded-2xl ${
            theme === 'dark' ? 'glass-dark' : 'glass-light'
          } shadow-xl`}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3
                className={`text-xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                Bachelor in Computer Applications (BCA)
              </h3>
              <p
                className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              >
                Bengaluru North University | GPA: 7.23 | Jul '22 – Jul '25
              </p>
            </div>
            <div>
              <h3
                className={`text-xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                Intermediate (Science)
              </h3>
              <p
                className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              >
                Vinoba Bhave University | GPA: 61.08 | Apr '20 – Apr '21
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

