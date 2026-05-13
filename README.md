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



