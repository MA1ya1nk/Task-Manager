# Task Manager Web Application

This is a simple Task Management Web Application built to demonstrate basic full-stack development skills including frontend, backend, database integration, and deployment.

The application allows users to create, view, update, and delete tasks.

---

## Objective

The objective of this project is to build a working web application that covers:
- Frontend development
- Backend REST API
- Database persistence
- Proper project structure and deployment

---

## Features

- Create a new task
- View all tasks
- Update task status
- Delete tasks
- Persistent data storage using database

---

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- MongoDB (MongoDB Atlas)

Deployment:
- Backend deployed on Render
- Frontend deployed on Netlify

---

## Project Structure

Task-Manager/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md

---

## Application Workflow

1. User interacts with the frontend interface.
2. Frontend sends HTTP requests to the backend API.
3. Backend processes requests using Express.
4. Data is stored and retrieved from MongoDB.
5. Backend sends JSON responses to the frontend.
6. UI updates dynamically.

---

## API Endpoints

GET /tasks  
Fetch all tasks

POST /tasks  
Create a new task

PUT /tasks/:id  
Update task status

DELETE /tasks/:id  
Delete a task

---

## Local Setup

1. Clone the repository
   git clone <repository-url>

2. Backend setup
   cd backend
   npm install
   npm start

   Backend runs on http://localhost:5000

3. Frontend setup
   Open frontend/index.html in browser

---

## Deployment Details

Backend:
- Deployed as a Node.js web service on Render
- Root directory set to backend
- Uses environment variable for MongoDB connection
- Port handled using process.env.PORT

Frontend:
- Deployed as a static site on Netlify
- Frontend communicates with deployed backend API

---

## Best Practices

- Environment variables used for sensitive data
- node_modules excluded using .gitignore
- RESTful API design
- Clean separation of frontend and backend
- Simple and readable code

---

## Future Improvements

- Edit task title and description
- User authentication
- Improved UI styling
- Search and filter functionality

---

## Author

Mayank Kumar
