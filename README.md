**there are 2 different github repo's for frontend and backend respesctively.**
**both have same readme file.**

# Frontend - Media Management App

This is the **frontend** for the **Media Management App**, allowing users to **register, log in, upload, view, and manage media files (images & videos)**.

## 🚀 Features
- 🔐 **User Authentication** (JWT-based login & registration)
- 📂 **Media Upload & Management** (Images & Videos)
- 🔍 **File Type Filtering** (View only images/videos)
- 📄 **Pagination** for media files
- 🎨 **Styled UI** for a clean user experience
- 🌍 **Deployed on Netlify**

🚀 **Live Demo:**  
- **🌐media-management-app:**[Netlify Link](https://originbluy-media-gallery.netlify.app)  


---
## 📦 **Project Setup**
### 1️⃣ Clone the Repository
**git clone https://github.com/Syedaslam018/originBluy-frontend.git
cd originBluy-frontend**

### 2️⃣ Install dependencies:
**npm install**

### 3️⃣ Create a .env file inside frontend/ and add:
**REACT_APP_BACKEND_URL=https://originbluy-backend.onrender.com**

### 4️⃣ Start the development server:
**npm start**

The app will run at http://localhost:3000.

# Backend - Media Management App

This is the **backend** for the **Media Management App**, built with **Node.js, Express, MongoDB, and Multer**.

## 🚀 Features
- 🔐 **User Authentication** (JWT & bcrypt)
- 📂 **Media Upload & Management** (Multer for handling file uploads)
- 🔍 **File Filtering** (Accepts only images & videos)
- 📄 **Pagination & Sorting** for media files
- 🌍 **Deployed on Render**

---

## 📦 **Project Setup**
### 1️⃣ Clone the Repository
**git clone https://github.com/Syedaslam018/originBluy-backend.git**
**cd originBluy-backend**

### 2️⃣ Install dependencies:
**npm install**

### 3️⃣ Create a .env file inside frontend/ and add:
 - **PORT = 9000**
 - **MONGO_URI = "mongodb+srv://<username>:<passowrd>@cluster0.n7tc4.mongodb.net/?retryWrites=true&w=majority&appName=cluster0"**
 - **JWT_SECRET='1A4T678nnuPiou76Yt500KNlMuiPP'**
 - **AWS_ACCESS_KEY=key**
 - **AWS_SECRET_KEY=key-value**
 - **AWS_REGION=region**
 - **AWS_S3_BUCKET='aws-bucket-name'
 - **USE_AWS_S3="true"**

### 4️⃣ Start the development server:
**npm start**

The app will run at http://localhost:9000.
