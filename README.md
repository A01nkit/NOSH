# NOSH Full Stack Assignment

## 📌 Objective

Build a full-stack solution to manage and display dish information using a database, REST API, and a front-end dashboard. The dashboard should support toggling the published status of dishes and reflect real-time updates when changes are made from the backend.

---

## 📂 Project Structure

```
.
├── backend/              # Node.js/Express backend
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── controllers/      # Logic for dish operations
│   └── server.js         # Main entry point
│
├── frontend/             # React frontend
│   ├── components/       # React components
│   └── App.js            # Main application
│
├── .env                  # Environment variables
├── package.json          # Project dependencies
└── README.md             # This file
```

---

## 🔧 Features

- ✅ Add, fetch and update dishes from MongoDB.
- ✅ Toggle `isPublished` status from the UI.
- ✅ Real-time UI sync using **Socket.IO** for changes triggered outside the dashboard.
- ✅ Simple, responsive dashboard using **React**.
- ✅ RESTful API using **Express.js**.

---

## ⚙️ Tech Stack

| Layer       | Technology          |
|-------------|---------------------|
| Frontend    | React.js            |
| Backend     | Node.js, Express.js |
| Database    | MongoDB, Mongoose   |
| Real-time   | Socket.IO           |

---

## 📥 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <repo-folder>
```

### 2. Backend Setup

```bash
cd backend
npm install
# Create a `.env` file with your MongoDB URI
node server.js
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

> React app will run at: `http://localhost:3000`  
> Backend will run at: `http://localhost:5000`

---

## 📡 API Endpoints

| Method | Endpoint                    | Description                     |
|--------|-----------------------------|---------------------------------|
| GET    | `/api/dishes`               | Fetch all dishes                 |
| PUT    | `/api/dishes/:id/toggle`    | Toggle `isPublished` status      |
| POST   | `/api/dishes`               | To create a dish

---

## ⚡ Real-time Updates

- Socket.IO used for real-time communication.
- Dashboard reflects live changes when a dish's status is modified directly in the backend or via API.

---

## 📃 Sample Dish JSON Format

```json
[
  {
    "dishId": "1",
    "dishName": "Spaghetti Bolognese",
    "imageUrl": "https://example.com/spaghetti.jpg",
    "isPublished": true
  },
  {
    "dishId": "2",
    "dishName": "Paneer Butter Masala",
    "imageUrl": "https://example.com/paneer.jpg",
    "isPublished": false
  }
]
```

---

## 📽 Submission Checklist

- ✅ 1-minute demo video of the app
- ✅ 1-minute code walkthrough
- ✅ Code submitted on GitHub or ZIP file

---

## ✍️ Author

**Ankit Srivastava**  
