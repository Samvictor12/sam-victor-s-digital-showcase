

# R Sam Victor — Portfolio Website

A modern, single-page portfolio website for a full-stack software engineer, featuring smooth animations, dark/light mode, glassmorphism design elements, and full responsiveness.

---

## 1. Header & Navigation
- Sticky top navigation with "RSV" logo/initials and menu links (Home, About, Skills, Experience, Projects, Certificates, Contact)
- Dark/light mode toggle with sun/moon icon (persisted via localStorage)
- Mobile hamburger menu with animated dropdown
- Smooth scroll to each section on click

## 2. Hero Section
- Full-width gradient background with subtle animated particles or geometric shapes
- Large headline: "R Sam Victor" with animated typewriter subtitle cycling through roles ("Full-Stack Engineer", "React Developer", "Problem Solver")
- Profile photo placeholder with a decorative border/glow effect
- Two CTA buttons: "View Projects" and "Contact Me"
- Fade-in animations on load

## 3. About Section
- Two-column layout: bio text on one side, career highlights on the other
- Bio covering full-stack expertise (React, Java/Express, MySQL/PostgreSQL, Docker, n8n)
- Location badge: Chennai, Tamil Nadu, India
- Career highlights with animated counters (20% efficiency increase, 30% error reduction, 25% productivity boost)

## 4. Skills Section
- Categorized grid with icons from Lucide:
  - Programming Languages (Java, JavaScript)
  - Frameworks (React, Spring Boot, Express)
  - Databases (MySQL, PostgreSQL)
  - Web Technologies (HTML, CSS, Tailwind)
  - Tools (Git, Docker, REST APIs, n8n)
- Glassmorphism cards with hover effects
- Progress bars or skill level indicators

## 5. Experience Section
- Vertical timeline layout with alternating left/right cards
- 5 positions from BinaryWavesSolutions (current) back to Bonfiglioli
- Each card shows role, company, dates, and key bullet points
- Scroll-triggered fade-in animations

## 6. Projects Section
- Interactive project cards (2×2 grid on desktop, stacked on mobile)
- Four projects: Production Monitoring, Accounting & Budgeting, SMT Line Monitoring, Production Planning
- Each card: title, description, tech stack badges, achievement metrics, placeholder for screenshot
- Hover effect with glassmorphism overlay showing details

## 7. Certificates Section
- Badge-style cards for CSA ServiceNow and Selenium/Java certifications
- Clean, minimal layout with certificate icons

## 8. Contact Section
- Split layout: contact form (Name, Email, Message) on one side, contact info on the other
- Display phone, email, and LinkedIn link
- Form uses a toast notification on submit (frontend-only for now, placeholder for Formspree integration)
- Social media icon links

## 9. Footer
- Copyright "© 2026 R Sam Victor"
- Back-to-top smooth scroll button
- Quick navigation links

## Design & Technical Details
- **Color scheme**: Primary blue (#1D4ED8), neutral grays, teal accents, with full dark mode support
- **Typography**: Inter font via Google Fonts
- **Animations**: CSS transitions and Tailwind animate for fade-ins, hovers, and scroll reveals
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Fully responsive**: Mobile-first approach with Tailwind breakpoints
- **No backend needed**: Static SPA, all content hardcoded in data files

