# 🐾 PawHaven - Frontend Client

A modern, fluid, and fully responsive Pet Adoption Platform client interface built using **Next.js 15 App Router**, **HeroUI**, and **Tailwind CSS**.

---

## 📋 Project Purpose

PawHaven connects prospective pet adopters with shelters and individual owners. The client app provides intuitive interfaces to browse pets using dynamic server-side filters, submit adoption requests through contextual user panels, and manage pet listings via a secured dashboard workspace.

---

## 🔗 Live Deployment & Links

- **Live Application URL:** `[Insert your live Vercel / Render deployment link here]`
- **Backend API Repository:** `[Insert your GitHub Server repository link here]`

---

## ✨ Features (Assignment Core Requirements)

- **Advanced Engine Browsing & Controls:** Supports multi-parameter searching by animal name and multi-select category filtration (Species, breeds) that triggers optimized backend `$regex` and `$in` queries.
- **Persistent Private Route Guarding:** Highly optimized route handlers ensure that logged-in users tracking items or managing panels are never kicked back to the login page upon a browser hard-refresh.
- **Relational Action Management Layouts:** Functional multi-tab dashboards splitting workflows cleanly into _My Requests_ (with cancellation hooks), _Add Pet Forms_ with dynamic reactive status triggers, and _My Listings_ viewports.
- **State-Driven Interactive Modals:** Dynamic verification systems built for updating pet fields, viewing listing applicants, and approving or rejecting adoption contracts without standard browser prompt overrides.
- **Responsive Recruiter-Friendly Aesthetics:** Formed completely from scratch around modern viewport breakpoints—optimized with pixel-perfect scaling maps for mobile screens, tablet formats, and wide desktops.
- **Async Feedback Overrides:** Fully integrated with custom floating user feedback notification modules for CRUD event warnings and authentication statuses. _Zero default alert() parameters are utilized._

---

## 🛠️ Tech Stack & NPM Packages Used

- `next` (v15) - React Framework for the Web with App Router.
- `heroui` - Modern, accessible, and fast UI component library for layout structures.
- `tailwindcss` - Utility-first styling architecture.
- `framer-motion` - Production-ready, fluid micro-animations and route transitions _(Optional Challenge Feature)_.
- `axios` / `fetch` - Secured data transmission channels interfacing with backend HTTPOnly cookies.
- `react-hot-toast` / `react-toastify` - UI-based clean notification popups.
- `lucide-react` - Minimalist vector UI element iconography.

---

## ⚙️ Environment Variables Setup

Before running the application, make sure to add your production/local endpoints. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_config_credentials_here
🚀 Local Installation & Set Up
Follow these steps to spin up the local development environment:

1. Clone the repository
Bash

git clone [your-frontend-repository-url]
cd [frontend-folder-name]
2. Configure configurations environment
Bash

cp .env.example .env.local
3. Install required node modules
Bash

npm install
4. Run the local development server
Bash

npm run dev
Open your browser to http://localhost:3000 to view the application running locally.

📂 Project Structure Overview
Plaintext

src/
 ├── app/             # Next.js App Router (Pages, Private & Dashboard layouts)
 ├── components/      # Reusable functional UI elements (Navbar, Footer, PetCard, Spinner)
 ├── context/         # AuthContext monitoring secure persistent user sessions
 ├── hooks/           # Custom data fetching and mutation hooks
 ├── services/        # Direct backend API client abstraction layer
 └── styles/          # Global CSS parameters and Tailwind configurations
```
