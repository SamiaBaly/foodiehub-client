# 🍔 FoodieHub - Project Plan

## 📌 Project Overview

FoodieHub is a Full Stack Food Management web application built for a TypeScript assignment.

Users can browse food items, view details, register/login, and authenticated users can add and manage food items.

---

# 🎯 Assignment Requirements

- Full Stack TypeScript
- Next.js (App Router)
- Express.js
- MongoDB
- JWT Authentication
- Tailwind CSS
- Recharts
- Responsive Design
- Professional UI/UX

---

# 🛠 Tech Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Recharts

## Backend

- Express.js
- TypeScript
- MongoDB
- JWT
- Bcrypt

---

# 📂 Project Structure

foodiehub/

├── food-client/

└── food-server/

---

# 📂 Frontend Structure

app/

components/

hooks/

lib/

providers/

services/

types/

utils/

public/

---

# 📂 Backend Structure

src/

config/

controllers/

middlewares/

models/

routes/

services/

utils/

types/

---

# 🎨 Design System

Primary Color:

Orange

Secondary Color:

Emerald

Accent:

Slate

Border Radius:

rounded-xl

Container:

max-w-7xl mx-auto px-4

---

# 📄 Pages

## Public

- Home
- Food Listing
- Food Details
- About
- Contact
- Login
- Register

## Protected

- Add Food
- Manage Food
- Profile

---

# 🍔 Food Card

- Image
- Title
- Short Description
- Price
- Category
- Rating
- View Details

---

# 🔐 Authentication

- Register
- Login
- JWT
- Protected Routes
- Demo Login

---

# 🗄 Database

## Users

- _id
- name
- email
- password
- role
- photo
- createdAt

## Foods

- _id
- title
- shortDescription
- fullDescription
- price
- category
- image
- createdBy
- createdAt

---

# 🌐 API Plan

## Auth

POST /auth/register

POST /auth/login

GET /auth/profile

---

## Foods

GET /foods

GET /foods/:id

POST /foods

DELETE /foods/:id

---

# 📋 Development Order

- [ ] Backend Setup
- [ ] MongoDB Connection
- [ ] User Model
- [ ] Food Model
- [ ] Authentication
- [ ] Food CRUD
- [ ] Frontend Design System
- [ ] Home Page
- [ ] Food Listing
- [ ] Food Details
- [ ] Login/Register
- [ ] Add Food
- [ ] Manage Food
- [ ] Charts
- [ ] Responsive
- [ ] Deployment

---

# 📌 Current Progress

✅ Next.js Project Created

✅ TypeScript Enabled

✅ Tailwind Installed

✅ Frontend Folder Structure Created

⬜ Backend Setup Pending

---

# 🚀 Deployment

Frontend → Vercel

Backend → Vercel / Render

Database → MongoDB Atlas

---

# 📖 Coding Rules

- TypeScript Only
- Reusable Components
- Clean Folder Structure
- Responsive Design
- No Dummy Content
- Consistent UI
- Production Standard Code 

# 📊 Current Progress

## Completed

### Backend
- [x] Express Server Setup
- [x] MongoDB Connection
- [x] Environment Configuration
- [x] User Collection Structure Created

# 🍔 Food Management Module

## Completed Tasks ✅

- [x] Create Food Collection
- [x] Create Food Type Interface
- [x] Create Food Validation Schema (Zod)
- [x] Create Add Food API (Protected)
- [x] Get All Foods API
- [x] Get Single Food API
- [x] Update Food API
- [x] Delete Food API
- [x] Connect User with Food Creator


## Remaining Tasks 🚧

- [ ] Add Pagination
- [ ] Add Search & Filter
- [ ] Add Sorting


## Remaining Tasks 🚧

- [ ] Delete Food API
- [ ] User Permission Check
- [ ] Add Pagination
- [ ] Add Search & Filter
- [ ] Add Sorting


# 🌐 Frontend Module (Next.js)

## Status: 🟡 In Progress

## Technology Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod Validation
- Axios / Fetch API
- JWT Authentication

---

# 📁 Frontend Structure

```
food-client/

├── app/
│   ├── page.tsx
│   ├── login/
│   ├── register/
│   ├── foods/
│   ├── dashboard/
│   └── layout.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FoodCard.tsx
│   ├── SearchBar.tsx
│   └── CategoryFilter.tsx
│
├── services/
│   └── api.ts
│
├── hooks/
│
├── types/
│   └── food.ts
│
└── utils/
```

---

# 🏠 Home Page

## Status: ⏳ Pending

Tasks:

- [ ] Create Navbar
- [ ] Create Hero Section
- [ ] Featured Foods Section
- [ ] Category Section
- [ ] Food Preview Cards
- [ ] Footer

---

# 🔐 Authentication UI

## Register Page

Route:

```
/register
```

Tasks:

- [ ] Create registration form
- [ ] Name input
- [ ] Email input
- [ ] Password input
- [ ] Form validation
- [ ] Connect Register API
- [ ] Show success/error message


API:

```
POST /api/auth/register
```

---

## Login Page

Route:

```
/login
```

Tasks:

- [ ] Create login form
- [ ] Email input
- [ ] Password input
- [ ] Connect Login API
- [ ] Store JWT Token
- [ ] Redirect after login


API:

```
POST /api/auth/login
```

---

# 🍔 Food Listing Module

Route:

```
/foods
```

Tasks:

- [ ] Fetch all foods
- [ ] Display food cards
- [ ] Loading state
- [ ] Empty state
- [ ] Error handling


API:

```
GET /api/foods
```

---

# Food Card Component

Component:

```
FoodCard.tsx
```

Features:

- [ ] Food image
- [ ] Food name
- [ ] Description
- [ ] Category badge
- [ ] Price
- [ ] Details button

---

# 🔎 Search Feature

Component:

```
SearchBar.tsx
```

Features:

- [ ] Search input
- [ ] API query update
- [ ] Search by food name


Example:

```
/foods?search=pizza
```

---

# 🏷 Category Filter

Component:

```
CategoryFilter.tsx
```

Features:

- [ ] Show categories
- [ ] Filter foods
- [ ] Update URL query


Example:

```
/foods?category=Fast Food
```

---

# 📄 Food Details Page

Route:

```
/foods/[id]
```

Tasks:

- [ ] Fetch single food
- [ ] Show complete details
- [ ] Show creator information
- [ ] Responsive layout


API:

```
GET /api/foods/:id
```

---

# ➕ Add Food Page

Route:

```
/dashboard/add-food
```

Protected:

```
✅ Login Required
```

Features:

- [ ] Food form
- [ ] Image URL
- [ ] Category selection
- [ ] Price input
- [ ] Quantity input
- [ ] Submit API


API:

```
POST /api/foods
```

---

# ✏️ Update Food Page

Route:

```
/dashboard/edit-food/[id]
```

Features:

- [ ] Load existing data
- [ ] Update form
- [ ] Submit changes


API:

```
PATCH /api/foods/:id
```

---

# 🗑 Delete Food Feature

Features:

- [ ] Delete button
- [ ] Confirmation modal
- [ ] Remove from UI


API:

```
DELETE /api/foods/:id
```

---

# 🔒 Protected Routes

Middleware:

```
middleware.ts
```

Tasks:

- [ ] Check JWT token
- [ ] Protect dashboard routes
- [ ] Redirect unauthorized users


Protected:

```
/dashboard/*
```

---

# Frontend Progress

```
Project Setup        ██████████ 100%

Home Page            ░░░░░░░░░░ 0%

Authentication UI    ░░░░░░░░░░ 0%

Food Listing         ░░░░░░░░░░ 0%

Food Details         ░░░░░░░░░░ 0%

Dashboard            ░░░░░░░░░░ 0%

API Integration      ░░░░░░░░░░ 0%
```

---

# 🚀 Next Development Step

## Create Frontend Base Setup

Tasks:

1. Install dependencies
2. Setup API client
3. Create TypeScript types
4. Create Navbar
5. Connect Food API
6. Build Food Listing Page