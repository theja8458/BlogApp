# NodeJS Blog Application

A simple and elegant blog application built with Node.js, Express.js, MongoDB, and EJS templating engine. This project demonstrates full-stack web development with user authentication, CRUD operations, and responsive design.

## 🚀 Features

- **User Authentication**: Secure login/logout system with JWT tokens
- **Blog Management**: Create, read, update, and delete blog posts
- **Search Functionality**: Search through blog posts by title and content
- **Responsive Design**: Mobile-friendly interface
- **Admin Panel**: Dedicated admin interface for managing posts
- **Pagination**: Efficient pagination for blog posts
- **Session Management**: Secure session handling with MongoDB store

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Template Engine**: EJS (Embedded JavaScript)
- **Authentication**: JWT (JSON Web Tokens) + bcrypt for password hashing
- **Session Management**: express-session with connect-mongo
- **Styling**: Custom CSS with responsive design
- **Development**: Nodemon for auto-restart during development

## 📁 Project Structure

```
blogapp/
├── server/
│   ├── config/
│   │   └── db.js              # Database connection configuration
│   ├── models/
│   │   ├── Post.js            # Post model schema
│   │   └── User.js            # User model schema
│   ├── routes/
│   │   ├── main.js            # Public routes (home, posts, search)
│   │   └── admin.js           # Admin routes (authentication, CRUD)
│   └── helpers/
│       └── routeHelpers.js    # Helper functions for routes
├── views/
│   ├── layouts/
│   │   ├── main.ejs           # Main layout template
│   │   └── admin.ejs          # Admin layout template
│   ├── partials/
│   │   ├── header.ejs         # Main header component
│   │   ├── header_admin.ejs   # Admin header component
│   │   ├── footer.ejs         # Footer component
│   │   └── search.ejs         # Search bar component
│   ├── admin/
│   │   ├── index.ejs          # Admin login/register page
│   │   ├── dashboard.ejs      # Admin dashboard
│   │   ├── add-post.ejs       # Add new post form
│   │   └── edit-post.ejs      # Edit post form
│   ├── index.ejs              # Home page
│   ├── post.ejs               # Individual post view
│   ├── search.ejs             # Search results page
│   └── about.ejs              # About page
├── public/
│   ├── css/
│   │   └── style.css          # Custom styles
│   ├── js/
│   │   └── script.js          # Client-side JavaScript
│   └── imgs/                  # Image assets
├── app.js                     # Main application file
└── package.json               # Dependencies and scripts
```

## 🔗 Routes Overview

### Public Routes (main.js)

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page with paginated blog posts |
| GET | `/post/:id` | View individual blog post |
| POST | `/search` | Search blog posts by title/content |
| GET | `/about` | About page |

### Admin Routes (admin.js)

| Method | Route | Description | Auth Required |
|--------|-------|-------------|---------------|
| GET | `/admin` | Admin login page | No |
| POST | `/admin` | Process admin login | No |
| POST | `/register` | Register new admin user | No |
| GET | `/dashboard` | Admin dashboard with all posts | Yes |
| GET | `/add-post` | Add new post form | Yes |
| POST | `/add-post` | Create new blog post | Yes |
| GET | `/edit-post/:id` | Edit post form | Yes |
| PUT | `/edit-post/:id` | Update existing post | Yes |
| DELETE | `/delete-post/:id` | Delete blog post | Yes |
| GET | `/logout` | Logout admin user | Yes |

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blogapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/blogapp
   PORT=8080
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system

5. **Run the application**
   
   For development:
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm start
   ```

6. **Access the application**
   - Main site: `http://localhost:8080`
   - Admin panel: `http://localhost:8080/admin`

## 👤 User Authentication

### Admin Registration
1. Navigate to `/admin`
2. Use the registration form to create an admin account
3. Passwords are automatically hashed using bcrypt

### Admin Login
1. Navigate to `/admin`
2. Enter your credentials
3. Upon successful login, you'll be redirected to the dashboard

## 📝 Usage Guide

### For Visitors
- Browse blog posts on the home page
- Click on any post title to read the full article
- Use the search functionality to find specific posts
- Navigate through pages using pagination

### For Admins
- Login to access the admin dashboard
- View all posts in a list format
- Create new posts using the "Add New" button
- Edit existing posts by clicking the "Edit" button
- Delete posts using the delete button
- Logout when finished

## 🔧 Key Features Explained

### Authentication Middleware
```javascript
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({message: "Unauthorized"});
  }
  // JWT verification logic
};
```

### Search Functionality
- Searches both title and body content
- Uses MongoDB regex for flexible matching
- Removes special characters for better search results

### Pagination
- Displays 10 posts per page
- Implements "View Older Posts" navigation
- Efficient database queries using skip() and limit()

## 🎨 Styling

The application uses custom CSS with:
- Responsive design for mobile and desktop
- Clean, modern interface
- Hover effects and transitions
- Consistent color scheme and typography

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- HTTP-only cookies for token storage
- Session management with MongoDB store
- Input validation and sanitization

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- Search functionality is case-sensitive
- No image upload feature for posts
- Limited rich text editing capabilities

## 🚀 Future Enhancements

- [ ] Rich text editor for blog posts
- [ ] Image upload functionality
- [ ] Comment system
- [ ] Social media sharing
- [ ] Email notifications
- [ ] Categories and tags
- [ ] User roles and permissions

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include error messages and steps to reproduce

---

**Happy Blogging! 🎉**