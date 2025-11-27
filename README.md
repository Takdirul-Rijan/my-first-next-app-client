⭐ E-Shop — Modern E-Commerce Web Application

A full-stack e-commerce application built with Next.js (App Router), NextAuth.js, and a simple Express.js backend.
This project includes public pages, protected pages, product management, authentication, and a polished responsive UI.

Live Demo → https://my-first-next-app-client.vercel.app/
Git Repo → https://github.com/Takdirul-Rijan/my-first-next-app-client.git

📌 Features
🏠 Public Pages

Fully responsive Landing Page with polished sections

Hero, Features, Product Highlights

Beautiful UI with TailwindCSS + DaisyUI

Consistent layout, modern typography, and micro-interactions

🔐 Authentication

NextAuth.js for login

Google login + Credentials login

Auth state shown in navbar

Protected routes: Add Product & Manage Products

🛒 Product Management

Item List Page

Search bar

Category UI filter

Grid of product cards (6+ items)

Item Details Page

Large banner

Full description

Price & meta information

🔏 Protected Pages

Add Product

Product form (title, short desc, full desc, price, date, priority, image URL)

Toast confirmation

Manage Products

Products table

View & Delete actions

Clean, responsive layout

🎨 UI & UX

Smooth hover/focus states

Card animations

Optimized spacing and readability

Sticky navbar with dynamic user menu

Clean footer with social links

🛠️ Tech Stack
Frontend

Next.js 16 (App Router)

React 19

TailwindCSS v4 + DaisyUI

React Hook Form

React Query

Lucide React / React Icons

Authentication

NextAuth.js 4

Backend

Express.js REST API

Axios communication

Extra Libraries

React Hot Toast

SweetAlert2

Swiper

React Spinners

📁 Folder Structure (Important Parts)
app/
├── (public pages)
├── products/
├── products/[id]/
├── add-product/ (protected)
├── manage-products/ (protected)
├── api/auth/[...nextauth]/
├── login/
components/
├── Navbar.jsx
├── Footer.jsx
├── ProductCard.jsx
lib/
└── auth/

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/Takdirul-Rijan/my-first-next-app-client.git
cd my-first-next-app-client

2️⃣ Install dependencies
npm install

3️⃣ Environment Variables

Create .env.local:

NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret

BACKEND_API_URL=http://localhost:5000

4️⃣ Run the development server
npm run dev

App will run at:
👉 http://localhost:3000

🔐 Authentication Flow

When user is not logged in → they see Login / Register

After login → navbar shows user dropdown:

Add Product

Manage Products

Logout

Protected pages automatically redirect to /login if unauthorized

🧭 Routes Summary
Route Type Description
/ Public Landing Page
/about Public About page
/products Public Product list with search
/products/[id] Public Product details
/login Public Login / Register
/add-product Protected Add new product
/manage-products Protected Manage all products
/contact Public Contact page
/api/auth/\* System NextAuth endpoints
📦 Backend (Express.js)

The backend handles:
✔ Product CRUD
✔ Login credentials
✔ API consumption via Axios in Next.js

📸 UI Highlights

Fully responsive

Polished cards

Clean forms with validation

Consistent color palette

Micro animations & hover states

📄 License

This project is for educational and portfolio purposes.
Free for personal or academic use.

✨ Author

Md. Takdirul Islam Rijan
GitHub: https://github.com/Takdirul-Rijan

Live Demo: https://my-first-next-app-client.vercel.app/
