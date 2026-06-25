# Blog Platform with Comments

## Overview

A full-stack Blog Platform built using the MERN stack architecture. Users can register, login, create blog posts, edit posts, delete posts, and interact through comments.

---

## Features

* User Registration and Login
* JWT-based Authentication
* Create Blog Posts
* View Blog Posts
* Edit Blog Posts
* Delete Blog Posts
* Add Comments to Posts
* View Comments
* RESTful API Integration
* MongoDB Database Integration

---

## Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

### Development Tools

* VS Code
* Thunder Client
* MongoDB Compass

---

## Project Structure

```text
BlogPlatform/

├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── commentController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── commentRoutes.js
│   │
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── CreatePost.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Posts

* GET /api/posts
* POST /api/posts
* PUT /api/posts/:id
* DELETE /api/posts/:id

### Comments

* GET /api/comments/:postId
* POST /api/comments

---

## Running the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Outcome

This project demonstrates full-stack web development with authentication, content management, database integration, and user interaction through comments.
