# A6CH Personal Website

A modern, minimalist personal website clone inspired by aromey.lol, customized for a6ch. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with custom color scheme
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in animations on page load and scroll
- **Social Integration**: Direct links to Itch.io, Steam, Discord, and YouTube
- **Performance Optimized**: Static site generation for fast loading
- **TypeScript**: Fully typed for better development experience

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Deployment**: GitHub Pages (Static Export)

## 📦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/brendanhydra/a6ch-website.git
   cd a6ch-website
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
bun run build
```

This will create a static export in the `out` directory.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

The site automatically deploys when you push to the `main` branch. The GitHub Actions workflow:

1. Builds the Next.js project as a static export
2. Deploys to GitHub Pages
3. Makes the site available at: `https://brendanhydra.github.io/a6ch-website/`

### Manual Setup (One-time)

To enable GitHub Pages for your repository:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run on the next push

### Alternative Deployment Options

#### Vercel (Recommended for Next.js)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/brendanhydra/a6ch-website)

#### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `out`

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:

```typescript
colors: {
  'aromey-dark': '#0a0a0a',
  'aromey-primary': '#f5f5f5',
  'aromey-accent': '#8b5cf6',
  'aromey-muted': '#525252'
}
```

### Content

Main content is in `src/app/page.tsx`. Update:

- Profile information
- Social media links
- About section text
- Navigation items

### Social Links

Update social media URLs in the `socialLinks` array in `src/app/page.tsx`.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles and animations
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx          # Main page component
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Performance

- **Static Site Generation**: Pre-rendered for optimal performance
- **Image Optimization**: Next.js Image component with optimization
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size
- **Modern Build**: Uses Next.js 15 with latest optimizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

---

**Live Site**: [https://brendanhydra.github.io/a6ch-website/](https://brendanhydra.github.io/a6ch-website/)

**Original Inspiration**: [aromey.lol](https://aromey.lol)