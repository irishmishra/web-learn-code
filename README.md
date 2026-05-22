<<<<<<< HEAD
# web-learn-code
=======
# CodeForge Academy

A complete modern educational coding platform inspired by W3Schools, Codecademy, GitHub, Vercel, Stripe, and modern SaaS dashboards.

## Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, Monaco Editor, dark/light mode
- Backend: Node.js, Express, REST APIs, JWT, bcrypt, Helmet, CORS, rate limiting
- Database: MongoDB with Mongoose
- Roles: student, instructor, admin

## Features

- Landing page with animated SaaS-style UI, statistics, testimonials, and trending technologies
- Tutorial library for HTML5, CSS3, JavaScript, Python, Java, C++, C, and C#
- Tutorial pages with theory, syntax examples, output preview, progress actions, notes, bookmarks, and practice problems
- Interactive coding playground with Monaco Editor, live preview, multi-language tabs, console area, and save action
- Student dashboard with progress, saved snippets, quiz scores, and certificates
- Admin dashboard for users, tutorials, analytics, moderation, editing, and deletion flows
- Auth flows for signup, login, logout, forgot password, reset password, email verification, protected routes, and session persistence
- Quiz system with MCQs, timer UI, score calculation, leaderboard, and progress tracking
- Community forum with posts, comments, likes-ready schema, moderation flags, and user profiles
- Search, pagination-ready APIs, bookmarks, notifications-ready patterns, profile editing, avatar upload placeholder, contact/newsletter-ready architecture

## Project Structure

```txt
/client                  React frontend
/server                  Express API
/server/routes           REST route definitions
/server/controllers      Request handlers
/server/models           Mongoose schemas
/server/middleware       Auth, RBAC, validation, error handling
/server/config           Database connection
/server/utils            Token and email helpers
/public                  Public static assets
```

## Local Setup

```bash
npm.cmd run install:all
copy client\.env.example client\.env
copy server\.env.example server\.env
npm.cmd run dev
```

Set `MONGO_URI` and `JWT_SECRET` in `server/.env` before running the API against a real database.

## API Overview

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password/:token`
- `GET /api/auth/verify-email/:token`
- `GET /api/tutorials`
- `POST /api/tutorials` instructor/admin
- `PATCH /api/tutorials/:id` instructor/admin
- `DELETE /api/tutorials/:id` admin
- `GET /api/users` admin
- `PATCH /api/users/me`
- `PATCH /api/users/:id/moderate` admin
- `GET /api/quizzes`
- `POST /api/quizzes/:id/submit`
- `GET /api/community/posts`
- `POST /api/community/posts`
- `POST /api/community/posts/:id/comments`

## Deployment

Frontend on Vercel or Netlify:

```bash
npm.cmd run build --prefix client
```

Use `client` as the project root, `npm.cmd run build` as the build command, and `dist` as the output directory. Set `VITE_API_URL` to the deployed backend URL plus `/api`.

Backend on Render or Railway:

- Root directory: `server`
- Build command: `npm install`
- Start command: `npm start`
- Environment variables: copy `server/.env.example`, then provide production values.

Database:

- Create a MongoDB Atlas cluster.
- Add the connection string to `MONGO_URI`.
- Restrict network access and create a least-privilege database user.

## Security Notes

- Passwords are hashed with bcrypt.
- JWT tokens are accepted through `Authorization: Bearer` headers and secure HTTP-only cookies.
- APIs use Helmet, CORS allow-listing, rate limiting, validation, and XSS sanitization middleware.
- Admin-only and instructor/admin routes are protected through role-based middleware.
- Never commit real `.env` files or production credentials.
>>>>>>> da56117 (app/webLearn-00/)
