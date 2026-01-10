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

## 🌐 Live Demo & Deployment

### 🚀 Deploy Now (Recommended)

Deploy to Vercel with one click - the fastest way to get your site online!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/briar8282-stack/Claudecode)

**Why Vercel?**
- ✅ One-click deployment (2 minutes to live!)
- ✅ Automatic updates on every push
- ✅ Global CDN for fast loading
- ✅ Free HTTPS & custom domains
- ✅ Zero configuration needed

### Alternative: GitHub Pages

The site also supports GitHub Pages deployment:
1. Go to [Settings → Pages](https://github.com/briar8282-stack/Claudecode/settings/pages)
2. Select **GitHub Actions** as source
3. Site will be live at: https://briar8282-stack.github.io/Claudecode/

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

### Vercel (Recommended)
- **One-click deploy**: Click the "Deploy with Vercel" button above
- **From dashboard**: Import from GitHub at [vercel.com](https://vercel.com)
- **Features**: Automatic deploys, global CDN, free HTTPS, custom domains

### GitHub Pages (Alternative)
- Automatic deployment on every push
- Free hosting on GitHub's infrastructure
- Visit [Settings → Pages](https://github.com/briar8282-stack/Claudecode/settings/pages) to enable

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
