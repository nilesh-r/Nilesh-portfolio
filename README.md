# Portfolio Website - React + Node.js

A fully functional portfolio website built with React (frontend) and Node.js/Express (backend) for MaVionix Web Developer Intern assignment.

## 🚀 Features

### Frontend (React.js)
- ✅ **Home Page** - Hero section with name, role, and tagline with smooth animations
- ✅ **About Me Page** - Bio, skills list, and tools/technologies grid
- ✅ **Projects Page** - Display projects with title, description, tech stack, GitHub link, and live preview
- ✅ **Resume Page** - Resume download functionality
- ✅ **Contact Page** - Contact form with name, email, and message fields
- ✅ **Responsive Design** - Mobile, tablet, and laptop compatible
- ✅ **Dark/Light Theme Toggle** - Modern UI with gradient themes
- ✅ **Smooth Animations** - Powered by Framer Motion

### Backend (Node.js + Express)
- ✅ **Contact Form API** - POST `/api/contact` endpoint
- ✅ **Projects API** - GET `/api/projects` endpoint
- ✅ **MongoDB Integration** - Database support for storing contact messages and projects
- ✅ **Email Support** - Optional Nodemailer integration for contact form notifications
- ✅ **Fallback Support** - Works without database connection

## 📁 Project Structure

```
.
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable components (Navbar, Footer)
│   │   ├── pages/           # Page components (Home, About, Projects, Resume, Contact)
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Node.js backend application
│   ├── routes/              # API routes
│   ├── models/             # MongoDB models
│   ├── server.js           # Express server
│   └── package.json
│
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (optional, for database)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, for custom API URL):
```bash
cp .env.example .env
```
Edit `.env` and set:
```
VITE_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Edit `.env` and configure:
```env
PORT=5000
MONGODB_URI=your-mongodb-connection-string
EMAIL_USER=your-email@gmail.com (optional)
EMAIL_PASS=your-app-password (optional)
```

5. Start the server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend will be available at `http://localhost:5000`

### MongoDB Setup (Optional)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace `<password>` with your database password
5. Add the connection string to `backend/.env` as `MONGODB_URI`

**Note:** The application works without MongoDB. It will use default data if the database is not connected.

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
```
The build output will be in the `dist` folder.

### Backend
The backend runs directly with Node.js. No build step required.

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set the root directory to `frontend`
5. Add environment variable: `VITE_API_URL` = your backend URL
6. Deploy!

### Backend Deployment (Render/Railway)

#### Using Render:
1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set root directory to `backend`
4. Add environment variables from `.env`
5. Deploy!

#### Using Railway:
1. Create a new project on [Railway](https://railway.app)
2. Deploy from GitHub
3. Set root directory to `backend`
4. Add environment variables
5. Deploy!

## 📝 API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Body: `{ name: string, email: string, message: string }`
  - Response: `{ message: string, data: object }`

### Projects
- **GET** `/api/projects`
  - Response: `Array of project objects`

### Health Check
- **GET** `/api/health`
  - Response: `{ status: 'OK', message: 'Server is running' }`

## 🎨 Customization

### Adding Your Resume PDF
1. Place your resume PDF in `frontend/public/resume.pdf`
2. The download button will automatically work

### Updating Projects
1. If using MongoDB: Add projects through the database
2. If not using MongoDB: Edit `backend/routes/projects.js` default projects array

### Styling
- Edit `frontend/src/index.css` for global styles
- Edit `frontend/tailwind.config.js` for Tailwind configuration
- Components use Tailwind CSS classes

## 📄 License

This project is created for MaVionix Web Developer Intern assignment.

## 👤 Author

**Nilesh Kumar**
- Email: nileshsahu8674@gmail.com
- Phone: +91 8674892407
- Location: Bengaluru, Karnataka, India

---

**Note:** Make sure to update the GitHub and LinkedIn links in the Footer component with your actual profile URLs.

