import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiChevronDown, FiUsers } from 'react-icons/fi'
import { 
  SiJavascript, SiPython, SiReact, SiNodedotjs, SiExpress, SiAngular, 
  SiMongodb, SiSupabase, SiNextdotjs, SiTailwindcss, SiGithub, 
  SiHtml5, SiCss3, SiCplusplus, SiFastapi, SiSpringboot, SiPostgresql, 
  SiJsonwebtokens, SiVisualstudiocode, SiPostman, SiVercel, SiThunderbird, 
  SiPowerbi, SiFramer, SiGithubactions, SiDocker, SiGoogle, SiMicrosoft, SiInfosys
} from 'react-icons/si'
import { FaJava, FaCertificate } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'

const ProfileImage = ({ theme }) => {
  const [imageSrc, setImageSrc] = useState(null)
  const [showFallback, setShowFallback] = useState(true)

  useEffect(() => {
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

  const FallbackUI = () => (
    <div
      className={`absolute inset-0 w-full h-full rounded-full ${theme === 'dark' ? 'bg-black/40' : theme === 'marvel' ? 'bg-red-900/60' : theme === 'superman' ? 'bg-blue-900/60' : 'bg-gray-200/60'
        } flex items-center justify-center text-6xl font-bold ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'
            : theme === 'marvel'
            ? 'bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]'
            : 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]'
        } bg-clip-text text-transparent`}
    >
      NK
    </div>
  )

  if (!imageSrc) {
    return <FallbackUI />
  }

  return (
    <>
      <img
        src={imageSrc}
        alt="Nilesh Kumar"
        className={`w-full h-full rounded-full object-cover ${showFallback ? 'hidden' : 'block'}`}
        onError={() => setShowFallback(true)}
        onLoad={() => setShowFallback(false)}
      />
      {showFallback && <FallbackUI />}
    </>
  )
}

const skillIcons = {
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#F7DF1E' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'Java': { icon: FaJava, color: '#007396' },
  'React.js': { icon: SiReact, color: '#61DAFB' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Express.js': { icon: SiExpress, color: '#FFFFFF' },
  'Angular': { icon: SiAngular, color: '#DD0031' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'Supabase': { icon: SiSupabase, color: '#3ECF8E' },
  'Next.js': { icon: SiNextdotjs, color: '#FFFFFF' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Git/GitHub': { icon: SiGithub, color: '#FFFFFF' },
  'RESTful APIs': { icon: AiOutlineApi, color: '#0084FF' },
  'HTML5 & CSS3': { icon: SiHtml5, color: '#E34F26' },
  'C/C++': { icon: SiCplusplus, color: '#00599C' },
  'FastAPI': { icon: SiFastapi, color: '#05998B' },
  'Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'JWT': { icon: SiJsonwebtokens, color: '#000000' },
  'VS Code': { icon: SiVisualstudiocode, color: '#007ACC' },
  'Postman': { icon: SiPostman, color: '#FF6C37' },
  'Vercel': { icon: SiVercel, color: '#FFFFFF' },
  'Thunderhead': { icon: SiThunderbird, color: '#0A84FF' },
  'PowerBI': { icon: SiPowerbi, color: '#F2C811' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF' },
  'Agile & Scrum': { icon: FiUsers, color: '#00A3BF' },
  'CI/CD': { icon: SiGithubactions, color: '#2088FF' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Gemini AI': { icon: SiGoogle, color: '#4285F4' },
};

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
    'FastAPI',
    'Spring Boot',
    'PostgreSQL',
    'JWT',
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
    'Gemini AI',
  ]

  const certifications = [
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft",
      date: "Dec '25",
      link: "https://drive.google.com/file/d/18nYl_fTPFYcQmzhpmyYDe61qOSIjK16D/view",
      icon: SiMicrosoft,
      color: "#00A4EF"
    },
    {
      title: "Angular Course",
      issuer: "Infosys Springboard",
      date: "Oct '25",
      link: "https://drive.google.com/file/d/1ZwsHYJGyvfuVl2__oQst-iejA2squuX9/view",
      icon: SiAngular,
      color: "#DD0031"
    },
    {
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "Oct '25",
      link: "https://drive.google.com/file/d/1CuzVphCRe-9PmbCtigbTLfHhMl7QCxhP/view",
      icon: SiInfosys,
      color: "#007CC3"
    },
    {
      title: "AINACT 2025",
      issuer: "Noukri.com",
      date: "May '25",
      link: "https://drive.google.com/file/d/1tYs-KJGgZRRThycKJ8EPayfRUG_3gtxW/view",
      icon: FaCertificate,
      color: "#4285F4"
    },
    {
      title: "Web Developer Internship",
      issuer: "Infotact Solutions Pvt Ltd",
      date: "Aug '25",
      link: "https://drive.google.com/file/d/1gbIFaftNlM-5YnLsT480FUXo5ixGyehm/view",
      icon: SiReact,
      color: "#61DAFB"
    },
    {
      title: "PowerBI Workshop",
      issuer: "officeMaster",
      date: "Apr '25",
      link: "https://drive.google.com/file/d/1wOLFXI_c3hskQCZ7BGyXF85aqaZA2NxI/view",
      icon: SiPowerbi,
      color: "#F2C811"
    },
    {
      title: "Web Developer Internship",
      issuer: "Labmentix Pvt Ltd",
      date: "Mar '25",
      link: "https://drive.google.com/file/d/1E0Czrsasi_-f_dCyiKZ0oLnjbn-g7_oP/view",
      icon: SiNodedotjs,
      color: "#339933"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-500' : theme === 'superman' ? 'text-red-500' : 'text-gray-900'
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
            className={`p-8 rounded-2xl ${theme === 'dark' ? 'glass-dark' : theme === 'marvel' ? 'glass-marvel' : theme === 'superman' ? 'glass-superman' : 'glass-light'
              } shadow-xl`}
          >
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-white/30 via-gray-200/30 to-white/30 p-1 border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden relative">
              <ProfileImage theme={theme} />
            </div>
            <h2
              className={`text-2xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
                }`}
            >
              Nilesh Kumar
            </h2>
            <p
              className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-200' : theme === 'superman' ? 'text-gray-200' : 'text-gray-700'
                }`}
            >
              Detail-oriented Web Developer and Computer Applications graduate with hands-on
              experience in full-stack development, REST API integration, and AI-driven applications.
              Proficient across modern tech stacks including React.js, Node.js, Spring Boot, FastAPI, and Next.js, 
              backed by robust database management using PostgreSQL, MongoDB, and Supabase.
            </p>
            <p
              className={`text-lg leading-relaxed mt-4 ${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-200' : theme === 'superman' ? 'text-gray-200' : 'text-gray-700'
                }`}
            >
              Passionate about building scalable, secure, and intelligent enterprise systems. 
              Strong collaborator with a proven ability to deliver complete solutions using Agile methodologies,
              Dockerized architectures, and automated cloud deployments (Vercel/Render).
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl ${theme === 'dark' ? 'glass-dark' : theme === 'marvel' ? 'glass-marvel' : theme === 'superman' ? 'glass-superman' : 'glass-light'
              } shadow-xl`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
                }`}
            >
              Skills & Technologies
            </h2>
            <div className="mb-8">
              <h3
                className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-200' : theme === 'superman' ? 'text-gray-200' : 'text-gray-700'
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
                    className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm transition-all flex items-center gap-2 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white border border-white/30'
                        : theme === 'marvel'
                        ? 'bg-red-900/40 text-yellow-400 border border-red-500/50 hover:bg-red-800/60'
                        : theme === 'superman'
                        ? 'bg-blue-900/40 text-red-500 border border-blue-500/50 hover:bg-blue-800/60'
                        : 'bg-white text-gray-800 border border-gray-200 hover:shadow-md'
                    }`}
                  >
                    {skillIcons[skill] && (
                      <span className="text-lg" style={{ color: skillIcons[skill].color }}>
                        {React.createElement(skillIcons[skill].icon)}
                      </span>
                    )}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-200' : theme === 'superman' ? 'text-gray-200' : 'text-gray-700'
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
                    className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm transition-all flex items-center gap-2 ${theme === 'dark'
                        ? 'bg-gray-700 text-gray-200 border border-gray-600'
                        : theme === 'marvel'
                        ? 'bg-red-800/40 text-yellow-300 border border-red-700/50'
                        : theme === 'superman'
                        ? 'bg-blue-800/40 text-red-300 border border-blue-700/50'
                        : 'bg-white text-blue-700 border border-blue-200 hover:shadow-md'
                      }`}
                  >
                    {skillIcons[tool] && (
                      <span className="text-lg" style={{ color: skillIcons[tool].color }}>
                        {React.createElement(skillIcons[tool].icon)}
                      </span>
                    )}
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
          className={`mt-12 p-8 rounded-2xl ${theme === 'dark' ? 'glass-dark' : theme === 'marvel' ? 'glass-marvel' : theme === 'superman' ? 'glass-superman' : 'glass-light'
            } shadow-xl`}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
              }`}
          >
            Experience
          </h2>
          <div className="space-y-6">
            {/* Internship 1 */}
            <motion.div
              className={`border-l-2 border-white/30 pl-6 relative cursor-pointer transition-all ${expandedExperience === 1 ? 'border-white/50' : ''
                }`}
              onClick={() => setExpandedExperience(expandedExperience === 1 ? null : 1)}
              whileHover={{ x: 5 }}
            >
              <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full border-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-white/30 to-white/20 border-white/40'
                  : theme === 'marvel'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 border-red-400'
                  : theme === 'superman'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 border-red-500'
                  : 'bg-gradient-to-r from-purple-400 to-purple-500 border-purple-200'
              }`}></div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3
                    className={`text-xl font-semibold mb-1 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
                      }`}
                  >
                    Web Developer Intern
                  </h3>
                  <p
                    className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-200' : theme === 'superman' ? 'text-gray-200' : 'text-gray-600'
                      }`}
                  >
                    Labmentix Pvt. Ltd.
                  </p>
                  <p
                    className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : theme === 'marvel' ? 'text-yellow-100' : theme === 'superman' ? 'text-red-200' : 'text-gray-500'
                      }`}
                  >
                    Feb '25 – Mar '25 | Pune, India (Remote)
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedExperience === 1 ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-1 ${theme === 'dark' ? 'text-white/60' : theme === 'marvel' ? 'text-yellow-500' : theme === 'superman' ? 'text-red-500' : 'text-purple-600'}`}
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
                        className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
                          }`}
                      >
                        Key Responsibilities:
                      </h4>
                      <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-yellow-100' : theme === 'superman' ? 'text-blue-100' : 'text-gray-600'}`}>
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
                          <span className={`${theme === 'dark' ? 'text-white/60' : 'text-purple-500'} mt-1 text-lg`}>•</span>
                          <span>
                            <strong className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>UI/UX Enhancement:</strong> Enhanced
                            UI/UX design, improving user engagement and reducing bounce rate by 25%.
                            Implemented responsive design principles and modern web standards.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className={`${theme === 'dark' ? 'text-white/60' : theme === 'marvel' ? 'text-yellow-600' : theme === 'superman' ? 'text-red-600' : 'text-purple-500'} mt-1 text-lg`}>•</span>
                          <span>
                            <strong className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Team Collaboration:</strong> Collaborated
                            with cross-functional team using Agile methodology and version control
                            (GitHub). Participated in daily standups, sprint planning, and code
                            reviews.
                          </span>
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <h4
                          className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
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
              className={`border-l-2 border-white/30 pl-6 relative cursor-pointer transition-all ${expandedExperience === 2 ? 'border-white/50' : ''
                }`}
              onClick={() => setExpandedExperience(expandedExperience === 2 ? null : 2)}
              whileHover={{ x: 5 }}
            >
              <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full border-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-white/30 to-white/20 border-white/40'
                  : theme === 'marvel'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 border-red-400'
                  : theme === 'superman'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 border-red-500'
                  : 'bg-gradient-to-r from-purple-400 to-purple-500 border-purple-200'
              }`}></div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3
                    className={`text-xl font-semibold mb-1 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
                      }`}
                  >
                    Web Development Intern & Trainee
                  </h3>
                  <p
                    className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-200' : theme === 'superman' ? 'text-gray-200' : 'text-gray-600'
                      }`}
                  >
                    Infotact Solutions Pvt. Ltd
                  </p>
                  <p
                    className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : theme === 'marvel' ? 'text-yellow-100' : theme === 'superman' ? 'text-red-200' : 'text-gray-500'
                      }`}
                  >
                    May '25 – Aug '25 | India (Remote)
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedExperience === 2 ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-1 ${theme === 'dark' ? 'text-white/60' : theme === 'marvel' ? 'text-yellow-500' : theme === 'superman' ? 'text-red-500' : 'text-purple-600'}`}
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
                        className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
                          }`}
                      >
                        Key Responsibilities:
                      </h4>
                      <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-yellow-100' : theme === 'superman' ? 'text-blue-100' : 'text-gray-600'}`}>
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
                          <span className={`${theme === 'dark' ? 'text-white/60' : 'text-purple-500'} mt-1 text-lg`}>•</span>
                          <span>
                            <strong className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Problem Solving:</strong> Applied
                            concepts of responsive design, dynamic websites, and problem-solving.
                            Debugged and fixed issues, optimized performance, and ensured
                            cross-browser compatibility.
                          </span>
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <h4
                          className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
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
          className={`mt-12 p-8 rounded-2xl ${theme === 'dark' ? 'glass-dark' : theme === 'marvel' ? 'glass-marvel' : theme === 'superman' ? 'glass-superman' : 'glass-light'
            } shadow-xl`}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
              }`}
          >
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-4 rounded-lg border border-white/20 backdrop-blur-sm ${theme === 'dark' ? 'bg-black/20 hover:bg-black/30' : 'bg-white/10 hover:bg-white/20'
                  } transition-all cursor-pointer group`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-gradient-to-r from-white/10 to-white/5 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors">
                    <span className="text-2xl" style={{ color: cert.color }}>
                      {React.createElement(cert.icon)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-gray-100' : theme === 'superman' ? 'text-blue-200' : 'text-gray-800'}`}>
                      {cert.title}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : theme === 'marvel' ? 'text-gray-300' : theme === 'superman' ? 'text-gray-300' : 'text-gray-500'}`}>
                      {cert.issuer} | {cert.date}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-12 p-8 rounded-2xl ${theme === 'dark' ? 'glass-dark' : theme === 'marvel' ? 'glass-marvel' : theme === 'superman' ? 'glass-superman' : 'glass-light'
            } shadow-xl`}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-400' : theme === 'superman' ? 'text-blue-500' : 'text-gray-800'
              }`}
          >
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3
                className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-gray-100' : theme === 'superman' ? 'text-blue-200' : 'text-gray-800'
                  }`}
              >
                Bachelor in Computer Applications (BCA)
              </h3>
              <p
                className={`${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-yellow-100' : theme === 'superman' ? 'text-blue-100' : 'text-gray-600'}`}
              >
                Bengaluru North University | GPA: 7.23 | Jul '22 – Jul '25
              </p>
            </div>
            <div>
              <h3
                className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-gray-100' : theme === 'superman' ? 'text-blue-200' : 'text-gray-800'
                  }`}
              >
                Intermediate (Science)
              </h3>
              <p
                className={`${theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-yellow-100' : theme === 'superman' ? 'text-blue-100' : 'text-gray-600'}`}
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
