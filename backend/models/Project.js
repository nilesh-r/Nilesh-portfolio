import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String],
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/600x400',
    },
  },
  {
    timestamps: true,
  }
)

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)

export default Project

