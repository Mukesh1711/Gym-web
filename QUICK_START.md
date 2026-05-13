# 🚀 Quick Start Guide - FitForce Gym Website

Get the website up and running in 5 minutes!

---

## ⚡ Super Quick (5 Minutes)

### 1️⃣ Open Terminal 1: Start MongoDB
```bash
mongod
```
(Keep this running)

### 2️⃣ Open Terminal 2: Start Backend
```bash
cd backend
npm install
npm start
```
You should see: `Server running on port 5000`

### 3️⃣ Open Terminal 3: Start Frontend
```bash
npm install
npm run dev
```
You should see: `Local: http://localhost:5173/`

### 4️⃣ Open Browser
🌐 Go to: **http://localhost:5173/**

✅ **Done!** Your gym website is live!

---

## 📋 First Time Setup (10 Minutes)

### Before You Start
- ✅ Node.js installed? [Download here](https://nodejs.org/)
- ✅ MongoDB installed? [Download here](https://www.mongodb.com/try/download/community)

### Step 1: Install Dependencies (2 min)

```bash
# Frontend dependencies
npm install

# Backend dependencies
cd backend
npm install
cd ..
```

### Step 2: Start MongoDB (1 min)

```bash
# Windows/Mac/Linux
mongod
```

### Step 3: Start Backend (1 min)

```bash
cd backend
npm start
```

Expected output:
```
Server running on port 5000
Connected to MongoDB
```

### Step 4: Start Frontend (1 min)

```bash
npm run dev
```

Expected output:
```
VITE v7.3.1  ready in XXX ms
Local: http://localhost:5173/
```

### Step 5: View Website (1 min)

Open browser → `http://localhost:5173/`

---

## 🌐 Accessing Your Website

### Local Development
- **Frontend:** http://localhost:5173/
- **Backend API:** http://localhost:5000/
- **Database:** MongoDB on localhost:27017

### What You Can Do
✅ View gym classes and pricing
✅ Fill out membership form
✅ See all sections (Hero, Services, Pricing, Contact, Footer)
✅ Responsive design (test on mobile too!)

### Backend APIs Available
```
GET  http://localhost:5000/api/members
POST http://localhost:5000/api/members
GET  http://localhost:5000/api/classes
GET  http://localhost:5000/api/pricing
GET  http://localhost:5000/api/health
```

---

## 💾 Access Your Database

### Option A: Visual GUI (Easiest)

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Open it
3. It auto-connects to `localhost:27017`
4. Click `gym-management` → browse data
5. Edit/add/delete records directly!

### Option B: Command Line

```bash
# Open MongoDB Shell
mongosh

# Select database
use gym-management

# See all members
db.members.find().pretty()

# See all classes
db.classes.find().pretty()

# See all pricing
db.pricings.find().pretty()
```

### Option C: REST API

```bash
# Get all members
curl http://localhost:5000/api/members

# Get all classes
curl http://localhost:5000/api/classes

# Get pricing
curl http://localhost:5000/api/pricing

# Add new member
curl -X POST http://localhost:5000/api/members \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","phone":"555-1234","membershipType":"Basic"}'
```

---

## 🔧 Stop Everything

### Press Ctrl+C in each terminal

```bash
# Terminal 1: MongoDB
Ctrl+C

# Terminal 2: Backend
Ctrl+C

# Terminal 3: Frontend
Ctrl+C
```

---

## 🎨 Customize Your Website

### Change Colors (Red & Black Theme)

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#CC5555',        // Red
  dark: '#1A1A1A',          // Black
  accent: '#FF6B6B',        // Bright Red
}
```

### Change Gym Information

Edit `src/components/Footer.jsx`:
- Gym name
- Address
- Phone number
- Social media

### Add Your Own Classes

```bash
mongosh
use gym-management

# Add class
db.classes.insertOne({
  name: "Your Class Name",
  instructor: "Instructor Name",
  schedule: { day: "Monday", startTime: "08:00", endTime: "09:00" },
  difficulty: "Beginner",
  price: 50
})
```

The website will automatically load it!

---

## 🆘 Common Issues

### "Port already in use"
```bash
# Kill the process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

### "MongoDB connection refused"
```bash
# Start MongoDB
mongod
```

### "Cannot find module"
```bash
# Reinstall dependencies
cd backend
npm install
cd ..
npm install
```

### "API not responding"
```bash
# Check if backend is running
# Terminal should show:
# Server running on port 5000
# Connected to MongoDB

# Restart if needed:
cd backend
npm start
```

---

## 📊 Sample Data Included

When you first run the app, you get default data:

### Classes Available
- ✅ Strength Training
- ✅ HIIT Cardio
- ✅ Yoga & Flexibility
- ✅ CrossFit

### Pricing Plans
- ✅ Basic ($29/mo)
- ✅ Premium ($59/mo)
- ✅ Elite ($99/mo)

### Database
- ✅ Automatically connects to `gym-management` database
- ✅ Creates collections on first use
- ✅ Add more data anytime via API or MongoDB

---

## 📚 Full Documentation

For detailed setup, advanced customization, and deployment:
- See `README.md` - Full documentation
- See `DATABASE_GUIDE.md` - Complete database guide
- Check `backend/.env` - Configuration

---

## ✨ Features You Have

### Your Website Includes:
- ✅ Professional red & black theme
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive React components
- ✅ Real API backend
- ✅ MongoDB database
- ✅ Beautiful animations
- ✅ Contact form
- ✅ Pricing calculator
- ✅ Member management

### Your Backend Includes:
- ✅ RESTful APIs
- ✅ Database models
- ✅ Error handling
- ✅ CORS enabled
- ✅ Environment config

### Your Database Includes:
- ✅ Members collection
- ✅ Classes collection
- ✅ Pricing collection
- ✅ Full CRUD operations

---

## 🚀 What's Next?

1. **Add more features:**
   - Authentication/login
   - Payment processing
   - Email notifications
   - Admin dashboard

2. **Deploy online:**
   - Frontend: Vercel, Netlify
   - Backend: Heroku, Railway
   - Database: MongoDB Atlas

3. **Customize:**
   - Change colors
   - Add your gym details
   - Add more classes
   - Modify pricing

4. **Scale up:**
   - Add more models
   - Create admin panel
   - Add user authentication
   - Integrate payments

---

## 💡 Pro Tips

✅ **Keep tabs organized:**
- Tab 1: MongoDB
- Tab 2: Backend terminal  
- Tab 3: Frontend terminal
- Tab 4: Browser at localhost:5173

✅ **Use MongoDB Compass:**
- Much easier than terminal commands
- Visual data management
- Quick testing

✅ **Test with Postman:**
- Download free version
- Test all API endpoints
- Keep requests organized

✅ **Hot reload development:**
- Vite auto-reloads on code change
- Backend needs manual restart
- MongoDB runs in background

---

## 🎓 Learning Resources

- [React Tutorial](https://react.dev)
- [MongoDB Basics](https://docs.mongodb.com/manual/introduction/)
- [Express.js Guide](https://expressjs.com)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

**🎉 Congratulations! Your FitForce Gym website is ready!**

### Next Steps:
1. Explore all sections of the website
2. Test the membership form
3. Add your own gym information
4. Deploy it live!

Need help? Check the troubleshooting section above or see README.md for detailed documentation.

**Happy coding! 💪**
