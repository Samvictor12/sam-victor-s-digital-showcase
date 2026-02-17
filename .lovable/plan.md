
## Increase Hero Background Image Visibility

A small change to make the profile background image in the hero section more visible.

### What will change
- **Image opacity**: Increase from `opacity-30` (30%) to `opacity-50` (50%) so the profile silhouette is more prominent
- **Gradient overlay**: Soften the gradient from `via-background/60` to `via-background/40` so less of the image is hidden behind it

### Technical Details
**File:** `src/components/portfolio/Hero.tsx`
- Line 49: Change `opacity-30` to `opacity-50`
- Line 51: Change `via-background/60` to `via-background/40`
