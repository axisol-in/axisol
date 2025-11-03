# 👨‍💻 Axisol Website - Developer Documentation

Complete guide for developers working on the Axisol solar energy website project.

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Development Environment](#development-environment)
3. [Project Architecture](#project-architecture)
4. [Code Standards](#code-standards)
5. [Component Development](#component-development)
6. [State Management](#state-management)
7. [Routing](#routing)
8. [Styling Guidelines](#styling-guidelines)
9. [Performance Best Practices](#performance-best-practices)
10. [Testing](#testing)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

```bash
Node.js: >= 18.0.0  (check: node --version)
npm: >= 9.0.0       (check: npm --version)
Git: >= 2.30.0      (check: git --version)
```

**Recommended:**
- VS Code with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

### Initial Setup

```bash
# 1. Clone the repository
git clone https://github.com/Saragorule13/Axisol.git
cd Axisol

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# Development server will run at:
# Local:   http://localhost:5173/
# Network: http://192.168.x.x:5173/
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)
npm run devhost      # Start dev server with network access

# Production
npm run build        # Build for production (output: dist/)
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint to check code quality
```

---

## 💻 Development Environment

### Recommended VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["className\\s*=\\s*[\"']([^\"']*)[\"']", "([^\"']*)"]
  ]
}
```

### Environment Variables

Create `.env` file in project root:

```env
# Email Service (EmailJS)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Sanity CMS (Blog)
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2023-05-03

# Google Analytics (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# API URLs (if any)
VITE_API_BASE_URL=https://api.yourdomain.com
```

**Security Note:** Never commit `.env` file to Git. It's already in `.gitignore`.

---

## 🏗️ Project Architecture

### Tech Stack

```
Frontend Framework:     React 18.3.1
Language:              TypeScript 5.5.3
Build Tool:            Vite 5.4.2
Styling:               Tailwind CSS 3.4.1
Routing:               React Router DOM 7.8.2
Animations:            Framer Motion 12.23.21, GSAP 3.13.0
Forms:                 React Hook Form 7.62.0
Validation:            Zod 4.1.6
Icons:                 Lucide React 0.344.0
Email:                 EmailJS 4.4.1
CMS:                   Sanity (for blogs)
```

### Folder Structure Explained

```
src/
├── assets/              # Static files (images, videos, data)
│   ├── images/          # Optimized images (WebP format)
│   ├── videos/          # Video files
│   ├── logos/           # Company logos
│   ├── projects/        # Project images (commercial/residential)
│   ├── assets.ts        # Asset exports (images, icons)
│   └── projectInfo.ts   # Project data (used in Projects page)
│
├── components/          # Reusable React components
│   ├── ui/              # Generic UI components
│   │   ├── Button.tsx   # Reusable button component
│   │   ├── Epc.tsx      # EPC section component
│   │   └── Title.tsx    # Section title component
│   ├── BlogsSection.tsx      # Blog listing component
│   ├── Chatbot.tsx           # AI chatbot widget
│   ├── ContactSection.tsx    # Contact form section
│   ├── Footer.tsx            # Site footer
│   ├── Header.tsx            # Navigation header
│   ├── HeroSection.tsx       # Homepage hero
│   ├── Location.tsx          # Service location map
│   ├── ProjectsSection.tsx   # Projects gallery
│   ├── ScrollToTop.tsx       # Scroll restoration utility
│   ├── SEO.tsx               # SEO meta tags component
│   ├── ServiceLocationsSection.tsx  # Service areas
│   ├── Slider.tsx            # Image carousel
│   ├── UserStoriesSection.tsx  # Testimonials
│   └── WhyChooseSection.tsx  # Benefits section
│
├── context/             # React Context (Global state)
│   └── ThemeContext.tsx # Dark/Light mode context
│
├── hooks/               # Custom React hooks (currently empty)
│
├── pages/               # Page components (routes)
│   ├── About.tsx        # About page
│   ├── BlogPost.tsx     # Individual blog post
│   ├── Blogs.tsx        # Blog listing page
│   ├── Contact.tsx      # Contact page
│   ├── Home.tsx         # Homepage
│   ├── Projects.tsx     # Projects page
│   ├── TandC.tsx        # Terms & Conditions / Privacy Policy
│   ├── Types.tsx        # TypeScript type definitions
│   └── utils.tsx        # Page utilities (Sanity queries)
│
├── utils/               # Utility functions
│   └── seoSchemas.ts    # SEO schema templates (FAQ, Service, etc.)
│
├── App.tsx              # Main app component (routing setup)
├── index.css            # Global CSS (Tailwind directives)
├── main.tsx             # App entry point (ReactDOM.render)
└── vite-env.d.ts        # Vite environment type definitions
```

### Data Flow

```
User Interaction
      ↓
Components (UI)
      ↓
React State / Context
      ↓
API Calls (EmailJS, Sanity)
      ↓
Update UI
```

---

## 📐 Code Standards

### TypeScript Guidelines

**Always use TypeScript, not JavaScript:**

```typescript
// ✅ Good
interface User {
  name: string;
  email: string;
  phone?: string;  // Optional field
}

const getUser = (id: string): User | null => {
  // Implementation
};

// ❌ Bad (using 'any')
const getUser = (id: any): any => {
  // Don't do this
};
```

**Component Props Typing:**

```typescript
// ✅ Good - Define props interface
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Naming Conventions

```typescript
// Components: PascalCase
const HeroSection: React.FC = () => {};

// Files: PascalCase for components
HeroSection.tsx
ContactForm.tsx

// Variables & Functions: camelCase
const userName = "John";
const handleSubmit = () => {};

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = "https://api.example.com";
const MAX_ITEMS = 10;

// CSS Classes: kebab-case (Tailwind)
className="hero-section bg-primary-500"

// Types & Interfaces: PascalCase
interface UserProfile {}
type ButtonVariant = 'primary' | 'secondary';
```

### Import Order

```typescript
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

// 3. Internal components
import Header from './components/Header';
import Footer from './components/Footer';

// 4. Context/Hooks
import { useTheme } from './context/ThemeContext';

// 5. Utils/Types
import { User } from './types';
import { formatDate } from './utils';

// 6. Assets
import logo from './assets/logos/logo.png';

// 7. Styles
import './styles.css';
```

---

## 🧩 Component Development

### Component Structure

```typescript
// src/components/ExampleComponent.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 1. Define Props Interface
interface ExampleComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

// 2. Component Definition
const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  description,
  onAction
}) => {
  // 3. State
  const [isActive, setIsActive] = useState(false);

  // 4. Effects
  useEffect(() => {
    // Component mounted
    return () => {
      // Cleanup
    };
  }, []);

  // 5. Handlers
  const handleClick = () => {
    setIsActive(!isActive);
    onAction?.();
  };

  // 6. Render
  return (
    <motion.div 
      className="example-component"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
      <button 
        onClick={handleClick}
        className="btn-primary"
      >
        {isActive ? 'Active' : 'Inactive'}
      </button>
    </motion.div>
  );
};

export default ExampleComponent;
```

### Creating New Components

**Step 1: Create component file**

```bash
# For regular components
src/components/MyComponent.tsx

# For UI components
src/components/ui/MyUIComponent.tsx

# For page components
src/pages/MyPage.tsx
```

**Step 2: Define component**

```typescript
import React from 'react';

interface MyComponentProps {
  // Define props
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return (
    <div className="my-component">
      {/* Component JSX */}
    </div>
  );
};

export default MyComponent;
```

**Step 3: Use component**

```typescript
import MyComponent from './components/MyComponent';

function App() {
  return <MyComponent />;
}
```

---

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

**Use Tailwind utility classes:**

```typescript
// ✅ Good
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
  <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
    Click Me
  </button>
</div>

// ❌ Avoid inline styles
<div style={{ display: 'flex', padding: '16px' }}>
  <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Title</h2>
</div>
```

**Responsive Design:**

```typescript
<div className="
  text-sm        /* Mobile */
  md:text-base   /* Tablet */
  lg:text-lg     /* Desktop */
  xl:text-xl     /* Large desktop */
">
  Responsive Text
</div>

<div className="
  grid 
  grid-cols-1      /* Mobile: 1 column */
  md:grid-cols-2   /* Tablet: 2 columns */
  lg:grid-cols-3   /* Desktop: 3 columns */
  gap-4
">
  {/* Grid items */}
</div>
```

**Dark Mode Support:**

```typescript
<div className="
  bg-white         /* Light mode */
  dark:bg-gray-900 /* Dark mode */
  text-gray-900 
  dark:text-white
">
  Content with dark mode support
</div>
```

### Custom CSS (When Needed)

Add to `src/index.css`:

```css
/* Use @layer for Tailwind layers */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-green-600 text-white rounded-lg 
           hover:bg-green-700 transition-colors duration-200;
  }
  
  .card {
    @apply bg-white dark:bg-gray-800 rounded-lg shadow-md p-6;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-green-600 to-blue-600 
           bg-clip-text text-transparent;
  }
}
```

---

## 🔄 State Management

### React Context (Theme Example)

**Create Context:**

```typescript
// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

**Use Context:**

```typescript
import { useTheme } from './context/ThemeContext';

const MyComponent = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDark ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
};
```

### Local State (useState)

```typescript
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  
  const increment = () => setCount(prev => prev + 1);
  
  return <button onClick={increment}>Count: {count}</button>;
};
```

---

## 🛣️ Routing

### Adding New Routes

**Step 1: Create page component** (`src/pages/NewPage.tsx`):

```typescript
import React from 'react';
import SEO from '../components/SEO';

const NewPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="New Page - Axisol"
        description="Description of new page"
        keywords="solar, new page"
      />
      <div className="new-page">
        <h1>New Page</h1>
      </div>
    </>
  );
};

export default NewPage;
```

**Step 2: Add route** (in `src/App.tsx`):

```typescript
import NewPage from './pages/NewPage';

function App() {
  return (
    <Routes>
      {/* Existing routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      
      {/* Add new route */}
      <Route path="/new-page" element={<NewPage />} />
    </Routes>
  );
}
```

**Step 3: Add navigation link** (in `src/components/Header.tsx`):

```typescript
<Link to="/new-page">New Page</Link>
```

### Route Parameters

```typescript
// Dynamic route
<Route path="/blog/:id" element={<BlogPost />} />

// In component
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  return <div>Blog Post ID: {id}</div>;
};
```

---

## ⚡ Performance Best Practices

### Code Splitting

**Already implemented in `vite.config.ts`:**

```typescript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        'animation-vendor': ['framer-motion', 'gsap'],
      },
    },
  },
}
```

### Lazy Loading Components

```typescript
import React, { lazy, Suspense } from 'react';

// Lazy load heavy components
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Image Optimization

```typescript
// ✅ Good - Use WebP, add loading="lazy"
<img 
  src="/images/hero.webp" 
  alt="Solar panels"
  loading="lazy"
  width="800"
  height="600"
/>

// ✅ Better - Responsive images
<picture>
  <source 
    srcSet="/images/hero-large.webp 1200w,
            /images/hero-medium.webp 800w,
            /images/hero-small.webp 480w"
    type="image/webp"
  />
  <img src="/images/hero.jpg" alt="Solar panels" loading="lazy" />
</picture>
```

### Memoization

```typescript
import React, { memo, useMemo, useCallback } from 'react';

// Memoize expensive computations
const ExpensiveComponent = () => {
  const expensiveValue = useMemo(() => {
    return someExpensiveCalculation();
  }, [dependency]);

  const handleClick = useCallback(() => {
    // Handler logic
  }, [dependency]);

  return <div>{expensiveValue}</div>;
};

// Prevent unnecessary re-renders
export default memo(ExpensiveComponent);
```

---

## 🧪 Testing

### Manual Testing Checklist

**Before Every Deploy:**

- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on mobile (iOS & Android)
- [ ] Test all forms submit correctly
- [ ] Test all links work
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test dark/light mode toggle
- [ ] Check console for errors
- [ ] Test page load speed (< 3 seconds)
- [ ] Verify SEO meta tags
- [ ] Test contact form email delivery

### Browser DevTools Testing

```javascript
// Check if Google Analytics is loaded
console.log(window.gtag);

// Check page performance
performance.getEntries();

// Check bundle sizes
// Network tab → Filter JS files → Check sizes
```

---

## 🚀 Deployment

### Build for Production

```bash
# 1. Build the project
npm run build

# Output: dist/ folder contains production build

# 2. Preview build locally (optional)
npm run preview
```

### Deploy to Hosting

**Option A: Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Option B: Netlify**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

**Option C: Manual Upload**

1. Build project: `npm run build`
2. Upload `dist/` folder contents to your hosting
3. Configure server for SPA routing:

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Environment Variables in Production

Make sure to set these in your hosting platform:

```
VITE_EMAILJS_SERVICE_ID=xxx
VITE_EMAILJS_TEMPLATE_ID=xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
VITE_SANITY_PROJECT_ID=xxx
VITE_GA_MEASUREMENT_ID=xxx
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue: `npm install` fails**

```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Issue: Build fails with TypeScript errors**

```bash
# Check for type errors
npm run lint

# Fix auto-fixable issues
npx eslint . --fix
```

**Issue: Images not loading**

```typescript
// ✅ Correct - Use relative paths
import logo from '../assets/logos/logo.png';

// ❌ Wrong - Don't use absolute paths
import logo from '/src/assets/logos/logo.png';
```

**Issue: Routing doesn't work after refresh**

- Make sure server is configured for SPA routing
- See deployment section above

**Issue: Dark mode not persisting**

```typescript
// Check localStorage
console.log(localStorage.getItem('theme'));

// Clear and test
localStorage.clear();
```

### Debug Mode

```typescript
// Enable React DevTools
// Install: https://chrome.google.com/webstore/detail/react-developer-tools

// Log component renders
useEffect(() => {
  console.log('Component mounted/updated');
});
```

---

## 📚 Additional Resources

### Documentation Links
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- Vite: https://vitejs.dev/guide
- Tailwind CSS: https://tailwindcss.com/docs
- React Router: https://reactrouter.com/en/main
- Framer Motion: https://www.framer.com/motion
- EmailJS: https://www.emailjs.com/docs

### Useful VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Path Intellisense
- GitLens

---

## 🤝 Contributing

### Git Workflow

```bash
# 1. Create feature branch
git checkout -b feature/my-feature

# 2. Make changes and commit
git add .
git commit -m "Add: description of changes"

# 3. Push to remote
git push origin feature/my-feature

# 4. Create Pull Request on GitHub
```

### Commit Message Format

```
Type: Brief description

Types:
- Add: New feature
- Fix: Bug fix
- Update: Update existing feature
- Remove: Remove code/feature
- Refactor: Code refactoring
- Docs: Documentation changes
- Style: Code style changes

Examples:
Add: Contact form validation
Fix: Mobile menu not closing
Update: SEO meta tags for blog posts
Refactor: Simplify header component
```

---

## 📞 Getting Help

**For Development Issues:**
- Check this documentation first
- Search GitHub issues: https://github.com/Saragorule13/Axisol/issues
- Ask team lead or senior developer

**For SEO/Marketing:**
- See: [SEO_COMPLETE_GUIDE.md](SEO_COMPLETE_GUIDE.md)

---

**Happy Coding! 🚀**

*Last Updated: November 3, 2025*
