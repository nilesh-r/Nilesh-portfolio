import express from 'express'
import Contact from '../models/Contact.js'
import nodemailer from 'nodemailer'

const router = express.Router()

// Configure Nodemailer (optional - requires email credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Save to database
    let contactData
    try {
      contactData = new Contact({ name, email, message })
      await contactData.save()
    } catch (dbError) {
      // If database is not connected, continue without saving
      console.log('Database not available, skipping save:', dbError.message)
    }

    // Send email (optional - only if credentials are configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'nileshsahu8674@gmail.com',
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }

        await transporter.sendMail(mailOptions)
        console.log('✅ Email sent successfully')
      } catch (emailError) {
        console.log('⚠️  Email not sent:', emailError.message)
        // Continue even if email fails
      }
    }

    res.status(200).json({
      message: 'Message received successfully! I will get back to you soon.',
      data: contactData || { name, email, message },
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

export default router

