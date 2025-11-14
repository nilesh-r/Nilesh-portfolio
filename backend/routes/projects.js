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
          githubLink: 'https://github.com',
          liveLink: 'https://vercel.com',
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&auto=format',
        },
        {
          _id: '3',
          title: 'My Design - Personal Portfolio Website',
          description:
            'Built a modern personal portfolio website using React.js and Tailwind CSS. Designed a responsive UI with smooth animations and transitions powered by Framer Motion. Implemented modular and reusable components for scalability and maintainability. Deployed seamlessly on Vercel with CI/CD and optimized build for fast performance.',
          techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
          githubLink: 'https://github.com',
          liveLink: 'https://vercel.com',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format',
        },
        {
          _id: '4',
          title: 'Healthcare - Medical Services Website',
          description:
            'Built a responsive healthcare site with sections for services, appointments, and doctors. Implemented scroll-based animations and transitions using Framer Motion. Focused on mobile-first design and optimized performance across devices. Used Vercel for CI/CD deployment with GitHub integration.',
          techStack: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
          githubLink: 'https://github.com',
          liveLink: 'https://vercel.com',
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format',
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

