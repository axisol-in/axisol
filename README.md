# ☀️ Axisol - Solar Energy Solutions Website

A modern, high-performance React website for Axisol, India's leading solar energy solutions provider. Built with React, TypeScript, and Tailwind CSS, featuring enterprise-level SEO optimization for maximum visibility in search engines.

![Axisol Website](public/logo.png)

## 🌟 Features

### ⚡ Core Features
- **Responsive Design** - Perfect experience on all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Dynamic Routing** - Fast client-side navigation with React Router
- **Interactive UI** - Smooth animations with Framer Motion and GSAP
- **Contact Forms** - Email integration with EmailJS
- **Live Chatbot** - AI-powered customer support
- **Project Portfolio** - Showcase of completed solar installations
- **Blog System** - Content management with Sanity CMS
- **Video Integration** - Hero videos and promotional content

### 🎯 SEO Optimized
- **Meta Tags** - Comprehensive SEO meta tags on every page
- **Schema Markup** - Rich snippets for better search visibility
- **Open Graph** - Optimized social media sharing
- **Sitemap & Robots.txt** - Search engine friendly
- **Page-Specific SEO** - Unique titles and descriptions
- **Performance Optimized** - Fast loading times, code splitting

### 🇮🇳 India-Specific Features
- **Local SEO** - Optimized for Indian cities and regions
- **Government Schemes** - Information about solar subsidies
- **Regional Support** - Multi-language capability (Hindi, regional languages)
- **Indian Payment Methods** - Integration-ready for UPI, wallets
- **Local Business Schema** - Google My Business optimized

## 🚀 Live Demo

**Production:** [https://www.axisol.in](https://www.axisol.in) *(Update with your domain)*

## 📸 Screenshots

| Home Page | Projects | Blog |
|-----------|----------|------|
| ![Home](docs/screenshots/home.png) | ![Projects](docs/screenshots/projects.png) | ![Blog](docs/screenshots/blog.png) |

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.2** - Next-generation build tool

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS transformations
- **Framer Motion 12.23.21** - Animation library
- **GSAP 3.13.0** - Professional-grade animations
- **Lucide React 0.344.0** - Beautiful icons

### Routing & Forms
- **React Router DOM 7.8.2** - Client-side routing
- **React Hook Form 7.62.0** - Form validation
- **Zod 4.1.6** - Schema validation

### Integrations
- **EmailJS 4.4.1** - Email service
- **React CountUp 6.5.3** - Animated counters
- **React Helmet Async** - SEO meta tags management

### Development Tools
- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint 8.3.0** - TypeScript linting
- **Autoprefixer 10.4.18** - CSS vendor prefixes

## 📁 Project Structure

```
Axisol/
├── public/                     # Static assets
│   ├── robots.txt             # Search engine instructions
│   └── sitemap.xml            # Site structure for SEO
├── src/
│   ├── assets/                # Images, videos, project data
│   │   ├── images/            # Optimized WebP images
│   │   ├── videos/            # Hero and about videos
│   │   ├── projects/          # Project images (commercial/residential)
│   │   ├── assets.ts          # Asset exports
│   │   └── projectInfo.ts     # Project metadata
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Epc.tsx
│   │   │   └── Title.tsx
│   │   ├── BlogsSection.tsx
│   │   ├── Chatbot.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Location.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SEO.tsx            # SEO meta tags component
│   │   ├── ServiceLocationsSection.tsx
│   │   ├── Slider.tsx
│   │   ├── UserStoriesSection.tsx
│   │   └── WhyChooseSection.tsx
│   ├── context/               # React Context providers
│   │   └── ThemeContext.tsx   # Dark/Light mode
│   ├── hooks/                 # Custom React hooks
│   ├── pages/                 # Page components
│   │   ├── About.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Blogs.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── TandC.tsx
│   │   ├── Types.tsx
│   │   └── utils.tsx
│   ├── utils/                 # Utility functions
│   │   └── seoSchemas.ts      # SEO schema templates
│   ├── App.tsx                # Main app component
│   ├── index.css              # Global styles
│   ├── main.tsx               # App entry point
│   └── vite-env.d.ts          # Vite type definitions
├── docs/                      # Documentation
│   └── screenshots/           # Project screenshots
├── dist/                      # Production build (generated)
├── .eslintrc.js              # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── SEO_COMPLETE_GUIDE.md      # Comprehensive SEO guide
├── README.md                  # This file
└── DEVELOPER.md               # Developer documentation
```

## 🎨 Design System

### Colors
```css
Primary:     #10b981 (Green - Solar energy)
Secondary:   #1e293b (Dark slate)
Accent:      #f59e0b (Amber - Sun)
Background:  #fcfbf8 (Warm white)
Text:        #1f2937 (Dark gray)
```

### Typography
- **Headings:** System font stack with fallbacks
- **Body:** Inter, sans-serif
- **Responsive:** Mobile-first approach

### Breakpoints
```javascript
sm:  640px   // Mobile landscape
md:  768px   // Tablet
lg:  1024px  // Desktop
xl:  1280px  // Large desktop
2xl: 1536px  // Extra large
```

## 🔥 Key Pages

### Home (`/`)
- Hero section with video background
- Key features and benefits
- Why choose Axisol section
- Featured projects slider
- Service locations
- Call-to-action sections

### About (`/about`)
- Company overview
- Mission and vision
- Team introduction
- Service offerings
- Company brochure download
- About video

### Projects (`/projects`)
- Filterable project gallery
- Residential projects
- Commercial projects
- Project details and images
- Success metrics

### Contact (`/contact`)
- Contact form with validation
- Company information
- Location map
- Service areas
- Email integration

### Blogs (`/blogs`)
- Blog listing with filters
- Featured articles
- Categories (Government Schemes, Solar Tech, etc.)
- Individual blog posts (`/blog/:id`)
- Sanity CMS integration

## 🌐 SEO Features

### Implemented Optimizations
✅ Meta tags (title, description, keywords)  
✅ Open Graph tags for social sharing  
✅ Twitter Card tags  
✅ Schema.org structured data  
✅ XML Sitemap  
✅ Robots.txt  
✅ Canonical URLs  
✅ React Helmet for dynamic meta tags  
✅ Image optimization (WebP format)  
✅ Code splitting for performance  
✅ Mobile-first responsive design  

### Target Keywords
- Solar panel installation India
- Solar energy company India
- Best solar panels India
- Rooftop solar installation
- Commercial solar solutions
- Solar panel cost India
- Net metering India
- Solar subsidy India

**See [SEO_COMPLETE_GUIDE.md](SEO_COMPLETE_GUIDE.md) for complete SEO documentation.**

## 📊 Performance

### Metrics (Target)
- **PageSpeed Score:** 90+ (mobile & desktop)
- **First Contentful Paint:** <1.5s
- **Time to Interactive:** <3.0s
- **Cumulative Layout Shift:** <0.1
- **Largest Contentful Paint:** <2.5s

### Optimizations
- Code splitting (React, animations, main app)
- Lazy loading images
- WebP image format
- Minified CSS/JS
- Tree-shaking unused code
- Optimized bundle sizes

## 🔒 Security

- Environment variables for sensitive data
- HTTPS only in production
- Input validation and sanitization
- CORS configuration
- No exposed API keys

## 🌍 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari 12+
- Chrome Android (latest)

## 📱 Mobile Optimization

- Touch-friendly UI elements
- Mobile-first responsive design
- Optimized images for mobile
- Fast loading on 3G/4G
- Click-to-call phone numbers
- WhatsApp integration
- Mobile-optimized forms

## 🎯 Business Goals

### Primary Objectives
1. Generate quality leads for solar installations
2. Educate customers about solar energy benefits
3. Build brand authority in Indian solar market
4. Showcase completed projects and success stories
5. Rank #1 for target keywords in major cities

### Target Audience
- **Residential:** Homeowners looking to reduce electricity bills
- **Commercial:** Businesses seeking sustainable energy solutions
- **Industrial:** Large-scale solar power requirements
- **Location:** Major Indian cities (Mumbai, Delhi, Bangalore, Pune, etc.)

## 🤝 Contributing

We welcome contributions! See [DEVELOPER.md](DEVELOPER.md) for development guidelines.

### Quick Start for Contributors
```bash
# Fork and clone the repository
git clone https://github.com/axisol-in/axisol.git

# Install dependencies
npm install

# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git commit -m "Add your feature"

# Push and create pull request
git push origin feature/your-feature-name
```

## 📄 License

Copyright © 2025 Axisol. All rights reserved.

This is proprietary software. Unauthorized copying, distribution, or use is strictly prohibited.

## 👥 Team

**Development Team:**
- Frontend Development: React/TypeScript team
- Design: UI/UX team
- SEO: Digital marketing team
- Content: Content writers and editors

**Contact:**
- Website: https://www.axisol.in
- Email: info@axisol.in

## 🙏 Acknowledgments

- **React Team** - For the amazing library
- **Tailwind CSS** - For the utility-first framework
- **Vite** - For the blazing-fast build tool
- **Framer Motion** - For smooth animations
- **Community** - For all the open-source tools

## 📞 Support

For technical support or inquiries:
- **Email:** support@axisol.in
- **Documentation:** [SEO_COMPLETE_GUIDE.md](SEO_COMPLETE_GUIDE.md)
- **Developer Docs:** [DEVELOPER.md](DEVELOPER.md)

---

**Built with ❤️ for a sustainable future | Axisol © 2025**
