

## Add Floating "Back to Top" Button

Add a floating arrow-up button fixed to the bottom-right corner that appears only after the user scrolls past the hero section, and smoothly scrolls back to the top when clicked.

### What will change

1. **New component: `src/components/portfolio/ScrollToTop.tsx`**
   - A fixed-position button at the bottom-right corner with an `ArrowUp` icon
   - Uses `IntersectionObserver` to watch the `#hero` section -- button becomes visible only when hero is out of view
   - Smooth fade-in/fade-out animation using opacity and translate transitions
   - Clicking scrolls to top with `smooth` behavior

2. **`src/pages/Index.tsx`** -- Import and render the new `ScrollToTop` component inside the page

3. **`src/components/portfolio/Footer.tsx`** -- Remove the existing inline "back to top" button since the floating one replaces it

### Technical Details

**ScrollToTop.tsx:**
- `useState` to track visibility, `useEffect` with `IntersectionObserver` on the element with `id="hero"`
- When hero is NOT intersecting, show the button; when it IS intersecting, hide it
- Styled with `fixed bottom-6 right-6 z-50` positioning, `bg-primary text-primary-foreground`, rounded-full, with a smooth transition (`opacity-0 translate-y-4` when hidden, `opacity-100 translate-y-0` when visible)

**Footer.tsx:**
- Remove the `ArrowUp` button and its `onClick` handler
- Remove unused `ArrowUp` import

