import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import axios from 'axios'

const DEFAULT_PROJECTS = [
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
    githubLink: 'https://github.com/nilesh-r/steeve.git',
    liveLink: 'https://steeve-sage.vercel.app',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&auto=format',
  },
  {
    _id: '3',
    title: 'My Design - Personal Portfolio Website',
    description:
      'Built a modern personal portfolio website using React.js and Tailwind CSS. Designed a responsive UI with smooth animations and transitions powered by Framer Motion. Implemented modular and reusable components for scalability.',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    githubLink: 'https://github.com/nilesh-r/Nilesh-portfolio.git',
    liveLink: 'https://nilesh-portfolio-beryl.vercel.app',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format',
  },
  {
    _id: '4',
    title: 'Healthcare - Medical Services Website',
    description:
      'Built a responsive healthcare site with sections for services, appointments, and doctors. Implemented scroll-based animations and transitions using Framer Motion. Focused on mobile-first design and optimized performance.',
    techStack: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    githubLink: 'https://github.com/nilesh-r/healthcare.git',
    liveLink: 'https://healthcare-sigma-nine.vercel.app',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format',
  },
  {
    _id: '5',
    title: 'JobSense AI – Smart Job Matcher & ATS Analyzer',
    description:
      'A full-stack AI-driven web application that helps job seekers optimize their resumes against job descriptions. Features include AI-powered ATS scoring, keyword gap analysis, and improvement suggestions using NLP sentence-transformers. Built with a robust microservices architecture including a Python AI service.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL'],
    githubLink: 'https://github.com/nilesh-r/jobsense.git',
    liveLink: 'https://jobsense-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&auto=format',
  },
  {
    _id: '6',
    title: 'Smart AI-Based Healthcare System',
    description:
      'A modern, intelligent healthcare platform connecting patients, doctors, and administrators. Powered by Google Gemini 2.0 Flash for AI symptom checking ("The Brain") and Supabase for real-time data management. Includes Role-Based Access, Digital Prescription Pad, and Real-Time Sync via Supabase Realtime.',
    techStack: ['React 19', 'Tailwind CSS v4', 'Framer Motion', 'FastAPI', 'Python', 'Supabase', 'Gemini AI'],
    githubLink: 'https://github.com/nilesh-r/Smart-Ai-Based-Healthcare.git',
    liveLink: 'https://smart-ai-based-healthcare.vercel.app/',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop&auto=format',
  },
  {
    _id: '7',
    title: 'Enterprise Task & Workflow Management System',
    description:
      'A production-ready, secure, full-stack enterprise application for managing organizational projects, tasks, and team productivity. Features include JWT-based Role-Based Access Control (Admin, Manager, Employee), live task tracking, real-time analytics dashboard with Recharts, and a Dockerized PostgreSQL backend.',
    techStack: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'JWT', 'Tailwind CSS', 'Recharts'],
    githubLink: 'https://github.com/nilesh-r/enterprise-task-management-system.git',
    liveLink: 'https://new-pied-beta.vercel.app/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format',
  },
];

const Projects = ({ theme }) => {
  const [projects, setProjects] = useState(DEFAULT_PROJECTS)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/projects`
        )
        if (response.data && response.data.length > 0) {
          setProjects(response.data)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-yellow-500' : theme === 'superman' ? 'text-red-500' : 'text-gray-900'
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
                theme === 'dark' ? 'glass-dark' : theme === 'marvel' ? 'glass-marvel' : theme === 'superman' ? 'glass-superman' : 'glass-light'
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
                    theme === 'dark' ? 'text-white' : theme === 'marvel' ? 'text-gray-100' : theme === 'superman' ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-gray-300' : theme === 'superman' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4
                    className={`text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : theme === 'marvel' ? 'text-yellow-100' : theme === 'superman' ? 'text-red-300' : 'text-gray-700'
                    }`}
                  >
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded border backdrop-blur-sm ${
                          theme === 'dark'
                            ? 'bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white border-white/20'
                            : theme === 'marvel'
                            ? 'bg-gradient-to-r from-red-600/40 via-red-500/40 to-red-600/40 text-yellow-400 border-red-500/50'
                            : theme === 'superman'
                            ? 'bg-gradient-to-r from-blue-600/40 via-blue-500/40 to-blue-600/40 text-yellow-300 border-blue-500/50'
                            : 'bg-purple-100 text-purple-700 border-purple-200'
                        }`}
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
                    className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-lg transition-all ${
                      theme === 'dark'
                        ? 'bg-black/30 border border-white/20 text-white hover:bg-black/50'
                        : theme === 'marvel'
                        ? 'bg-red-900/30 border border-red-500/50 text-yellow-500 hover:bg-red-900/60 shadow-[0_0_10px_rgba(239,68,68,0.2)]'
                        : theme === 'superman'
                        ? 'bg-blue-900/30 border border-blue-500/50 text-red-400 hover:bg-blue-900/60 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                        : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 hover:shadow'
                    }`}
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all backdrop-blur-sm ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-white/20 via-gray-200/20 to-white/20 text-white hover:shadow-xl hover:shadow-white/30 border border-white/30 hover:from-white/30 hover:via-gray-200/30 hover:to-white/30'
                        : theme === 'marvel'
                        ? 'bg-gradient-to-r from-red-600/50 via-red-500/50 to-red-600/50 text-yellow-400 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:shadow-lg'
                        : theme === 'superman'
                        ? 'bg-gradient-to-r from-blue-600/50 via-red-500/50 to-blue-600/50 text-yellow-400 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-lg'
                        : 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-white shadow hover:shadow-lg'
                    }`}
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

