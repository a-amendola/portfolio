# Ashley Amendola - Portfolio Website

My personal portfolio website showcasing my web development work, projects, and professional experience.

🌐 **Live Site:** [ashleyamendola.com](https://ashleyamendola.com)

## About

This portfolio was built to showcase my freelance web development work and provide potential clients and employers with an overview of my skills, experience, and completed projects.

## Features

- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices
- **Dark Mode:** Toggle between light and dark themes with persistent preference storage
- **Animated Background:** Custom SVG wave animations for visual interest
- **Project Showcase:** Interactive carousel displaying recent client work with detailed case studies
- **SEO Optimized:** Implements best practices for search engine visibility
- **Performance Focused:** Optimized images, lazy loading, and minimal bundle size
- **Smooth Animations:** Custom loading screen and hover-based interactions

## Tech Stack

- React
- JavaScript
- CSS
- Vite
- GitHub Pages for depoyment

## Sections

- **Hero:** Introduction with animated wave background
- **What I Offer:** Service cards outlining web development services
- **Featured Work:** Project carousel with case studies and results
- **Testimonials:** Client feedback carousel
- **My Story:** Personal background and journey into web development
- **Contact:** Contact form and social links

## Dark Mode Implementation

Uses CSS custom properties and localStorage to persist theme preferences:
```css
:root {
  color-scheme: light;
  --text: #121212;
  --background: #ffeed7;
  --primary: #0e5130;
  --secondary: #9eb582;
  --accent: #b6ae86;
  --footer: #2a2d2a;
}

:root[data-theme="dark"] {
  color-scheme: dark;
  --text: #b6ae86;
  --background: #2a2d2a;
  --primary: #ffeed7;
  --secondary: #9eb582;
  --accent: #5a8a72;
  --footer: #ffeed7;
}
```

## Local Development
```bash
# Clone the repository
git clone https://github.com/a-amendola/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## SEO

- Semantic HTML structure
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Optimized images with proper alt text
- Mobile-first responsive design
- Fast load times and Core Web Vitals optimization

## Contact

- **Website:** [ashleyamendola.com](https://ashleyamendola.com)
- **Email:** ashleyamendola0@gmail.com
- **LinkedIn:** [Ashley Amendola](https://www.linkedin.com/in/ashley-amendola/)

---

Built with ❤️ by Ashley Amendola
