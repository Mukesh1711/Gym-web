# 🏋️ FitForce Gym - Professional Single Page Website

A modern, vibrant red and black themed gym website built with React, Node.js/Express backend, and MongoDB database. Features interactive components, responsive design, and professional enterprise-grade architecture.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Access & Management](#database-access--management)
- [Customization](#customization)
- [Deployment](#deployment)

---

## ✨ Features

### Frontend (React)
- ✅ Single Page Application (SPA) with smooth navigation
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Red and black vibrant theme with gradient effects
- ✅ Interactive React components with Hooks
- ✅ Real-time API integration with Axios
- ✅ Animated transitions and hover effects
- ✅ Hero section with call-to-action
- ✅ Classes/Services listing with expandable details
- ✅ Dynamic pricing calculator (monthly/annual toggle)
- ✅ Professional contact/membership form
- ✅ Footer with social links and information

### Backend (Node.js/Express)
- ✅ RESTful API architecture
- ✅ CORS enabled for frontend communication
- ✅ MongoDB integration with Mongoose ODM
- ✅ Models for Members, Classes, and Pricing
- ✅ CRUD operations for all entities
- ✅ Error handling and validation
- ✅ Environment configuration (.env)
- ✅ Scalable folder structure

### Database (MongoDB)
- ✅ MongoDB collections for Members, Classes, Pricing
- ✅ Schema validation and relationships
- ✅ Timestamps for tracking creation/updates
- ✅ Flexible and scalable data structure

---

## 🛠 Tech Stack

### Frontend
- **React 19.2** - UI library
- **Vite 7.3** - Build tool and dev server
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Router** - Navigation (ready for expansion)

### Backend
- **Node.js** - Runtime environment
- **Express 4.18** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.0** - MongoDB ODM
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

---

## 📁 Project Structure

```
gym-web/
├── src/                          # Frontend React code
│   ├── components/
│   │   ├── Header.jsx           # Navigation header with mobile menu
│   │   ├── Hero.jsx             # Hero section
│   │   ├── Services.jsx         # Classes display
│   │   ├── Pricing.jsx          # Pricing plans with toggle
│   │   ├── Contact.jsx          # Membership form
│   │   └── Footer.jsx           # Footer with links
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React DOM entry point
│   └── index.css                # Global styles + Tailwind
├── backend/                      # Node.js/Express server
│   ├── models/
│   │   ├── Member.js            # Member schema
│   │   ├── Class.js             # Class schema
│   │   └── Pricing.js           # Pricing schema
│   ├── routes/
│   │   ├── members.js           # Member endpoints
│   │   ├── classes.js           # Class endpoints
│   │   └── pricing.js           # Pricing endpoints
│   ├── controllers/
│   │   ├── memberController.js  # Member logic
│   │   ├── classController.js   # Class logic
│   │   └── pricingController.js # Pricing logic
│   ├── server.js                # Express server setup
│   ├── package.json             # Backend dependencies
│   ├── .env                     # Environment variables
│   └── .gitignore               # Git ignore rules
├── package.json                 # Frontend dependencies
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
├── index.html                   # HTML entry point
└── README.md                    # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local or cloud) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager
- **Git** (optional)

### Step 1: Frontend Setup

```bash
# Navigate to project directory
cd "gym-web 1"

# Install frontend dependencies
npm install

# This installs React, Tailwind CSS, Axios, and other packages
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# This installs Express, MongoDB, Mongoose, CORS, and other packages
```

### Step 3: MongoDB Setup

#### Option A: Local MongoDB Installation
```bash
# Install MongoDB Community Edition
# Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

# Start MongoDB service
# Windows: mongod (or use MongoDB Services in services.msc)
# macOS: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

#### Option B: MongoDB Cloud (Atlas) - Recommended
```bash
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Update .env file with your connection string
```

### Step 4: Environment Configuration

Edit `backend/.env`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/gym-management

# For MongoDB Atlas, use:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/gym-management?retryWrites=true&w=majority

# JWT Configuration (optional)
JWT_SECRET=your_secret_key_here_change_in_production
```

---

## 📊 Database Setup

### Manual Database Creation and Population

#### Method 1: Using MongoDB Shell
```bash
# Connect to MongoDB
mongosh

# Create database and collections
use gym-management

# Create Members collection with sample data
db.members.insertMany([
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "555-0001",
    membershipType: "Premium",
    status: "Active",
    age: 28,
    gender: "Male",
    goal: "Muscle building"
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "555-0002",
    membershipType: "Elite",
    status: "Active",
    age: 32,
    gender: "Female",
    goal: "Weight loss"
  }
])

# Create Classes collection
db.classes.insertMany([
  {
    name: "Strength Training",
    description: "Build muscle and strength",
    instructor: "John Smith",
    schedule: { day: "Monday", startTime: "06:00", endTime: "07:00" },
    maxCapacity: 30,
    difficulty: "Beginner",
    price: 50
  },
  {
    name: "HIIT Cardio",
    description: "High intensity interval training",
    instructor: "Sarah Johnson",
    schedule: { day: "Tuesday", startTime: "17:00", endTime: "18:00" },
    maxCapacity: 25,
    difficulty: "Advanced",
    price: 60
  }
])

# Create Pricing collection
db.pricings.insertMany([
  {
    planName: "Basic",
    monthlyPrice: 29,
    annualPrice: 290,
    features: ["Access to gym", "Basic equipment", "Email support"],
    description: "Perfect for beginners",
    isActive: true
  },
  {
    planName: "Premium",
    monthlyPrice: 59,
    annualPrice: 590,
    features: ["All Basic features", "Free classes", "Personal trainer consultation", "Priority support"],
    description: "Most popular",
    isActive: true
  },
  {
    planName: "Elite",
    monthlyPrice: 99,
    annualPrice: 990,
    features: ["All Premium features", "One-on-one coaching", "Nutrition plan", "24/7 priority support"],
    description: "For serious athletes",
    isActive: true
  }
])

# Verify data
db.members.find()
db.classes.find()
db.pricings.find()
```

#### Method 2: Using MongoDB Compass GUI
1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect to your MongoDB instance
3. Create new database: `gym-management`
4. Create collections: `members`, `classes`, `pricings`
5. Insert sample data using the GUI

#### Method 3: Using API (After Backend is Running)
```bash
# Create a member via API
curl -X POST http://localhost:5000/api/members \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-0001",
    "membershipType": "Premium"
  }'

# Create a class
curl -X POST http://localhost:5000/api/classes \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Strength Training",
    "instructor": "John Smith",
    "schedule": {
      "day": "Monday",
      "startTime": "06:00",
      "endTime": "07:00"
    },
    "difficulty": "Beginner",
    "price": 50
  }'

# Create pricing plan
curl -X POST http://localhost:5000/api/pricing \
  -H "Content-Type: application/json" \
  -d '{
    "planName": "Premium",
    "monthlyPrice": 59,
    "annualPrice": 590,
    "features": ["All Basic features", "Free classes", "Personal trainer consultation"],
    "description": "Most popular"
  }'
```

---

## 🎯 Running the Application

### Terminal 1: Start MongoDB
```bash
# Windows
mongod

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Verify it's running
mongosh --eval "db.version()"
```

### Terminal 2: Start Backend Server
```bash
cd backend
npm install
npm start

# Expected output:
# Server running on port 5000
# Connected to MongoDB
# MongoDB URL: mongodb://localhost:27017/gym-management
```

### Terminal 3: Start Frontend Dev Server
```bash
# Make sure you're in the root directory "gym-web 1"
npm install
npm run dev

# Expected output:
# VITE v7.3.1  ready in XXX ms
# Local:   http://localhost:5173/
```

### Access the Website
Open your browser and navigate to: **http://localhost:5173/**

---

## 📡 API Endpoints

### Members
```
GET    /api/members              # Get all members
GET    /api/members/:id          # Get single member
POST   /api/members              # Create new member
PUT    /api/members/:id          # Update member
DELETE /api/members/:id          # Delete member
```

### Classes
```
GET    /api/classes              # Get all classes
GET    /api/classes/:id          # Get single class
POST   /api/classes              # Create new class
PUT    /api/classes/:id          # Update class
DELETE /api/classes/:id          # Delete class
```

### Pricing
```
GET    /api/pricing              # Get all pricing plans
GET    /api/pricing/:id          # Get single pricing plan
POST   /api/pricing              # Create new pricing
PUT    /api/pricing/:id          # Update pricing
DELETE /api/pricing/:id          # Delete pricing
```

### Health Check
```
GET    /api/health               # Server status
```

---

## 💾 Database Access & Management

### Using MongoDB Compass

1. **Download & Install**: https://www.mongodb.com/products/compass
2. **Connect**:
   - Connection: `mongodb://localhost:27017`
   - Or use your Atlas connection string
3. **Browse Collections**: View all data in GUI
4. **Create/Edit/Delete**: Direct database manipulation
5. **Query Data**: Use the query syntax

### Using MongoDB Atlas Web Interface

1. **Create Account**: https://www.mongodb.com/cloud/atlas
2. **Create Cluster**: Set up free tier
3. **Collections Tab**: View all data
4. **CRUD Operations**: Use built-in tools
5. **Export Data**: Download CSV/JSON backups

### Using MongoDB Shell (Command Line)

```bash
# Start shell
mongosh

# Connect to database
use gym-management

# GET (Read) Operations
db.members.find()                          # Get all members
db.members.findOne({ email: "john@example.com" })
db.members.find({ status: "Active" })
db.members.countDocuments()               # Count total members

# POST/INSERT Operations
db.members.insertOne({ name: "Jane", email: "jane@example.com" })
db.members.insertMany([{ ... }, { ... }]) # Insert multiple

# PUT/UPDATE Operations
db.members.updateOne(
  { email: "john@example.com" },
  { $set: { membershipType: "Elite" } }
)
db.members.updateMany(
  { status: "Active" },
  { $set: { updatedAt: new Date() } }
)

# DELETE Operations
db.members.deleteOne({ email: "john@example.com" })
db.members.deleteMany({ status: "Inactive" })

# AGGREGATION (Advanced Queries)
db.members.aggregate([
  { $match: { status: "Active" } },
  { $group: { _id: "$membershipType", count: { $sum: 1 } } }
])

# VIEW Indexes
db.members.getIndexes()

# DROP Collection
db.members.drop()

# EXIT
exit()
```

### Using Node.js Script

Create `backend/seedDatabase.js`:

```javascript
const mongoose = require('mongoose');
const Member = require('./models/Member');
const Class = require('./models/Class');
const Pricing = require('./models/Pricing');

mongoose.connect('mongodb://localhost:27017/gym-management');

async function seedDatabase() {
  try {
    // Clear existing data
    await Member.deleteMany();
    await Class.deleteMany();
    await Pricing.deleteMany();

    // Create members
    const members = await Member.insertMany([
      {
        name: "John Doe",
        email: "john@example.com",
        phone: "555-0001",
        membershipType: "Premium",
        status: "Active"
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "555-0002",
        membershipType: "Elite",
        status: "Active"
      }
    ]);

    console.log('✅ Members created:', members.length);

    // Create classes
    const classes = await Class.insertMany([
      {
        name: "Strength Training",
        instructor: "John Smith",
        schedule: { day: "Monday", startTime: "06:00", endTime: "07:00" },
        difficulty: "Beginner",
        price: 50
      },
      {
        name: "HIIT Cardio",
        instructor: "Sarah Johnson",
        schedule: { day: "Tuesday", startTime: "17:00", endTime: "18:00" },
        difficulty: "Advanced",
        price: 60
      }
    ]);

    console.log('✅ Classes created:', classes.length);

    // Create pricing
    const pricing = await Pricing.insertMany([
      {
        planName: "Basic",
        monthlyPrice: 29,
        annualPrice: 290,
        features: ["Access to gym", "Basic equipment", "Email support"],
        description: "Perfect for beginners"
      },
      {
        planName: "Premium",
        monthlyPrice: 59,
        annualPrice: 590,
        features: ["All Basic features", "Free classes", "Personal trainer consultation"],
        description: "Most popular"
      },
      {
        planName: "Elite",
        monthlyPrice: 99,
        annualPrice: 990,
        features: ["All Premium features", "One-on-one coaching", "Nutrition plan"],
        description: "For serious athletes"
      }
    ]);

    console.log('✅ Pricing plans created:', pricing.length);
    
    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
```

Then run:
```bash
node backend/seedDatabase.js
```

---

## 🎨 Customization

### Change Color Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',    // Change main color
      dark: '#YOUR_DARK_COLOR',  // Change dark background
      accent: '#YOUR_ACCENT',    // Change accent color
    },
  },
}
```

### Update Gym Information

Edit `src/components/Footer.jsx`:
- Change gym name, address, phone
- Update social media links
- Modify hours of operation

### Add New Pages/Routes

1. Create new component in `src/components/`
2. Import in `App.jsx`
3. Add route using React Router (setup ready)

### Backend Customization

1. Add new models in `backend/models/`
2. Create controllers in `backend/controllers/`
3. Define routes in `backend/routes/`
4. Register routes in `backend/server.js`

---

## 📦 Deployment

### Frontend Deployment (Vercel)

```bash
# Build React app
npm run build

# Deploy to Vercel
npm install -g vercel
vercel
```

### Backend Deployment (Heroku/Railway)

```bash
# Create account on Heroku or Railway
# Connect your repository
# Set environment variables
# Deploy

# Update MongoDB_URI to cloud version
# Update VITE API URL in src/App.jsx
```

### Using Docker

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_DATABASE: gym-management

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      MONGODB_URI: mongodb://mongodb:27017/gym-management
    depends_on:
      - mongodb

  frontend:
    build: .
    ports:
      - "5173:5173"
    depends_on:
      - backend
```

Run: `docker-compose up`

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017

Solution:
1. Make sure MongoDB is running
2. Check connection string in .env
3. Verify database name is correct
```

### CORS Error
```
Error: Access to XMLHttpRequest has been blocked by CORS policy

Solution:
- Backend already has CORS enabled
- Check API URL in src/App.jsx matches backend port
```

### Module Not Found
```
Error: Module 'express' not found

Solution:
cd backend
npm install
```

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000

Solution:
# Find process using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Express.js Docs](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Mongoose Docs](https://mongoosejs.com)
- [Vite Guide](https://vitejs.dev)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👥 Support

For issues and questions:
1. Check troubleshooting section
2. Review console for error messages
3. Verify all services are running
4. Check .env file configuration

---

**Built with ❤️ for fitness enthusiasts worldwide**
