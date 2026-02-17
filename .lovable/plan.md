

## Design Overhaul: Purple/Magenta Color Palette and Template Update

Redesign the portfolio based on the reference image, switching from the current blue accent dark theme to a **purple-magenta gradient theme** with updated section layouts.

### Color Palette Change

Current blue primary (`#3B82F6`) will be replaced with a purple-magenta scheme:
- **Primary**: Purple (`#A855F7` / purple-500)
- **Accent/Secondary highlight**: Magenta/Pink (`#EC4899`)
- **Background**: Deep dark with subtle purple tint (`#0a0a14`)
- **Cards**: Slightly lighter dark with purple undertone
- **Gradient accents**: Purple-to-magenta gradients for section headings, buttons, and decorative elements

### Files to Change

**1. `src/index.css`** -- Update CSS variables
- Change `--primary` from blue to purple (270 70% 60%)
- Add a new `--accent-pink` variable for magenta highlights
- Update `--background` to have a subtle purple tint
- Update `--card`, `--border`, `--muted` to match the purple-tinted dark theme
- Add gradient background utility classes for decorative purple glow effects behind sections

**2. `src/components/portfolio/Header.tsx`** -- Simplify nav styling
- Update nav links to use uppercase text matching the reference (HOME, ABOUT, WORK, CONTACT)
- Remove the "Developer" logo text, keep it minimal or update branding
- Adjust active link highlight to use the new purple/pink accent

**3. `src/components/portfolio/Hero.tsx`** -- Update hero layout
- Update the "Hello, I am" badge to use a purple gradient or pink accent
- Change the role subtitle to italic style like the reference ("Front-End Developer" in italic)
- Update the "Contact" CTA button to use a pink/magenta gradient background
- Remove the "My Work" secondary button; keep one primary CTA
- Add a purple gradient glow behind the profile image area

**4. `src/components/portfolio/About.tsx`** -- Update section styling
- Change "About" heading to use gradient text (purple to magenta)
- Remove the two-column image layout; make it a centered text block matching the reference
- Add technology icon bubbles row below the about text (circular icon badges for tech stack)
- Remove the stats bar (or move it elsewhere)
- Add a decorative animated logo/icon element below the tech icons (like the "K" monogram in the reference)

**5. `src/components/portfolio/Skills.tsx`** -- Remove or merge
- The reference image doesn't show a separate Skills section with progress bars
- The tech icons in the About section will replace this
- This section can be hidden/removed from the page

**6. `src/components/portfolio/Projects.tsx`** -- Update to match reference layout
- Change section title "Recent Work" with gradient text heading
- Keep the alternating split-grid layout but update styling:
  - Add "Featured Project" label above project titles
  - Add social/link icons (GitHub, external link) below descriptions
  - Update card backgrounds to be more transparent with subtle borders
  - Remove the numbered badge overlay on images

**7. `src/components/portfolio/Contact.tsx`** -- Add contact form
- Change from info-cards-only to a two-column layout:
  - Left: "Drop me a message" text with contact details (phone, email, address with colored circle icons)
  - Right: Contact form with Name, Email, and Message fields plus a pink/magenta "Send message" button
- Update heading to gradient text

**8. `src/components/portfolio/Footer.tsx`** -- Update styling
- Minimal footer with copyright text and social icons on the right
- Match the dark purple-tinted background

**9. `src/components/portfolio/Experience.tsx`** and **`Certificates.tsx`**
- Update card borders and accent colors to purple theme (automatic via CSS variable changes)

**10. `src/pages/Index.tsx`** -- Remove Skills section from page layout

### Technical Details

**CSS Variable Updates (`index.css`):**
```
--background: 260 30% 4%
--foreground: 0 0% 95%
--card: 260 20% 8%
--primary: 270 70% 60%  (purple)
--accent: 330 80% 60%   (magenta/pink)
--border: 260 15% 14%
--muted: 260 15% 10%
```

**New gradient utilities:**
- `.text-gradient` -- gradient text from purple to pink
- `.bg-glow-purple` -- radial purple glow background for decorative effects behind sections

**Contact form:** Will be a visual-only form (no backend submission since there's no Supabase). The "Send message" button can show a toast notification.

