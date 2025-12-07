# Copilot Instructions - Hostechnology Portfolio

## Project Overview
Personal portfolio site for Hostechnology - a consulting service bringing AI/automation to community organizations and nonprofits. Built with Create React App, Tailwind CSS, and DaisyUI with a "grunge/modern" aesthetic.

## Architecture & Dual-Version System
This project maintains TWO complete versions of the site that can be toggled:
- **Legacy (`App.js`)**: Service-tier pricing model with 3 tiers (Embedded Developer, Full-Time, End-to-End Delivery)
- **Redesign (`AppNew.js`)**: Workflow-focused approach emphasizing embedding with teams

**Switch versions** in `src/index.js` by changing: `import App from './App'` ↔ `import App from './AppNew'`

Current active version: **AppNew** (redesign)

## Component Architecture

### Redesign Components (`AppNew.js` flow)
All sections render in this specific order (see `SECTION_ORDER.md`):
1. `NavNew` - Fixed navigation with mobile hamburger menu
2. `HeroNew` - Full-screen hero with dual CTAs
3. `ProblemSection` - "You Get It" section with pain points
4. `HowIWork` - Three-column process (EMBED → DESIGN → IMPLEMENT)
5. `Examples` - Three real-world workflow stories
6. `WhoThisIsFor` - Self-selection criteria (good fit / not good fit)
7. `About` - About Shae with photo
8. `ContactCTAs` - Three distinct contact options with embedded form
9. `FooterNew` - Simple footer with social links

### Legacy Components (`App.js`)
- `Nav`, `HeroTwo`, `Tiers`, `Footer` - Traditional service pricing layout

## Design System & Styling

### Grunge Aesthetic (Redesign)
- **No rounded corners**: Use `rounded-none` explicitly
- **Bold borders**: `border-4` with `border-gray-900` or `border-red-600`
- **Hard edges**: Transform effects on hover (`hover:scale-105`)
- **Noise texture**: `.bg-noise` class applies SVG fractal noise overlay (see `index.css`)

### Color Palette
- **Primary Accent**: Red (#DC2626 / `red-600`)
- **Dark**: `gray-900` (#111827) for nav/dark sections
- **Light**: White backgrounds alternating with `gray-100`
- **Text**: `gray-700`, `gray-800`, `gray-900`

### Typography
- Headlines: `text-4xl` to `text-7xl`, always `font-bold`
- Body text: `text-lg` to `text-xl` for readability
- Custom font: Montserrat (configured in `tailwind.config.js` under `fontFamily.montserrat`)

### Anchor Navigation
- Smooth scrolling enabled in `index.css` with `scroll-padding-top: 80px` for fixed nav
- Use `id` attributes: `#process`, `#contact` (referenced in nav links)
- Mobile menu must close on link click (`onClick={() => setIsOpen(false)}`)

## Critical Integration Points

### EmailJS (Contact Form)
`ContactCTAs.jsx` uses `@emailjs/browser` for form submission. **Must configure**:
```javascript
emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with actual service ID
  'YOUR_TEMPLATE_ID',     // Replace with template ID
  formData,
  'YOUR_PUBLIC_KEY'       // Replace with public key
)
```
Form includes: `name`, `organization`, `message`, `contact` fields.

### External Links (Placeholders)
In `ContactCTAs.jsx`:
- CTA 2: Calendly link (currently placeholder)
- CTA 3: Newsletter/Substack link (currently placeholder)

In `FooterNew.jsx`: Social links need actual URLs

## Development Patterns

### State Management
Simple component-level `useState` for:
- Mobile menu toggle (`NavNew`: `isOpen`)
- Form data and submission status (`ContactCTAs`: `formData`, `status`)

### Content Updates
All copy is **placeholder content**. See `REDESIGN_NOTES.md` for content TODOs:
- Replace example stories in `Examples.jsx`
- Update bio in `About.jsx`
- Finalize timeframes in `HowIWork.jsx`

### Responsive Design
- Mobile-first with Tailwind breakpoints
- Mobile menu shows below `md:` breakpoint (768px)
- Grid layouts: `md:grid-cols-2`, `md:grid-cols-3`
- Text scaling: `text-4xl md:text-7xl`

## Build & Run

```bash
npm start          # Dev server on localhost:3000
npm run build      # Production build to /build
npm test           # Jest test runner
```

## Key Files Reference
- `REDESIGN_NOTES.md` - Full implementation checklist and design decisions
- `SECTION_ORDER.md` - Section flow and color scheme documentation
- `tailwind.config.js` - DaisyUI theme config (mytheme) + custom colors
- `index.css` - Grunge utilities (`.bg-noise`, `.text-shadow-hard`, `.border-grunge`)

## Conventions
- **Component naming**: PascalCase JSX files (`NavNew.jsx`, not `navNew.jsx`)
- **No component folders**: All components in flat `src/components/` directory
- **Anchor links**: Use `href="#sectionId"` for same-page navigation
- **Border emphasis**: Prefer `border-4` over subtle borders for grunge feel
- **Button styling**: No rounded corners, bold borders, transform on hover
