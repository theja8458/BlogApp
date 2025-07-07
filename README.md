# Blog Application

A simple blog website built with Node.js, Express, and MongoDB where users can read blog posts and admin can manage posts.

## Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **EJS** - Template engine
- **bcrypt** - Password hashing
- **JWT** - Authentication
- **CSS** - Styling

## Features

- View all blog posts
- Read individual blog posts
- Search blog posts
- Admin login/register
- Admin can add, edit, delete posts
- Responsive design

## How to Run

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create `.env` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/blogapp
   PORT=8080
   ```
4. Start MongoDB on your computer
5. Run the application:
   ```
   npm run dev
   ```
6. Open browser and go to `http://localhost:8080`

## Routes

### Public Routes
- `GET /` - Home page with all blog posts
- `GET /post/:id` - View single blog post
- `POST /search` - Search blog posts
- `GET /about` - About page

### Admin Routes
- `GET /admin` - Admin login page
- `POST /admin` - Login admin
- `POST /register` - Register new admin
- `GET /dashboard` - Admin dashboard (requires login)
- `GET /add-post` - Add new post page (requires login)
- `POST /add-post` - Create new post (requires login)
- `GET /edit-post/:id` - Edit post page (requires login)
- `PUT /edit-post/:id` - Update post (requires login)
- `DELETE /delete-post/:id` - Delete post (requires login)
- `GET /logout` - Logout admin

## Project Structure

```
blogapp/
├── server/
│   ├── config/db.js          # Database connection
│   ├── models/
│   │   ├── Post.js           # Post model
│   │   └── User.js           # User model
│   ├── routes/
│   │   ├── main.js           # Public routes
│   │   └── admin.js          # Admin routes
│   └── helpers/routeHelpers.js
├── views/                    # EJS templates
├── public/                   # CSS, JS, images
├── app.js                    # Main server file
└── package.json
```

## Admin Access

1. Go to `/admin`
2. Register a new admin account
3. Login with your credentials
4. You can now add, edit, and delete blog posts

## What I Learned

- Building REST APIs with Express.js
- Working with MongoDB and Mongoose
- User authentication with JWT
- Template rendering with EJS
- File structure organization
- Responsive web design