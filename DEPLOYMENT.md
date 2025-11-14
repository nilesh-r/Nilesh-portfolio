# Deployment Guide

This guide will help you deploy both the frontend and backend of your portfolio website.

## 📋 Prerequisites

- GitHub account
- Vercel account (for frontend)
- Render or Railway account (for backend)
- MongoDB Atlas account (optional, for database)

## 🚀 Frontend Deployment (Vercel)

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [Vercel](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add Environment Variable:
   - **Name:** `VITE_API_URL`
   - **Value:** Your backend URL (e.g., `https://your-backend.onrender.com`)
6. Click "Deploy"

### Step 3: Update Backend CORS

After getting your Vercel URL, update the backend CORS settings to allow your frontend domain.

## 🖥️ Backend Deployment (Render)

### Step 1: Prepare Backend

Make sure your `backend/.env` file has all required variables (don't commit this file).

### Step 2: Deploy on Render

1. Go to [Render](https://render.com) and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name:** portfolio-backend
   - **Environment:** Node
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add Environment Variables:
   - `PORT` = `10000` (Render uses this port)
   - `MONGODB_URI` = Your MongoDB connection string
   - `EMAIL_USER` = Your email (optional)
   - `EMAIL_PASS` = Your app password (optional)
   - `NODE_ENV` = `production`
6. Click "Create Web Service"

### Step 3: Update Frontend API URL

After deployment, update your Vercel environment variable `VITE_API_URL` with the Render URL.

## 🖥️ Backend Deployment (Railway)

### Alternative to Render

1. Go to [Railway](https://railway.app) and sign in
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set root directory to `backend`
5. Add environment variables (same as Render)
6. Deploy!

## 🗄️ MongoDB Atlas Setup

### Step 1: Create Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier is fine)

### Step 2: Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database password
5. Add this to your backend `.env` as `MONGODB_URI`

### Step 3: Seed Database (Optional)

If you want to populate projects in the database:

```bash
cd backend
node scripts/seedProjects.js
```

## ✅ Post-Deployment Checklist

- [ ] Frontend is accessible and loads correctly
- [ ] Backend API is responding at `/api/health`
- [ ] Contact form submits successfully
- [ ] Projects page displays projects
- [ ] All links and navigation work
- [ ] Mobile responsiveness is working
- [ ] Dark/Light theme toggle works

## 🔧 Troubleshooting

### CORS Errors

If you see CORS errors, make sure:
- Backend CORS is configured to allow your frontend domain
- Environment variables are set correctly

### API Not Working

- Check backend logs on Render/Railway
- Verify `VITE_API_URL` is set correctly in Vercel
- Test backend health endpoint: `https://your-backend.onrender.com/api/health`

### Database Connection Issues

- Verify MongoDB Atlas IP whitelist includes `0.0.0.0/0` (all IPs)
- Check connection string is correct
- Ensure database user has proper permissions

## 📝 Notes

- The application works without MongoDB (uses default data)
- Email functionality is optional (requires Gmail app password)
- Always test locally before deploying
- Keep environment variables secure (never commit `.env` files)

