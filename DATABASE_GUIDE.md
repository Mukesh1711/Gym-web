# 📊 Database Access & Management Guide

## Complete Guide to Accessing and Managing the FitForce Gym Database

This guide covers all methods to access, manage, and query the MongoDB database for the FitForce Gym application.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Database Connection Methods](#database-connection-methods)
3. [Step-by-Step Access Guide](#step-by-step-access-guide)
4. [Database Queries](#database-queries)
5. [CRUD Operations](#crud-operations)
6. [Data Backup & Export](#data-backup--export)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### What You Need

- ✅ MongoDB installed locally OR MongoDB Cloud Atlas account
- ✅ MongoDB Shell (mongosh) - comes with MongoDB
- ✅ MongoDB Compass (optional but recommended) - GUI tool
- ✅ Postman (optional) - for API testing
- ✅ Node.js and npm installed

### Installation Commands

```bash
# Windows: Download from https://www.mongodb.com/try/download/community
# macOS: 
brew tap mongodb/brew
brew install mongodb-community

# Linux (Ubuntu):
sudo apt-get update
sudo apt-get install -y mongodb
```

---

## Database Connection Methods

### METHOD 1: MongoDB Shell (Command Line)

#### What You're Doing
Using MongoDB's native command-line interface to directly interact with your database.

#### Pros & Cons
✅ Most direct access
✅ Full control
✅ No dependencies
❌ Requires terminal knowledge
❌ No GUI

#### Steps to Access

```bash
# Step 1: Start MongoDB Service
# Windows - In new terminal:
mongod

# macOS:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod

# Step 2: Open MongoDB Shell (in another terminal)
mongosh

# Step 3: You should see:
# Current Mongosh Log ID: ...
# Connecting to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000
# Implicit session started with database 'test'
# ...

# Step 4: List all databases
show databases

# Step 5: Connect to gym database
use gym-management

# Step 6: See all collections
show collections

# Step 7: You're now in the database!
```

#### Basic Commands in MongoDB Shell

```bash
# VIEW ALL DOCUMENTS
db.members.find()           # Shows all members
db.classes.find()           # Shows all classes
db.pricings.find()          # Shows all pricing plans

# PRETTY PRINT (more readable)
db.members.find().pretty()

# COUNT DOCUMENTS
db.members.countDocuments()

# FIND SPECIFIC DOCUMENT
db.members.findOne({ email: "john@example.com" })

# FIND WITH CONDITIONS
db.members.find({ status: "Active" })
db.members.find({ membershipType: "Premium" })
db.classes.find({ difficulty: "Beginner" })

# INSERT NEW MEMBER
db.members.insertOne({
  name: "Alex Johnson",
  email: "alex@example.com",
  phone: "555-0123",
  membershipType: "Premium",
  status: "Active",
  age: 25,
  gender: "Male",
  goal: "Build muscle"
})

# UPDATE MEMBER
db.members.updateOne(
  { email: "john@example.com" },
  { $set: { membershipType: "Elite" } }
)

# DELETE MEMBER
db.members.deleteOne({ email: "john@example.com" })

# EXIT
exit()
```

---

### METHOD 2: MongoDB Compass (Visual GUI)

#### What You're Doing
Using a visual interface to browse and manage your database without typing commands.

#### Pros & Cons
✅ User-friendly GUI
✅ Visual data inspection
✅ Easy CRUD operations
✅ Query builder
❌ Separate download required
❌ More memory usage

#### Installation & Setup

```bash
# Download from:
# https://www.mongodb.com/products/compass

# Installation:
# Windows: Run .msi installer
# macOS: Run .dmg installer
# Linux: Run .deb or .rpm

# After installation, launch MongoDB Compass
```

#### Step-by-Step Access

1. **Launch MongoDB Compass**
   - Open the application from your start menu/applications

2. **Connect to Local MongoDB**
   - Connection String: `mongodb://localhost:27017`
   - Click "Connect"
   - Wait for connection to establish

3. **Browse Databases**
   - Left sidebar shows all databases
   - Click on `gym-management` database

4. **Select Collection**
   - Click on `members` or `classes` or `pricings`
   - You'll see all documents in that collection

5. **View Documents**
   - Each row = one document
   - Click on any row to expand and view full details

6. **Add New Document**
   - Click the "+" icon
   - Type JSON data
   - Click "Insert"

7. **Edit Document**
   - Click on a field to edit
   - Changes save automatically

8. **Delete Document**
   - Right-click document
   - Select "Delete"

#### Visual Query Examples in Compass

```javascript
// Find all active members (enter in query box)
{ status: "Active" }

// Find members with Premium membership
{ membershipType: "Premium" }

// Find classes by difficulty
{ difficulty: "Beginner" }

// Find members by email
{ email: "john@example.com" }
```

---

### METHOD 3: MongoDB Atlas Web Interface (Cloud)

#### What You're Doing
If using MongoDB Cloud, managing your database through the web browser.

#### How to Access

1. **Go to MongoDB Atlas**
   - Visit: https://www.mongodb.com/cloud/atlas

2. **Sign In**
   - Use your MongoDB account

3. **Select Your Project**
   - Click on your gym-management cluster

4. **View Data**
   - Click "Collections" tab
   - Browse by database and collection

5. **Edit Data**
   - Use the built-in editor
   - Make changes directly in browser

---

### METHOD 4: Via REST API (Using Postman/cURL)

#### What You're Doing
Accessing database through the backend API endpoints.

#### Prerequisites
- Backend server must be running (`npm start` in backend folder)
- Postman installed (https://www.postman.com/downloads/)

#### API Endpoints

```bash
# GET ALL MEMBERS
GET http://localhost:5000/api/members

# GET SINGLE MEMBER
GET http://localhost:5000/api/members/[id]

# CREATE NEW MEMBER
POST http://localhost:5000/api/members
Body (JSON):
{
  "name": "New Member",
  "email": "new@example.com",
  "phone": "555-0999",
  "membershipType": "Basic"
}

# UPDATE MEMBER
PUT http://localhost:5000/api/members/[id]
Body (JSON):
{
  "membershipType": "Premium"
}

# DELETE MEMBER
DELETE http://localhost:5000/api/members/[id]

# GET ALL CLASSES
GET http://localhost:5000/api/classes

# GET ALL PRICING
GET http://localhost:5000/api/pricing

# HEALTH CHECK
GET http://localhost:5000/api/health
```

#### Using Postman

1. **Create New Request**
   - Click "+" to create new tab
   - Method: GET
   - URL: `http://localhost:5000/api/members`
   - Click "Send"
   - See all members in response

2. **Create New Member**
   - Method: POST
   - URL: `http://localhost:5000/api/members`
   - Headers: `Content-Type: application/json`
   - Body:
   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "phone": "555-1234",
     "membershipType": "Basic"
   }
   ```
   - Click "Send"

---

### METHOD 5: Using Node.js Script

#### What You're Doing
Creating a JavaScript file to programmatically interact with the database.

#### Example Script

Create `backend/queryDatabase.js`:

```javascript
const mongoose = require('mongoose');
const Member = require('./models/Member');
const Class = require('./models/Class');
const Pricing = require('./models/Pricing');

// Connect to database
mongoose.connect('mongodb://localhost:27017/gym-management');

async function queryDatabase() {
  try {
    console.log('📊 FETCHING DATA...\n');

    // Get all members
    const members = await Member.find();
    console.log('👥 MEMBERS:', members);

    // Get all classes
    const classes = await Class.find();
    console.log('\n📚 CLASSES:', classes);

    // Get all pricing
    const pricing = await Pricing.find();
    console.log('\n💰 PRICING PLANS:', pricing);

    // Get active members only
    const activeMembers = await Member.find({ status: "Active" });
    console.log('\n✅ ACTIVE MEMBERS:', activeMembers);

    // Get count
    const memberCount = await Member.countDocuments();
    console.log('\n📊 TOTAL MEMBERS:', memberCount);

    console.log('\n✅ Query completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

queryDatabase();
```

Run it:
```bash
node backend/queryDatabase.js
```

---

## Step-by-Step Access Guide

### Quick Start (Easiest Method)

#### Using MongoDB Compass (Recommended)

**Step 1: Install MongoDB Compass**
```
Go to: https://www.mongodb.com/products/compass
Download for your OS
Run installer
```

**Step 2: Start MongoDB Service**
- Windows: Run `mongod` in terminal
- macOS: `brew services start mongodb-community`

**Step 3: Open Compass**
- Launch Compass application
- It should auto-connect to `localhost:27017`

**Step 4: Navigate to Gym Database**
- Left sidebar → Click `gym-management`
- Click `members` collection
- You'll see all member data instantly!

**Step 5: Add/Edit/Delete Data**
- Edit: Click field and type
- Add: Click "+" icon, enter JSON
- Delete: Right-click, select delete

---

## Database Queries

### Common Queries Explained

#### Get All Members
```bash
# MongoDB Shell
db.members.find()

# Node.js/Mongoose
const members = await Member.find();

# Postman
GET http://localhost:5000/api/members
```
**Returns:** Array of all member documents

#### Find by Status
```bash
# MongoDB Shell
db.members.find({ status: "Active" })

# Node.js
const activeMembers = await Member.find({ status: "Active" });

# Postman
GET http://localhost:5000/api/members?status=Active
```
**Returns:** Only active members

#### Find by Membership Type
```bash
# MongoDB Shell
db.members.find({ membershipType: "Premium" })

# Node.js
const premiumMembers = await Member.find({ membershipType: "Premium" });
```
**Returns:** All Premium tier members

#### Count Documents
```bash
# MongoDB Shell
db.members.countDocuments()

# Node.js
const count = await Member.countDocuments();
```
**Returns:** Total number of members

#### Find with Multiple Conditions
```bash
# MongoDB Shell
db.members.find({ 
  status: "Active", 
  membershipType: "Premium" 
})

# Node.js
const members = await Member.find({ 
  status: "Active", 
  membershipType: "Premium" 
});
```
**Returns:** Active members with Premium membership

#### Sort Results
```bash
# MongoDB Shell
db.members.find().sort({ joinDate: -1 })  // Newest first

# Node.js
const members = await Member.find().sort({ joinDate: -1 });
```

#### Limit Results
```bash
# MongoDB Shell
db.members.find().limit(5)  // Get only 5

# Node.js
const members = await Member.find().limit(5);
```

---

## CRUD Operations

### CREATE (Insert)

```bash
# MongoDB Shell
db.members.insertOne({
  name: "John Doe",
  email: "john@example.com",
  phone: "555-0001",
  membershipType: "Premium",
  status: "Active",
  age: 28,
  gender: "Male",
  goal: "Build muscle"
})

# Via API
POST /api/members
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-0001",
  "membershipType": "Premium"
}

# Node.js
const member = new Member({
  name: "John Doe",
  email: "john@example.com",
  phone: "555-0001",
  membershipType: "Premium"
});
await member.save();
```

### READ (Query)

```bash
# MongoDB Shell
db.members.find()                    // All members
db.members.findOne({ _id: ObjectId(...) })  // One member
db.members.find({ status: "Active" })      // With condition

# Via API
GET /api/members                     // All
GET /api/members/[id]               // Single

# Node.js
const members = await Member.find();
const member = await Member.findById(id);
const active = await Member.find({ status: "Active" });
```

### UPDATE (Modify)

```bash
# MongoDB Shell
db.members.updateOne(
  { email: "john@example.com" },
  { $set: { membershipType: "Elite" } }
)

# Via API
PUT /api/members/[id]
{
  "membershipType": "Elite"
}

# Node.js
const member = await Member.findByIdAndUpdate(
  id,
  { membershipType: "Elite" },
  { new: true }
);
```

### DELETE (Remove)

```bash
# MongoDB Shell
db.members.deleteOne({ email: "john@example.com" })

# Via API
DELETE /api/members/[id]

# Node.js
await Member.findByIdAndDelete(id);
```

---

## Data Backup & Export

### Export Data to JSON

```bash
# MongoDB Shell - Export all members
mongoexport --db gym-management --collection members --out members.json

# Export specific query
mongoexport --db gym-management --collection members \
  --query '{ "status": "Active" }' \
  --out active_members.json

# Export to CSV
mongoexport --db gym-management --collection members \
  --csv --fields name,email,membershipType \
  --out members.csv
```

### Import Data from JSON

```bash
# MongoDB Shell - Import file
mongoimport --db gym-management --collection members --file members.json

# Import with replace
mongoimport --db gym-management --collection members \
  --file members.json --upsert
```

### Backup Entire Database

```bash
# Create backup
mongodump --db gym-management --out ./backup

# Restore backup
mongorestore --db gym-management ./backup/gym-management
```

---

## Troubleshooting

### Connection Issues

**Error: "connect ECONNREFUSED"**
```
Problem: MongoDB server not running

Solution:
1. Start MongoDB:
   mongod (Windows)
   brew services start mongodb-community (macOS)
   sudo systemctl start mongod (Linux)

2. Verify running:
   mongosh --eval "db.version()"
```

**Error: "MongoError: connect ECONNREFUSED"**
```
Problem: Wrong connection string

Solution:
1. Check .env file
2. Verify MONGODB_URI is correct
3. Confirm port (usually 27017)
```

### Authentication Issues

**Error: "authentication failed"**
```
Problem: Wrong username/password for MongoDB Atlas

Solution:
1. Go to MongoDB Atlas
2. Check credentials
3. Update .env with correct string:
   MONGODB_URI=mongodb+srv://user:password@cluster.database.mongodb.net/gym-management
```

### Data Issues

**Lost Data**
```
Solution:
1. Check backup files
   mongodump --db gym-management
2. Restore from backup
   mongorestore --db gym-management ./backup/gym-management
```

**Duplicate Emails**
```
Solution:
1. Find duplicates:
   db.members.countDocuments()
   db.members.find({ email: "test@example.com" })

2. Remove duplicate:
   db.members.deleteOne({ email: "test@example.com", _id: ObjectId(...) })

3. Add unique constraint:
   db.members.createIndex({ email: 1 }, { unique: true })
```

---

## Summary: Quick Reference

### View Your Data Instantly
```bash
# Terminal 1: Start MongoDB
mongod

# Terminal 2: Open MongoDB Shell
mongosh

# Terminal 3: Use commands
use gym-management
db.members.find().pretty()
```

### Update Data via API
```bash
# Start backend server
cd backend && npm start

# Use Postman or curl to modify data
POST http://localhost:5000/api/members
```

### Use Visual GUI
```
1. Open MongoDB Compass
2. Click gym-management database
3. Click members collection
4. Edit data directly in interface
```

---

**✅ You now have complete control over your gym database!**
