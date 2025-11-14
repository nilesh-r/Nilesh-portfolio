import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Project from '../models/Project.js'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not set in .env file')
  process.exit(1)
}

const projects = [
  {
    title: 'Tech.Care - Patient Management System',
    description:
      'A comprehensive Next.js-based patient management system converted from Adobe XD template. Features interactive patient profiles, real-time vital signs monitoring, blood pressure charts using Chart.js, diagnostic history tracking, and lab results management. Built with TypeScript for type safety and includes API integration with fallback data support. Responsive design matching the original template with static export capability.',
    techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Chart.js', 'CSS', 'API Integration'],
    githubLink: 'https://github.com/nilesh-r/file',
    liveLink: 'https://files-psi-two.vercel.app',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format',
  },
  {
    title: 'EcoSafe Platform - Environmental Awareness Web App',
    description:
      'Built a sustainability platform featuring a carbon footprint calculator. Designed responsive UI with dark/light mode and animations (Framer Motion). Added geolocation-based climate tips and eco event listing for personalized engagement. Deployed using Vercel CI/CD with optimized modular React components.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Framer Motion', 'Vercel', 'Tailwind CSS'],
    githubLink: 'https://github.com',
    liveLink: 'https://vercel.com',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&auto=format',
  },
  {
    title: 'My Design - Personal Portfolio Website',
    description:
      'Built a modern personal portfolio website using React.js and Tailwind CSS. Designed a responsive UI with smooth animations and transitions powered by Framer Motion. Implemented modular and reusable components for scalability and maintainability. Deployed seamlessly on Vercel with CI/CD and optimized build for fast performance.',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    githubLink: 'https://github.com',
    liveLink: 'https://vercel.com',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format',
  },
  {
    title: 'Healthcare - Medical Services Website',
    description:
      'Built a responsive healthcare site with sections for services, appointments, and doctors. Implemented scroll-based animations and transitions using Framer Motion. Focused on mobile-first design and optimized performance across devices. Used Vercel for CI/CD deployment with GitHub integration.',
    techStack: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    githubLink: 'https://github.com',
    liveLink: 'https://vercel.com',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format',
  },
]

async function seedProjects() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB')

    // Clear existing projects
    await Project.deleteMany({})
    console.log('🗑️  Cleared existing projects')

    // Insert new projects
    await Project.insertMany(projects)
    console.log('✅ Seeded projects successfully')

    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding projects:', error)
    process.exit(1)
  }
}

seedProjects()

