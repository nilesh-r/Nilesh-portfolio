# Portfolio Backend

Node.js/Express backend API for the portfolio website.

## Quick Start

```bash
npm install
npm start
```

Server runs on `http://localhost:5000`

## Environment Variables

Create a `.env` file:
```
PORT=5000
MONGODB_URI=your-mongodb-connection-string
EMAIL_USER=your-email@gmail.com (optional)
EMAIL_PASS=your-app-password (optional)
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/projects` - Get all projects
- `GET /api/health` - Health check

