# Nagaraj Alva - Senior Full-Stack Portfolio

Professional, high-performance developer portfolio built with React 19, TypeScript, and Framer Motion. Featuring an AI-powered assistant powered by Gemini 3 Pro.

## 🚀 Deployment Guide (GitHub Pages)

### 1. Repository Setup
1. Create a new repository on GitHub named `portfolio` (or your preferred name).
2. Initialize git and push your code:
   ```bash
   git init
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### 2. Configure Environment Variables
The AI Chatbot requires an API Key. For GitHub Pages, you can use **GitHub Actions** to inject the `API_KEY` during the build process:
1. Go to your Repo **Settings > Secrets and variables > Actions**.
2. Add a new Repository Secret named `API_KEY` with your Google Gemini API key.

### 3. Deploy
Run the following command to deploy automatically:
```bash
npm run deploy
```

## 🛠 Tech Stack
- **Frontend:** React 19 (ESM Native), TypeScript
- **Styling:** Tailwind CSS (Modern Glassmorphism theme)
- **Animations:** Framer Motion
- **AI:** Google Generative AI (Gemini 3 Pro)
- **Deployment:** GitHub Pages / Vercel

## 📄 License
This project is private and intended for Nagaraj Alva's personal professional use.