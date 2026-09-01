# START HERE — Smaran Setu Frontend

This guide is written for a beginner. Follow the steps in order.

## A. Install software

1. Install Node.js LTS.
2. Install VS Code.
3. Install Git.
4. Create/sign in to GitHub.

In VS Code, click **Terminal → New Terminal**.

Type:

```bash
node -v
npm -v
git --version
```

If all three show a version number, continue.

## B. Open this project

1. Extract `smaran-setu-frontend-ready.zip`.
2. Open VS Code.
3. Click **File → Open Folder**.
4. Select the extracted `smaran-setu-frontend` folder.
5. In the left Explorer, confirm you can see `src`, `public`, `package.json`, and `vite.config.js`.

## C. Install packages

Click **Terminal → New Terminal**.

Run:

```bash
npm install
```

Wait until it finishes.

If Windows PowerShell blocks npm scripts, open Command Prompt from VS Code's terminal dropdown and run the same command there.

## D. Start the website

Run:

```bash
npm run dev
```

Vite will show a local address, usually:

`http://localhost:5173`

Hold Ctrl and click the address, or copy it into Chrome.

## E. Test the User side

1. Click **Get Started**.
2. Click **User**.
3. Enter any test email and password.
4. Click **Continue as User**.
5. Test Home → Games → open a game → choose an answer → Submit → Progress.
6. Test Memories.
7. Test Routine.
8. Test Settings and turn Large Text on/off.
9. Test the **Need help?** voice button.

## F. Test the Caregiver side

1. Go back to `/login`.
2. Choose **Caregiver**.
3. Enter any test email and password.
4. Click **Continue as Caregiver**.
5. Test Dashboard, My User, Memories, Add Memory, Activities, Progress, Alerts, Reports and Settings.

## G. Where to edit things

### Change app colors
Open:
`src/index.css`

### Change logo
Replace:
`src/assets/logo.png`

Keep the same filename to avoid changing code.

### Change User Home
Open:
`src/pages/patient/Home.jsx`

### Change games
Open:
`src/data/games.js`

### Change memory cards
Open:
`src/data/memories.js`

### Change routine
Open:
`src/data/routines.js`

### Change caregiver dashboard
Open:
`src/pages/caregiver/Dashboard.jsx`

### Add a new page
1. Create a `.jsx` file in the correct `src/pages/...` folder.
2. Import it in `src/App.jsx`.
3. Add a `<Route>`.

## H. GitHub — first upload

1. Go to GitHub in Chrome.
2. Click the **+** button in the top-right.
3. Click **New repository**.
4. Repository name: `smaran-setu-sih26003`.
5. Choose Public or Private according to your team requirement.
6. Do NOT add a README because this folder already has one.
7. Click **Create repository**.
8. Copy the HTTPS repository address shown by GitHub.

Back in VS Code terminal, run:

```bash
git init
git add .
git commit -m "Initial Smaran Setu frontend"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the address copied from GitHub.

## I. Daily Git workflow

Before starting:

```bash
git pull origin main
```

Create a feature branch:

```bash
git checkout -b feature/patient-ui
```

After making changes:

```bash
git add .
git commit -m "Build patient home UI"
git push -u origin feature/patient-ui
```

Then open GitHub → your repository → **Compare & pull request** → create the Pull Request.

## J. Recommended build order

1. Brand + logo
2. Welcome/Login
3. User Home
4. Games
5. Game Result
6. Memories
7. Routine
8. Progress
9. Accessibility
10. Caregiver Dashboard
11. Caregiver Memories + Add Memory
12. Activities
13. Alerts
14. Reports
15. Responsive/mobile polish
16. Backend API integration
17. AI integration

## K. Important prototype note

The current login is only a frontend demo. It does not provide real authentication or secure patient-data storage. Replace the demo services with a real backend before production use.
