# Blogverse

[![Website](https://img.shields.io/badge/Visit_live-My%20Blogverse-app-blue)](https://my-blogverse.vercel.app)  
A full-stack blogging platform built using Node.js, Express, and EJS, designed for creating, managing, and reading blog posts.

## 🚀 About  
Blogverse is a simple yet effective blogging application that allows users to create blog posts, view them, and manage content through an intuitive web interface. The project uses a server-side templating approach with EJS and provides routes, models, and services for handling blog data.  
The project is deployed on Vercel, making it easily accessible online.

## 🧱 Tech Stack  
- **Backend**: Node.js + Express  
- **Templating Engine**: EJS (≈ 49.7% of the codebase) :contentReference[oaicite:2]{index=2}  
- **Frontend**: EJS views, CSS, and vanilla JavaScript (≈ 10.4% CSS) :contentReference[oaicite:3]{index=3}  
- **Project Structure**:  
  - `middlewares/` – custom middleware  
  - `models/` – data modelling (likely with MongoDB or similar)  
  - `routes/` – Express routing  
  - `services/` – service layer for business logic  
  - `views/` – EJS templates  
  - `public/` – static assets  
  - `index.js` – entry point  
  - `vercel.json` – deployment config for Vercel  
  :contentReference[oaicite:4]{index=4}

## 🎯 Key Features  
- User-friendly interface to write and publish blog posts  
- Clean separation of concerns: models, routes, services, views  
- Easy deployment via Vercel (ready configuration included)  
- Modular and well-organized codebase — great for extending in the future  
- Simple, efficient templating (EJS) rather than heavy front-end frameworks

## 🧭 Getting Started  
### Prerequisites  
- Node.js (v14+ recommended)  
- npm or yarn  
- (Optional) MongoDB or other database if data persistence is required  

### Installation  
```bash
# Clone the repo  
git clone https://github.com/this-is-ankit/Blogverse.git  
cd Blogverse  

# Install dependencies  
npm install  
# or  
yarn install  
