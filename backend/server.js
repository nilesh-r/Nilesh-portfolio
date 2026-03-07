import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.js'
import projectRoutes from './routes/projects.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*', // Restrict to frontend URL in production
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.log('⚠️ No MONGODB_URI found in environment variables. Running without database. Some features may not work.')
} else {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log('✅ Connected to MongoDB')
    })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error)
    console.log('⚠️ Running without database. Some features may not work.')
  })
}

// Routes
app.use('/api/contact', contactRoutes)
app.use('/api/projects', projectRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API', version: '1.0.0' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`)
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`)
})

