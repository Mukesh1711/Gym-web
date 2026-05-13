# 📡 API Documentation - FitForce Gym Backend

Complete API reference for the FitForce Gym backend server.

---

## 🎯 Base URL

```
http://localhost:5000
```

## 📝 Response Format

All responses are in JSON format.

### Success Response
```json
{
  "data": { /* requested data */ },
  "status": 200,
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "message": "Error description",
  "error": { /* error details */ },
  "status": 400
}
```

---

## 👥 MEMBERS ENDPOINTS

### Get All Members
```
GET /api/members
```

**Description:** Retrieve all gym members

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-0001",
    "membershipType": "Premium",
    "status": "Active",
    "age": 28,
    "gender": "Male",
    "goal": "Build muscle",
    "joinDate": "2024-01-15T10:30:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "555-0002",
    "membershipType": "Elite",
    "status": "Active",
    "age": 32,
    "gender": "Female",
    "goal": "Weight loss",
    "joinDate": "2024-02-01T14:20:00.000Z",
    "createdAt": "2024-02-01T14:20:00.000Z",
    "updatedAt": "2024-02-01T14:20:00.000Z"
  }
]
```

---

### Get Single Member
```
GET /api/members/:id
```

**Parameters:**
- `id` (required): MongoDB ObjectId of the member

**Example:**
```
GET /api/members/507f1f77bcf86cd799439011
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-0001",
  "membershipType": "Premium",
  "status": "Active",
  "age": 28,
  "gender": "Male",
  "goal": "Build muscle",
  "joinDate": "2024-01-15T10:30:00.000Z",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Error (404):**
```json
{
  "message": "Member not found"
}
```

---

### Create Member
```
POST /api/members
```

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "phone": "555-0003",
  "membershipType": "Basic",
  "age": 25,
  "gender": "Female",
  "goal": "Get fit",
  "emergencyContact": "555-0099"
}
```

**Required Fields:**
- `name` (string): Member's full name
- `email` (string): Unique email address
- `phone` (string): Contact phone number

**Optional Fields:**
- `membershipType` (string): Basic, Premium, or Elite (default: Basic)
- `age` (number): Member's age
- `gender` (string): Male, Female, or Other
- `goal` (string): Fitness goal
- `emergencyContact` (string): Emergency contact number

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "phone": "555-0003",
  "membershipType": "Basic",
  "status": "Active",
  "age": 25,
  "gender": "Female",
  "goal": "Get fit",
  "joinDate": "2024-02-16T15:45:00.000Z",
  "createdAt": "2024-02-16T15:45:00.000Z",
  "updatedAt": "2024-02-16T15:45:00.000Z"
}
```

**Error (400):**
```json
{
  "message": "Name is required",
  "error": "ValidationError"
}
```

---

### Update Member
```
PUT /api/members/:id
```

**Parameters:**
- `id` (required): MongoDB ObjectId of the member

**Content-Type:** `application/json`

**Request Body (any fields to update):**
```json
{
  "membershipType": "Elite",
  "status": "Active",
  "age": 29
}
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-0001",
  "membershipType": "Elite",
  "status": "Active",
  "age": 29,
  "gender": "Male",
  "goal": "Build muscle",
  "joinDate": "2024-01-15T10:30:00.000Z",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-02-16T16:00:00.000Z"
}
```

---

### Delete Member
```
DELETE /api/members/:id
```

**Parameters:**
- `id` (required): MongoDB ObjectId of the member

**Response (200):**
```json
{
  "message": "Member deleted successfully"
}
```

**Error (404):**
```json
{
  "message": "Member not found"
}
```

---

## 📚 CLASSES ENDPOINTS

### Get All Classes
```
GET /api/classes
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439020",
    "name": "Strength Training",
    "description": "Build muscle and strength",
    "instructor": "John Smith",
    "schedule": {
      "day": "Monday",
      "startTime": "06:00",
      "endTime": "07:00"
    },
    "maxCapacity": 30,
    "currentEnrollment": 25,
    "difficulty": "Beginner",
    "price": 50,
    "createdAt": "2024-01-10T08:00:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439021",
    "name": "HIIT Cardio",
    "description": "High intensity interval training",
    "instructor": "Sarah Johnson",
    "schedule": {
      "day": "Tuesday",
      "startTime": "17:00",
      "endTime": "18:00"
    },
    "maxCapacity": 25,
    "currentEnrollment": 20,
    "difficulty": "Advanced",
    "price": 60,
    "createdAt": "2024-01-10T08:00:00.000Z"
  }
]
```

---

### Get Single Class
```
GET /api/classes/:id
```

**Parameters:**
- `id` (required): MongoDB ObjectId of the class

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439020",
  "name": "Strength Training",
  "description": "Build muscle and strength",
  "instructor": "John Smith",
  "schedule": {
    "day": "Monday",
    "startTime": "06:00",
    "endTime": "07:00"
  },
  "maxCapacity": 30,
  "currentEnrollment": 25,
  "difficulty": "Beginner",
  "price": 50,
  "createdAt": "2024-01-10T08:00:00.000Z"
}
```

---

### Create Class
```
POST /api/classes
```

**Request Body:**
```json
{
  "name": "Yoga & Flexibility",
  "description": "Improve flexibility and reduce stress",
  "instructor": "Mike Davis",
  "schedule": {
    "day": "Wednesday",
    "startTime": "18:00",
    "endTime": "19:30"
  },
  "maxCapacity": 40,
  "difficulty": "Beginner",
  "price": 40
}
```

**Required Fields:**
- `name` (string): Class name
- `instructor` (string): Instructor name

**Optional Fields:**
- `description` (string): Class description
- `schedule` (object): Day, start time, end time
  - `day` (string): Day of week
  - `startTime` (string): Time in HH:MM format
  - `endTime` (string): Time in HH:MM format
- `maxCapacity` (number): Max members allowed (default: 30)
- `currentEnrollment` (number): Current enrolled members (default: 0)
- `difficulty` (string): Beginner, Intermediate, or Advanced
- `price` (number): Class price per month

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439022",
  "name": "Yoga & Flexibility",
  "description": "Improve flexibility and reduce stress",
  "instructor": "Mike Davis",
  "schedule": {
    "day": "Wednesday",
    "startTime": "18:00",
    "endTime": "19:30"
  },
  "maxCapacity": 40,
  "currentEnrollment": 0,
  "difficulty": "Beginner",
  "price": 40,
  "createdAt": "2024-02-16T16:15:00.000Z"
}
```

---

### Update Class
```
PUT /api/classes/:id
```

**Request Body (any fields to update):**
```json
{
  "price": 45,
  "maxCapacity": 35,
  "currentEnrollment": 5
}
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439020",
  "name": "Strength Training",
  "description": "Build muscle and strength",
  "instructor": "John Smith",
  "schedule": {
    "day": "Monday",
    "startTime": "06:00",
    "endTime": "07:00"
  },
  "maxCapacity": 35,
  "currentEnrollment": 5,
  "difficulty": "Beginner",
  "price": 45,
  "createdAt": "2024-01-10T08:00:00.000Z"
}
```

---

### Delete Class
```
DELETE /api/classes/:id
```

**Response (200):**
```json
{
  "message": "Class deleted successfully"
}
```

---

## 💰 PRICING ENDPOINTS

### Get All Pricing Plans
```
GET /api/pricing
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439030",
    "planName": "Basic",
    "monthlyPrice": 29,
    "annualPrice": 290,
    "features": [
      "Access to gym",
      "Basic equipment",
      "Email support"
    ],
    "description": "Perfect for beginners",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439031",
    "planName": "Premium",
    "monthlyPrice": 59,
    "annualPrice": 590,
    "features": [
      "All Basic features",
      "Free classes",
      "Personal trainer consultation",
      "Priority support"
    ],
    "description": "Most popular",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439032",
    "planName": "Elite",
    "monthlyPrice": 99,
    "annualPrice": 990,
    "features": [
      "All Premium features",
      "One-on-one coaching",
      "Nutrition plan",
      "24/7 priority support"
    ],
    "description": "For serious athletes",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

---

### Get Single Pricing Plan
```
GET /api/pricing/:id
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439031",
  "planName": "Premium",
  "monthlyPrice": 59,
  "annualPrice": 590,
  "features": [
    "All Basic features",
    "Free classes",
    "Personal trainer consultation",
    "Priority support"
  ],
  "description": "Most popular",
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

### Create Pricing Plan
```
POST /api/pricing
```

**Request Body:**
```json
{
  "planName": "Starter",
  "monthlyPrice": 19,
  "annualPrice": 190,
  "features": [
    "Basic gym access",
    "Email support"
  ],
  "description": "Great starter plan"
}
```

**Required Fields:**
- `planName` (string): Plan name (Basic, Premium, Elite, or custom)
- `monthlyPrice` (number): Monthly price
- `annualPrice` (number): Annual price

**Optional Fields:**
- `features` (array): Array of feature strings
- `description` (string): Plan description
- `isActive` (boolean): Is plan active (default: true)

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439033",
  "planName": "Starter",
  "monthlyPrice": 19,
  "annualPrice": 190,
  "features": [
    "Basic gym access",
    "Email support"
  ],
  "description": "Great starter plan",
  "isActive": true,
  "createdAt": "2024-02-16T16:30:00.000Z"
}
```

---

### Update Pricing Plan
```
PUT /api/pricing/:id
```

**Request Body:**
```json
{
  "monthlyPrice": 65,
  "annualPrice": 650
}
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439031",
  "planName": "Premium",
  "monthlyPrice": 65,
  "annualPrice": 650,
  "features": [
    "All Basic features",
    "Free classes",
    "Personal trainer consultation",
    "Priority support"
  ],
  "description": "Most popular",
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

### Delete Pricing Plan
```
DELETE /api/pricing/:id
```

**Response (200):**
```json
{
  "message": "Pricing plan deleted successfully"
}
```

---

## 🏥 UTILITY ENDPOINTS

### Health Check
```
GET /api/health
```

**Description:** Check if server is running and database is connected

**Response (200):**
```json
{
  "status": "Server is running",
  "timestamp": "2024-02-16T16:45:30.123Z"
}
```

---

## 🔍 Common Query Examples

### Using cURL

```bash
# Get all members
curl http://localhost:5000/api/members

# Get single member
curl http://localhost:5000/api/members/507f1f77bcf86cd799439011

# Create new member
curl -X POST http://localhost:5000/api/members \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Member",
    "email": "new@example.com",
    "phone": "555-9999",
    "membershipType": "Premium"
  }'

# Update member
curl -X PUT http://localhost:5000/api/members/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "membershipType": "Elite"
  }'

# Delete member
curl -X DELETE http://localhost:5000/api/members/507f1f77bcf86cd799439011

# Get all classes
curl http://localhost:5000/api/classes

# Get all pricing
curl http://localhost:5000/api/pricing

# Health check
curl http://localhost:5000/api/health
```

### Using JavaScript/Fetch

```javascript
// Get all members
const members = await fetch('http://localhost:5000/api/members')
  .then(res => res.json());

// Create new member
const newMember = await fetch('http://localhost:5000/api/members', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '555-0001',
    membershipType: 'Premium'
  })
}).then(res => res.json());

// Update member
const updated = await fetch('http://localhost:5000/api/members/507f...', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    membershipType: 'Elite'
  })
}).then(res => res.json());

// Delete member
await fetch('http://localhost:5000/api/members/507f...', {
  method: 'DELETE'
});
```

### Using Axios

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Get all members
const members = await api.get('/members');

// Create member
const newMember = await api.post('/members', {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '555-0001',
  membershipType: 'Premium'
});

// Update member
const updated = await api.put('/members/507f...', {
  membershipType: 'Elite'
});

// Delete member
await api.delete('/members/507f...');
```

---

## 📊 Status Codes

| Code | Meaning | Example |
|------|---------|---------|
| 200 | OK | Request successful |
| 201 | Created | New resource created |
| 400 | Bad Request | Invalid data sent |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Internal server error |

---

## 🔐 Best Practices

✅ **Always include Content-Type header for POST/PUT**
```
Content-Type: application/json
```

✅ **Validate input before sending**
- Email must be unique
- Required fields must be present
- Phone must be valid format

✅ **Handle errors gracefully**
```javascript
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
} catch (error) {
  console.error('API Error:', error);
}
```

✅ **Use meaningful IDs**
- Save returned `_id` values
- Use for subsequent requests

✅ **Test with Postman**
- Import all endpoints
- Save requests
- Organize in collections

---

## 📝 Notes

- All dates are in ISO 8601 format
- IDs are MongoDB ObjectIds (24-character hex strings)
- All monetary values are in USD
- Phone numbers can be any format (stored as string)
- Membership types: Basic, Premium, Elite
- Member status: Active, Inactive, Suspended
- Class difficulty: Beginner, Intermediate, Advanced

---

**✅ API is fully functional and ready for use!**
