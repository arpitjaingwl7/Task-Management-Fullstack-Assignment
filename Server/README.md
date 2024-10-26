
# Task Manager Application

This Task Manager Application provides user authentication, task management, and profile management functionalities. It uses Node.js, Express, MongoDB, and integrates Cloudinary for image storage.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [API Routes](#api-routes)
- [Usage](#usage)


---

### Features
- **User Authentication**: Signup, Login, Logout using JSON Web Tokens (JWT).
- **Protected Routes**: Middleware for authentication using JWT tokens.
- **Task Management**: Create, update, delete, and view tasks for authenticated users.
- **Profile Management**: Update user details and upload profile pictures to Cloudinary.

---

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Ensure MongoDB is running or configure your MongoDB URL in the `.env` file.

---

### Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```plaintext
PORT=8000
MONGO_DBURI='your_mongodb_uri'
ACCESS_KEY="ThisisSecretAcccessKey"
ACCESS_EXPIRY="1d"
REFRESH_EXPIRY='10d'
REFRESH_KEY="THISISSECRETREFRESHKEY"
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

- `MONGO_DBURI`: MongoDB connection string.
- `ACCESS_KEY`: Secret key for JWT access tokens.
- `ACCESS_EXPIRY`: Expiration time for access tokens.
- `REFRESH_KEY`: Secret key for JWT refresh tokens.
- `REFRESH_EXPIRY`: Expiration time for refresh tokens.
- `CLOUDINARY_*`: Cloudinary credentials for image uploads.

---

### Folder Structure

```
project-root
│
├── Controllers
│   ├── user.controller.js       # Handles user-related logic
│   └── task.controller.js       # Handles task-related logic
│
├── Middlewares
│   ├── auth.middleware.js       # Auth middleware for route protection
│   └── multer.middleware.js     # Middleware for file uploads using Multer
│
├── Models
│   ├── user.model.js            # Mongoose model for user
│   └── task.model.js            # Mongoose model for task
│
├── Routes
│   ├── user.routes.js           # Defines user-related routes
│   └── task.routes.js           # Defines task-related routes
│
├── Utility
│   └── Cloudinary.js            # Utility functions for Cloudinary integration
│
├── .env                         # Environment variables
└── app.js                       # Main app entry point
```

---

### API Routes

#### Auth Routes

| Route          | Method | Description            | Protected | Example Request |
|----------------|--------|------------------------|-----------|-----------------|
| `/signup`      | POST   | Register a new user    | No        | [Signup Example](#signup) |
| `/login`       | POST   | Login user             | No        | [Login Example](#login) |
| `/logout`      | POST   | Logout user            | Yes       | [Logout Example](#logout) |

#### User Routes

| Route              | Method | Description                | Protected | Example Request |
|--------------------|--------|----------------------------|-----------|-----------------|
| `/`                | GET    | Get authenticated user data | Yes       | [Get User Example](#get-user) |
| `/update`          | PATCH  | Update user information     | Yes       | [Update User Example](#update-user) |
| `/updatePicture`   | PATCH  | Update profile picture      | Yes       | [Update Picture Example](#update-profile-picture) |

#### Task Routes

| Route              | Method | Description                | Protected | Example Request |
|--------------------|--------|----------------------------|-----------|-----------------|
| `/tasks/createtask`| POST   | Create a new task          | Yes       | [Create Task Example](#create-task) |
| `/tasks/alltask`   | GET    | Get all tasks for the user | Yes       | [Get All Tasks Example](#get-all-tasks) |
| `/tasks/:id`       | GET    | Get a specific task by ID  | Yes       | [Get Task By ID Example](#get-task-by-id) |
| `/tasks/:id`       | PUT    | Update a task by ID        | Yes       | [Update Task Example](#update-task) |
| `/tasks/:id`       | DELETE | Delete a task by ID        | Yes       | [Delete Task Example](#delete-task) |

---

### Usage

1. **Run the Project**:
   Start the server by running:

   ```bash
   npm start
   ```

2. **Access API**:
   The server will run by default on `http://localhost:8000`. Use a tool like Postman or Insomnia to test API endpoints.

3. **Example Requests**:

#### Signup
```bash
POST http://localhost:8000/users/signup
```
Request Body:
```json
{
  "email": "user@example.com",
  "password": "password",
  "userName": "username"
}
```

#### Login
```bash
POST http://localhost:8000/users/login
```
Request Body:
```json
{
  "email": "user@example.com",
  "password": "password"
}
```

#### Logout
```bash
POST http://localhost:8000/users/logout
```
Requires Authorization header: `Bearer <AccessToken>`

#### Get User
```bash
GET http://localhost:8000/users/
```
Requires Authorization header: `Bearer <AccessToken>`

#### Update User
```bash
PATCH http://localhost:8000/users/update
```
Request Body:
```json
{
  "userName": "newUsername"
}
```
Requires Authorization header: `Bearer <AccessToken>`

#### Update Profile Picture
```bash
PATCH http://localhost:8000/users/updatePicture
```
Form-data:
- Key: `profilePicture`
- Value: `<upload your image file here>`

Requires Authorization header: `Bearer <AccessToken>`

#### Create Task
```bash
POST http://localhost:8000/tasks/createtask
```
Request Body:
```json
{
  "title": "New Task",
  "description": "Task description"
}
```
Requires Authorization header: `Bearer <AccessToken>`

#### Get All Tasks
```bash
GET http://localhost:8000/tasks/alltask
```
Requires Authorization header: `Bearer <AccessToken>`

#### Get Task By ID
```bash
GET http://localhost:8000/tasks/<taskId>
```
Replace `<taskId>` with the specific task ID. Requires Authorization header: `Bearer <AccessToken>`

#### Update Task
```bash
PUT http://localhost:8000/tasks/<taskId>
```
Replace `<taskId>` with the specific task ID. Request Body:
```json
{
  "title": "Updated Task Title",
  "status": "completed"
}
```
Requires Authorization header: `Bearer <AccessToken>`

#### Delete Task
```bash
DELETE http://localhost:8000/tasks/<taskId>
```
Replace `<taskId>` with the specific task ID. Requires Authorization header: `Bearer <AccessToken>`

---


