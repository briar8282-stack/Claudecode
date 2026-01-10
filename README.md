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

## 🌐 Live Demo

**GitHub Pages**: https://briar8282-stack.github.io/Claudecode/

### Quick Deploy Options

#### Option 1: GitHub Pages (Free & Easy)
The site is configured for automatic deployment to GitHub Pages.

**Enable it in one step:**
1. Go to [Settings → Pages](https://github.com/briar8282-stack/Claudecode/settings/pages)
2. Under "Source", select **GitHub Actions**
3. Done! Your site will be live at the URL above in 2-3 minutes.

#### Option 2: Vercel (Alternative)
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

## Deployment

### GitHub Pages (Configured & Ready)
- Automatic deployment on every push
- Free hosting
- Visit [Settings → Pages](https://github.com/briar8282-stack/Claudecode/settings/pages) to enable

### Vercel (Alternative)
- Click the "Deploy with Vercel" button above for one-click deployment
- Or import from GitHub at [vercel.com](https://vercel.com)

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
