# Auckland Schools Ranking

A comprehensive ranking system for Auckland schools with a 10-point rating scale.

## Features

- 🏫 25 Auckland schools with detailed information
- 📊 10-point rating system with breakdown by:
  - Academic Performance
  - Facilities
  - Extracurricular Activities
  - Teaching Quality
- 🔍 Search by school name or area
- 🎯 Filter by school type and decile
- 📈 Sort by rating, academic performance, or name
- 📱 Responsive design

## Live Demo

The site is automatically deployed to GitHub Pages via GitHub Actions.

**URL:** `https://<username>.github.io/Claudecode/`

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to GitHub Pages

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your GitHub repository
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **The site will automatically deploy when you push to the branch:**
   - Branch: `claude/auckland-schools-ranking-qBGCD`
   - GitHub Actions will build and deploy automatically
   - Check the **Actions** tab to see deployment progress

3. **Access your site:**
   - Once deployed, your site will be available at:
   - `https://<your-github-username>.github.io/Claudecode/`

### Manual Deployment

If you want to trigger a manual deployment:

1. Go to the **Actions** tab in your GitHub repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Technology Stack

- **Framework:** Next.js 16.1
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages with GitHub Actions

## Project Structure

```
.
├── app/              # Next.js app directory
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page with school rankings
├── data/             # School data
│   └── schools.ts    # School information and ratings
├── public/           # Static files
└── .github/          # GitHub Actions workflows
    └── workflows/
        └── deploy.yml # Deployment workflow
```

## Contributing

Feel free to submit issues or pull requests to improve the school data or add new features.

## License

ISC
