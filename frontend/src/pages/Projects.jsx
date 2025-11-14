import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import axios from 'axios'

const Projects = ({ theme }) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/projects`
        )
        setProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
        // Fallback to default projects if API fails
        setProjects([
          {
            _id: '1',
            title: 'Tech.Care - Patient Management System',
            description:
              'A comprehensive Next.js-based patient management system converted from Adobe XD template. Features interactive patient profiles, real-time vital signs monitoring, blood pressure charts using Chart.js, diagnostic history tracking, and lab results management.',
            techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Chart.js', 'CSS', 'API Integration'],
            githubLink: 'https://github.com/nilesh-r/file',
            liveLink: 'https://files-psi-two.vercel.app',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format',
          },
          {
            _id: '2',
            title: 'EcoSafe Platform - Environmental Awareness Web App',
            description:
              'Built a sustainability platform featuring a carbon footprint calculator. Designed responsive UI with dark/light mode and animations (Framer Motion). Added geolocation-based climate tips and eco event listing for personalized engagement.',
            techStack: ['React.js', 'Node.js', 'MongoDB', 'Framer Motion', 'Vercel', 'Tailwind CSS'],
            githubLink: 'https://github.com',
            liveLink: 'https://vercel.com',
            image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&auto=format',
          },
          {
            _id: '3',
            title: 'My Design - Personal Portfolio Website',
            description:
              'Built a modern personal portfolio website using React.js and Tailwind CSS. Designed a responsive UI with smooth animations and transitions powered by Framer Motion. Implemented modular and reusable components for scalability.',
            techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
            githubLink: 'https://github.com',
            liveLink: 'https://vercel.com',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format',
          },
          {
            _id: '4',
            title: 'Healthcare - Medical Services Website',
            description:
              'Built a responsive healthcare site with sections for services, appointments, and doctors. Implemented scroll-based animations and transitions using Framer Motion. Focused on mobile-first design and optimized performance.',
            techStack: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
            githubLink: 'https://github.com',
            liveLink: 'https://vercel.com',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format',
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading projects...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-white'
          }`}
        >
          My Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`rounded-2xl overflow-hidden shadow-xl ${
                theme === 'dark' ? 'glass-dark' : 'glass-light'
              }`}
            >
              <div className="h-48 bg-gradient-to-r from-white/10 via-gray-200/10 to-white/10 relative overflow-hidden border-b border-white/20">
                <img
                  src={project.image || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format'}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4
                    className={`text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white rounded border border-white/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm bg-black/30 border border-white/20 text-white rounded-lg hover:bg-black/50 transition-all"
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white rounded-lg hover:shadow-xl hover:shadow-white/30 border border-white/30 transition-all backdrop-blur-sm hover:from-white/30 hover:via-gray-200/30 hover:to-white/30"
                  >
                    <FiExternalLink /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

