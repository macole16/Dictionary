# Dictionary Game - React Project Setup & Vercel Deployment

## Prerequisites
- Node.js 18+ installed ([download here](https://nodejs.org/))
- Git installed ([download here](https://git-scm.com/))
- Free Vercel account ([sign up here](https://vercel.com/signup))

## Step 1: Create Project Locally

Open your terminal and run:

```bash
# Create new Vite React project
npm create vite@latest dictionary-game -- --template react

# Navigate into project
cd dictionary-game

# Install dependencies
npm install

# Install Firebase
npm install firebase
```

## Step 2: Replace Files

Delete these default files:
- `src/App.css`
- `src/index.css`
- `src/App.jsx`

Then create the files I'll provide in the next artifacts.

## Step 3: Test Locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser to test.

## Step 4: Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - What's your project's name? dictionary-game
# - In which directory is your code located? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

### Option B: Deploy via Vercel Website

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/dictionary-game.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

## Step 5: Done!

Your app will be live at: `https://dictionary-game-[random].vercel.app`

You can customize the domain in Vercel settings.

## Updating Your App

After making changes:

```bash
# Test locally
npm run dev

# Deploy to Vercel
vercel --prod

# Or if using GitHub: just push
git add .
git commit -m "Update game"
git push
```

Vercel will automatically redeploy on every push!

## Troubleshooting

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

**Build fails:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Firebase errors:**
- Make sure Firebase config is correct in `src/config/firebase.js`
- Check Firebase console that Realtime Database is enabled
