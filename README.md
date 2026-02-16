# 📍 Real-Time Tracker

A real-time location tracking web application built using **Node.js**, **Express.js**, **Socket.IO**, **EJS**, and **Leaflet.js**.

This application allows multiple users to share and view each other's live location on a map in real time.

---

## 🚀 Features

- 📡 Live location tracking using Geolocation API
- 🔄 Real-time updates with Socket.IO
- 🗺️ Interactive map powered by Leaflet.js
- 👥 Multiple users supported simultaneously
- ❌ Automatic marker removal on user disconnect
- ⚡ Newly connected users can see already connected users instantly

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- Socket.IO

### Frontend
- EJS
- Leaflet.js
- HTML5
- CSS3
- JavaScript

---

## 📂 Project Structure

├── 📁 public
│   ├── 📁 css
│   │   └── 🎨 style.css
│   └── 📁 js
│       └── 📄 index.js
├── 📁 views
│   └── 📄 index.ejs
├── ⚙️ .gitignore
├── 📄 app.js
├── ⚙️ package-lock.json
└── ⚙️ package.json


---

### 1️⃣ Clone the Repository

```
git clone https://github.com/Rajan9115/Realtime_tracker.git
cd realtime_tracker
```

## ⚙️ Installation & Setup

### 2️⃣ Install Dependencies

```bash
npm install
node app.js
http://localhost:3000
```
##  Real time flow
Client → Send Location → Server
Server → Broadcast Update → All Clients
Client → Update Marker on Map

## Author
-- Rajan kumar





