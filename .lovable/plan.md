

## Replace Contact Form with Contact Info Only

Remove the contact form and replace the section with a clean, centered display of your contact information (phone, email, LinkedIn).

### What will change

1. **Contact.tsx** -- Remove the form entirely. Keep only the contact info cards (phone, email, LinkedIn) displayed in a centered, single-column or horizontal layout. Remove `useState` and form-related imports.

2. **Section header** -- Update heading from "Get In Touch" to something like "Contact Me" and remove the "Let's build something great together" subtitle, or keep a simpler one like "Feel free to reach out".

3. **Layout** -- Instead of a 2-column grid (form + info), use a centered single row of 3 contact cards side-by-side on desktop, stacked on mobile.

### Technical Details

**File: `src/components/portfolio/Contact.tsx`**
- Remove `useState`, `useToast`, `Send` imports
- Remove form state and `handleSubmit`
- Replace the `md:grid-cols-2` grid with a `md:grid-cols-3` centered grid of 3 contact info cards (Phone, Email, LinkedIn)
- Each card: icon + label + value, clickable, styled with `bg-card border border-border rounded-xl p-6`

No other files need changes -- the nav link `#contact` and footer link still work since the section `id="contact"` stays the same.
