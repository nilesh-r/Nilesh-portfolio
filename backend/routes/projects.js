import express from 'express'
import Project from '../models/Project.js'

const router = express.Router()

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    let projects

    // Try to fetch from database
    try {
      projects = await Project.find().sort({ createdAt: -1 })
    } catch (dbError) {
      // If database is not connected, return default projects
      console.log('Database not available, returning default projects')
      projects = null
    }

    // If no projects in database, return default projects
    if (!projects || projects.length === 0) {
      projects = [
        {
          _id: '1',
          title: 'Tech.Care - Patient Management System',
          description:
            'A comprehensive Next.js-based patient management system converted from Adobe XD template. Features interactive patient profiles, real-time vital signs monitoring, blood pressure charts using Chart.js, diagnostic history tracking, and lab results management. Built with TypeScript for type safety and includes API integration with fallback data support. Responsive design matching the original template with static export capability.',
          techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Chart.js', 'CSS', 'API Integration'],
          githubLink: 'https://github.com/nilesh-r/file',
          liveLink: 'https://files-psi-two.vercel.app',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format',
        },
        {
          _id: '2',
          title: 'EcoSafe Platform - Environmental Awareness Web App',
          description:
            'Built a sustainability platform featuring a carbon footprint calculator. Designed responsive UI with dark/light mode and animations (Framer Motion). Added geolocation-based climate tips and eco event listing for personalized engagement. Deployed using Vercel CI/CD with optimized modular React components.',
          techStack: ['React.js', 'Node.js', 'MongoDB', 'Framer Motion', 'Vercel', 'Tailwind CSS'],
          githubLink: 'https://github.com/nilesh-r/steeve.git',
          liveLink: 'https://steeve-sage.vercel.app',
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&auto=format',
        },
        {
          _id: '3',
          title: 'My Design - Personal Portfolio Website',
          description:
            'Built a modern personal portfolio website using React.js and Tailwind CSS. Designed a responsive UI with smooth animations and transitions powered by Framer Motion. Implemented modular and reusable components for scalability and maintainability. Deployed seamlessly on Vercel with CI/CD and optimized build for fast performance.',
          techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
          githubLink: 'https://github.com/nilesh-r/Nilesh-portfolio.git',
          liveLink: 'https://nilesh-portfolio-beryl.vercel.app',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format',
        },
        {
          _id: '4',
          title: 'Healthcare - Medical Services Website',
          description:
            'Built a responsive healthcare site with sections for services, appointments, and doctors. Implemented scroll-based animations and transitions using Framer Motion. Focused on mobile-first design and optimized performance across devices. Used Vercel for CI/CD deployment with GitHub integration.',
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
      ]
    }

    res.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

export default router

