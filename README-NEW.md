# Klaudio Luku - Portfolio Website

A modern, professional portfolio website showcasing engineering excellence and software development expertise. Built with Next.js 15, TypeScript, and beautiful UI components from shadcn/ui.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Beautiful components from shadcn/ui with custom animations
- **Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast development
- **Professional Sections**:
  - Home: Engaging hero section with technology stack
  - About: Personal story and professional journey
  - Experience: Career timeline and achievements
  - Skills: Interactive technology proficiency showcase
  - Projects: Engineering, software, and teaching work
  - Interests: Personal passions including cinema, music, TV series, and gaming
  - Contact: Professional contact information and availability

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Package Manager**: npm

## 📦 Dependencies

### Core Dependencies
- `next`: 15.3.1 - React framework for production
- `react`: 19.0.0-rc - JavaScript library for building user interfaces
- `typescript`: ^5 - Static type checking

### UI & Styling
- `tailwindcss`: ^4.1.5 - Utility-first CSS framework
- `@radix-ui/*`: Various UI primitives (accordion, navigation, tabs, etc.)
- `lucide-react`: ^0.506.0 - Beautiful & consistent icon toolkit
- `class-variance-authority`: ^0.7.1 - Create type-safe style variants
- `tailwind-merge`: ^2.5.5 - Utility for merging Tailwind CSS classes

### Animations & Effects
- `motion`: ^12.10.5 - Production-ready motion library for React
- `simplex-noise`: ^4.0.3 - Fast simplex noise implementation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/realriven/portfolio-klaudio.git
   cd portfolio-klaudio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-klaudio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              # Home page
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── experience/
│   │   └── page.tsx          # Experience/Career page
│   ├── skills/
│   │   └── page.tsx          # Skills & Technologies
│   ├── projects/
│   │   ├── engineering/      # Engineering projects
│   │   ├── software/         # Software development
│   │   └── teaching/         # Teaching & education
│   ├── interests/
│   │   ├── page.tsx          # Main interests page
│   │   ├── cinema/
│   │   ├── music/
│   │   ├── tv-series/
│   │   └── gaming/
│   └── contact/
│       └── page.tsx          # Contact information
├── components/
│   ├── Layout/
│   │   ├── Menu.tsx          # Navigation component
│   │   └── TimelineItem.tsx  # Timeline component
│   └── ui/                   # shadcn/ui components
├── lib/
│   └── utils.ts              # Utility functions
├── public/
│   ├── images/
│   │   └── svg/              # Technology logos
│   └── fonts/
└── README.md
```

## 🎨 Design Philosophy

This portfolio combines:
- **Engineering Precision**: Clean, structured layouts that reflect technical expertise
- **Creative Expression**: Engaging animations and modern design elements
- **Professional Focus**: Clear presentation of skills, experience, and achievements
- **Personal Touch**: Dedicated sections for interests and personality

## 🚀 Deployment

The site is optimized for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Self-hosted**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores across all categories
- **Bundle Size**: Minimized with tree-shaking and code splitting
- **Loading Speed**: Fast initial page load with Next.js optimizations
- **SEO Ready**: Proper meta tags and structured data

## 🔧 Customization

### Adding New Sections
1. Create a new page in the `app/` directory
2. Add navigation link in `components/Layout/Menu.tsx`
3. Follow existing design patterns for consistency

### Updating Content
- Personal information: Update respective page components
- Skills: Modify `app/skills/page.tsx`
- Projects: Add content to project category pages
- Interests: Update individual interest pages

### Styling
- Global styles: `app/globals.css`
- Component styles: Tailwind classes in component files
- Custom animations: `components/ui/background-gradient-animation.tsx`

---

## 🧩 Development Notes

### shadcn/ui Setup
This project uses shadcn/ui components. To add new components:

```terminal
npx shadcn@latest add [component]
```

### Aceternity UI Integration
Dependencies for enhanced animations:

```terminal
npm i motion clsx tailwind-merge
```

### Next.js 15 & React 19 Compatibility
Motion library configuration for React 19:

```json
"overrides": {
  "motion": {
    "react": "19.0.0-rc-66855b96-20241106",
    "react-dom": "19.0.0-rc-66855b96-20241106"
  }
}
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For questions about this portfolio or potential collaborations:
- **Email**: klaudio.luku@email.com
- **LinkedIn**: [klaudio-luku-1075a0215](https://linkedin.com/in/klaudio-luku-1075a0215)
- **GitHub**: [realriven](https://github.com/realriven)

---

Built with ❤️ by Klaudio Luku