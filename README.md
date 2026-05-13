# 🏋️ Gym Web

A clean single-page gym website built with React for the frontend and Express for the backend. The backend uses file-based JSON storage for member data, and the frontend consumes API endpoints for classes, pricing, and member management.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Notes](#notes)

---

## ✨ Features

- SPA frontend built with React and Vite
- Responsive gym landing page with hero, services, pricing, and contact sections
- File-based backend API using Express and JSON storage
- Member CRUD endpoints for signup and management
- Mock classes and pricing data served from the API
- CORS support for frontend/backend communication

---

## 🛠 Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- Express
- Node.js
- CORS
- dotenv

---

## 📁 Project Structure

```
gym-web/
├── backend/                   # Express API server
│   ├── controllers/           # Business logic for endpoints
│   ├── data/                  # JSON storage for members
│   ├── routes/                # API route definitions
│   ├── server.js              # Express server entrypoint
│   └── package.json           # Backend dependencies
├── public/                    # Public assets
├── src/                       # React frontend source
│   ├── components/            # UI components
│   ├── App.jsx                # Main React app
│   ├── main.jsx               # Frontend entrypoint
│   └── index.css              # Global styles
├── package.json               # Frontend dependencies
├── postcss.config.js          # PostCSS config
├── tailwind.config.js         # Tailwind config
├── vite.config.js             # Vite config
└── README.md                  # Project documentation
```

---

## 🚀 Installation

### 1. Install Frontend Dependencies

```bash
cd "gym-web 1"
npm install
```

### 2. Install Backend Dependencies

```bash
cd "gym-web 1"\backend
npm install
```

---

## ▶️ Running the App

### Start the Backend

```bash
cd "gym-web 1"\backend
npm run dev
```

This starts the Express server on `http://localhost:5000` by default.

### Start the Frontend

```bash
cd "gym-web 1"
npm run dev
```

Open the frontend in your browser at the Vite URL shown in the terminal, typically `http://localhost:5173`.

---

## 📡 API Endpoints

### Member Endpoints
- `GET /api/members` — Return all members
- `GET /api/members/:id` — Return a member by ID
- `POST /api/members` — Create a new member
- `PUT /api/members/:id` — Update a member
- `DELETE /api/members/:id` — Delete a member
- `GET /api/members/dashboard/view` — View raw JSON member storage

### Additional Endpoints
- `GET /api/classes` — Mock classes data
- `GET /api/pricing` — Mock pricing data
- `GET /api/health` — Health check

---

## 📝 Notes

- Backend member data is stored in `backend/data/members.json`.
- No external database is required for the current implementation.
- For production, you can replace file-based storage with MongoDB or another database.

---

## 💡 Next Improvements

If you want, I can also add:
- a polished project description and screenshots
- a `LICENSE` file
- deployment instructions for GitHub Pages, Vercel, or Netlify
- CI workflow for GitHub Actions
