# 📝 NottyPI - Public Notes App (MERN)
A simple MERN stack web app that allows anyone to view and post public notes — no login required.

🌐 **[Live Demo](https://nottypi-c90t.onrender.com/)**

## 🚀 Features
- 🟢 Anyone can add a note instantly
- 🔍 All notes are visible publicly in real-time
- 🗑️ Notes can be deleted by anyone
- 📅 Notes include automatic timestamps
- 💾 Persistent storage with MongoDB
- 📱 Responsive design for all devices
- ⚡ Built with modern MERN stack technologies

## 🔧 Tech Stack
- **Frontend:** React, CSS/Styled Components, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Additional:** CORS enabled, RESTful API, Rate Limiting with Upstash Redis

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/iamarshalrejith/Nottypi.git
cd nottypi
```

### 2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment variables
Create a `.env` file in the `backend/` folder:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

### 4. Start the application
```bash
# Start backend server
cd backend
npm start

# In a new terminal, start frontend
cd frontend
npm start
```

The app will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5001`

## 🗂️ Project Structure
```
NottyPI/
├── frontend/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   ├── lib/
│   │   │   └── axios.js
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   ├── controllers/
│   │   │   └── notesController.js
│   │   ├── middleware/
│   │   │   └── rateLimiter.js
│   │   ├── models/
│   │   │   └── Note.js
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── .gitignore
│
├── README.md
└── .gitignore
```

## 🔌 API Endpoints
- `GET /api/notes` - Fetch all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` – Update an existing note
- `DELETE /api/notes/:id` - Delete a specific note

🌐 **[Live Demo](https://nottypi-c90t.onrender.com/)**

## 🤝 Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements
- [ ] Search functionality
- [ ] Note categories/tags
- [ ] Character limit for notes
- [ ] Export notes feature
- [ ] Dark/Light theme toggle
- [ ] Enhanced rate limiting features
- [ ] User authentication (optional)

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
⭐ Star this repo if you found it helpful!
