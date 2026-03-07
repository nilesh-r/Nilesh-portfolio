import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

console.log('Testing email credentials...')
console.log('EMAIL_USER:', process.env.EMAIL_USER)
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***[SET]***' : 'MISSING')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

transporter.verify(function(error, success) {
  if (error) {
    console.error('❌ Connection or Authentication Error:')
    console.error(error)
  } else {
    console.log('✅ Server is ready to take our messages')
    
    // Test sending an email
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'nileshsahu8674@gmail.com',
      subject: 'Test Email from NodeMailer',
      text: 'If you see this, the email configuration is working!'
    }).then(info => {
      console.log('✅ Test email sent successfully:', info.messageId)
    }).catch(err => {
      console.error('❌ Error sending test email:', err)
    })
  }
})
