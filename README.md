# FinJob

###### Modern job portals face issues like inconsistent environments, slow deployments, and unreliable resume screening processes. Manual testing and lack of automation lead to errors and inefficient feature delivery. A DevOps-driven solution with CI/CD and containerization is needed to ensure scalable, reliable, and automated recruitment workflows.

# 🚀 TalentSync: Automated Job Portal Lifecycle

This project is a containerized Job Portal with a full CI/CD pipeline, built to satisfy the DevOps lifecycle requirements.

## 🛠️ Tech Stack
- **Frontend:** React.js (Feature-based architecture)
- **Backend:** Node.js & Express
- **Database:** MongoDB
- **DevOps:** Docker, GitHub Actions (CI), Render/Cloud (CD)

---

## 🏗️ How to Run (For Team Members)
Follow these steps to get the project running on your local machine in 2 minutes:

1. **Install Docker Desktop** on your computer.
2. **Clone the repo:** `git clone <your-repo-url>`
3. **Start everything:** In the root folder, run:
   ```bash
   docker-compose up --build


   Copy and paste this into your root README.md file:


## 💻 How to Run Locally (Development Mode)
If you want to code and see changes instantly without waiting for Docker:

### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) (Recommended: v18 or v20)
- Install [MongoDB](https://www.mongodb.com/try/download/community) (or use the Docker DB)

### 2. Setup & Run
Open **two** terminals in VS Code:

**Terminal 1: Backend**
```bash
cd backend
npm install
npm start
Terminal 2: Frontend

Bash
cd frontend
npm install
npm start
App URL: http://localhost:3000

API URL: http://localhost:5000


#Contribution rules
1. The "Main" is Sacred
Never push code directly to the main branch.

The main branch should always be "deployable" (it should never have broken code).

2. The Branching Strategy
Before starting any task, create a new branch from main:

Format: name/feature-description

Example: mansi/setup-docker or rahul/job-api

Command: git checkout -b name/feature
