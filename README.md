# Blog Application

A simple blog website built with Node.js, Express, and MongoDB where users can read blog posts and admin can manage posts.

**Live Demo:** https://nodewrite-cwko.onrender.com

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

## For Users

**What users can do:**
- Browse all blog posts on the home page
- Click on any post title to read the full article
- Use the search bar to find specific posts by title or content
- Navigate through multiple pages of posts
- View the about page

**How to use:**
1. Visit the website
2. Browse posts on the main page
3. Click "Search" button to search for specific topics
4. Click on any post title to read the complete article
5. Use pagination to see older posts

## For Admin

**What admin can do:**
- Login to secure admin panel
- View all posts in dashboard
- Create new blog posts
- Edit existing posts
- Delete posts
- Logout securely

**How to use admin panel:**
1. Go to `/admin` page
2. Register a new admin account (first time)
3. Login with username and password
4. Access dashboard to manage all posts
5. Click "Add New" to create posts
6. Click "Edit" to modify existing posts
7. Click "Delete" to remove posts
8. Click "Logout" when finished

## How to Run Locally

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

## What I Learned

- Building REST APIs with Express.js
- Working with MongoDB and Mongoose
- User authentication with JWT
- Template rendering with EJS
- File structure organization
- Responsive web design
- Deployment on cloud platforms