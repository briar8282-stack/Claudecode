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

Deploy to Vercel with one click!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/briar8282-stack/Claudecode)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel (Recommended)

### Method 1: One-Click Deploy (Easiest!)

1. Click the "Deploy with Vercel" button above
2. Sign in with your GitHub account
3. Click "Deploy"
4. Done! Your site will be live in 2 minutes

### Method 2: Import from GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `briar8282-stack/Claudecode`
4. Click "Deploy"

Your site URL will be: `https://claudecode-[random].vercel.app`

You can customize the domain in Vercel settings!

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
