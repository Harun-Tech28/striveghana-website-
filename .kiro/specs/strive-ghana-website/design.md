# Design Document: Strive Ghana Website

## Overview

The Strive Ghana website will be built as a modern, responsive, static website with integrated payment processing capabilities. The architecture prioritizes simplicity, performance, and ease of maintenance for a non-profit organization while delivering a visually compelling Islamic aesthetic.

### Technology Stack

- **Frontend Framework**: React.js with Next.js for server-side rendering and optimal SEO
- **Styling**: Tailwind CSS for responsive design with custom Islamic-themed components
- **Payment Integration**: Stripe for international donations (with PayPal as secondary option)
- **Form Handling**: React Hook Form with email service integration (EmailJS or similar)
- **Hosting**: Vercel or Netlify for static site hosting with automatic SSL
- **Content**: Hardcoded content with potential for future CMS integration

### Design Principles

1. **Islamic Aesthetic First**: Every visual element should reflect Islamic values and cultural sensitivity
2. **Mobile-First Responsive**: Majority of users in Ghana access via mobile devices
3. **Performance Optimized**: Fast loading times for users with limited bandwidth
4. **Accessibility Compliant**: WCAG 2.1 AA standards for inclusive access
5. **Donation-Focused**: Clear pathways to support the organization financially

## Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        User Browser                          │
│  (Desktop, Tablet, Mobile)                                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ HTTPS
                     │
┌────────────────────▼────────────────────────────────────────┐
│                   Next.js Application                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Pages (SSR/SSG)                                      │  │
│  │  - Home, About, Programs, Donate, Contact            │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  React Components                                     │  │
│  │  - Header, Footer, DonationForm, ContactForm         │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Styling Layer (Tailwind CSS)                        │  │
│  │  - Islamic theme, Responsive utilities              │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────┬───────────────────┘
                     │                    │
                     │                    │
        ┌────────────▼──────────┐  ┌─────▼──────────────┐
        │   Stripe Payment API  │  │  EmailJS Service   │
        │  (Donation Processing)│  │  (Contact Forms)   │
        └───────────────────────┘  └────────────────────┘
```

### Page Structure

```
/
├── index (Home)
├── about
├── programs
│   ├── new-muslim-care
│   ├── youth-empowerment
│   ├── islamic-learning
│   └── social-integration
├── get-involved
│   ├── volunteer
│   └── mentor
├── donate
└── contact
```

## Components and Interfaces

### Core Components

#### 1. Layout Components

**Header Component**
```typescript
interface HeaderProps {
  currentPage: string;
}

Features:
- Bilingual logo (English "Strive" + Arabic "السعي")
- Responsive navigation menu
- Mobile hamburger menu (< 768px)
- Sticky header on scroll
- "Donate Now" CTA button (prominent)
```

**Footer Component**
```typescript
interface FooterProps {
  showNewsletter?: boolean;
}

Features:
- Contact information (email, address, P.O. Box)
- Quick links to main pages
- Social media links (if applicable)
- Copyright and non-profit status
- Zakat/Sadaqat acceptance notice
```

**Navigation Component**
```typescript
interface NavigationProps {
  items: NavigationItem[];
  isMobile: boolean;
}

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}
```

#### 2. Content Components

**Hero Section Component**
```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaButtons: CTAButton[];
}

Features:
- Full-width background with Islamic geometric overlay
- Animated text entrance
- Multiple CTA buttons
- Responsive height adjustment
```

**Program Card Component**
```typescript
interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
  activities: string[];
  link: string;
}

Features:
- Hover effects with elevation
- Islamic iconography
- Expandable details
- Link to dedicated program page
```

**Stats Counter Component**
```typescript
interface StatsProps {
  stats: Stat[];
}

interface Stat {
  value: string;
  label: string;
  icon: string;
}

Features:
- Animated counting on scroll into view
- Year 1 goals display (35+ youth, 20 mentors, 5 programs, 3 mosques)
- Islamic-themed icons
```

**Quranic Verse Component**
```typescript
interface VerseProps {
  arabicText: string;
  translation: string;
  reference: string;
}

Features:
- Arabic text in traditional calligraphic font
- Right-to-left text rendering
- English translation below
- Surah and verse reference
- Decorative borders
```

#### 3. Form Components

**Donation Form Component**
```typescript
interface DonationFormProps {
  onSubmit: (data: DonationData) => Promise<void>;
}

interface DonationData {
  amount: number;
  frequency: 'once' | 'monthly';
  donorName: string;
  email: string;
  message?: string;
  donationType: 'general' | 'sponsor' | 'zakat' | 'sadaqat';
}

Features:
- Predefined amounts ($25, $50, $100, custom)
- Monthly sponsorship option ($25/month)
- Donation type selector (General, Sponsor Student, Zakat, Sadaqat)
- Stripe payment element integration
- Budget breakdown display
- Secure payment processing
- Confirmation page with receipt
```

**Contact Form Component**
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactData) => Promise<void>;
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  interest: 'volunteer' | 'mentor' | 'general' | 'partnership';
}

Features:
- Form validation
- Interest category selection
- Email delivery via EmailJS
- Success/error messaging
- Anti-spam protection
```

#### 4. Visual Components

**Islamic Pattern Background**
```typescript
interface PatternProps {
  pattern: 'geometric' | 'arabesque' | 'calligraphy';
  opacity: number;
  color: string;
}

Features:
- SVG-based patterns for scalability
- Multiple pattern options
- Configurable opacity and colors
- Performance-optimized rendering
```

**Image Gallery Component**
```typescript
interface GalleryProps {
  images: GalleryImage[];
  layout: 'grid' | 'masonry' | 'carousel';
}

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

Features:
- Lazy loading
- Lightbox view
- Responsive layouts
- Islamic community activity photos
```

## Data Models

### Content Data Structure

```typescript
// Organization Information
interface OrganizationInfo {
  name: {
    english: string;
    arabic: string;
  };
  motto: string;
  mission: string;
  vision: string;
  contact: ContactInfo;
  address: Address;
}

interface ContactInfo {
  email: string;
  website: string;
  phone?: string;
}

interface Address {
  poBox: string;
  street: string;
  city: string;
  region: string;
}

// Programs
interface Program {
  id: string;
  title: string;
  description: string;
  activities: string[];
  icon: string;
  category: 'new-muslim' | 'youth' | 'learning' | 'social';
}

// Core Objectives
interface Objective {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Organizational Structure
interface OrganizationalStructure {
  board: Member[];
  executiveTeam: ExecutiveMember[];
  departments: Department[];
}

interface Member {
  name?: string; // Optional for privacy
  role: string;
}

interface ExecutiveMember extends Member {
  title: string;
}

interface Department {
  name: string;
  description: string;
}

// Budget
interface Budget {
  items: BudgetItem[];
  total: number;
}

interface BudgetItem {
  category: string;
  amount: number;
}

// Goals
interface Goal {
  description: string;
  target: string;
  icon: string;
}
```

### Payment Data Models

```typescript
// Stripe Integration
interface PaymentIntent {
  amount: number;
  currency: string;
  metadata: {
    donorName: string;
    donorEmail: string;
    donationType: string;
    frequency: string;
  };
}

interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}
```

## Error Handling

### Client-Side Error Handling

1. **Form Validation Errors**
   - Display inline error messages below form fields
   - Highlight invalid fields with red borders
   - Prevent form submission until all errors resolved
   - Provide clear, actionable error messages

2. **Payment Processing Errors**
   - Catch Stripe API errors
   - Display user-friendly error messages
   - Provide retry mechanism
   - Log errors for admin review
   - Never expose sensitive payment details

3. **Network Errors**
   - Detect offline status
   - Display "No internet connection" message
   - Implement retry logic with exponential backoff
   - Cache form data to prevent loss

4. **Image Loading Errors**
   - Provide fallback placeholder images
   - Implement lazy loading with error boundaries
   - Use optimized image formats (WebP with JPEG fallback)

### Error Logging Strategy

```typescript
interface ErrorLog {
  timestamp: Date;
  errorType: string;
  message: string;
  stackTrace?: string;
  userAgent: string;
  page: string;
}

// Log critical errors to external service (e.g., Sentry)
// Log payment errors separately for security audit
```

## Testing Strategy

### Unit Testing

**Components to Test:**
- All form components (validation logic)
- Donation calculation logic
- Navigation menu behavior
- Responsive layout utilities

**Testing Framework:** Jest + React Testing Library

**Coverage Target:** 80% for critical components

### Integration Testing

**Scenarios:**
1. Complete donation flow (form → Stripe → confirmation)
2. Contact form submission (form → EmailJS → success message)
3. Navigation across all pages
4. Mobile menu interaction
5. Payment error handling

**Testing Framework:** Cypress or Playwright

### Accessibility Testing

**Tools:**
- axe-core for automated accessibility checks
- Manual keyboard navigation testing
- Screen reader testing (NVDA/JAWS)
- Color contrast validation

**Compliance Target:** WCAG 2.1 AA

### Performance Testing

**Metrics:**
- Lighthouse score > 90 for all categories
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Total page size < 2MB

**Tools:**
- Lighthouse CI
- WebPageTest
- Chrome DevTools Performance tab

### Cross-Browser Testing

**Browsers:**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Payment Testing

**Test Cases:**
1. Successful one-time donation
2. Successful monthly sponsorship setup
3. Declined card handling
4. Invalid card number
5. Network timeout during payment
6. Different donation types (General, Zakat, Sadaqat, Sponsor)

**Environment:** Stripe Test Mode with test card numbers

## Design System

### Color Palette

```css
/* Primary Colors - Islamic Green Theme */
--primary-green: #2D5F3F;
--primary-green-light: #4A8B5C;
--primary-green-dark: #1A3D28;

/* Accent Colors - Gold */
--accent-gold: #D4AF37;
--accent-gold-light: #E8C968;
--accent-gold-dark: #B8941F;

/* Secondary Colors */
--secondary-blue: #1E5A7D;
--secondary-teal: #2C7A7B;

/* Neutral Colors */
--white: #FFFFFF;
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-700: #374151;
--gray-900: #111827;

/* Semantic Colors */
--success: #10B981;
--error: #EF4444;
--warning: #F59E0B;
--info: #3B82F6;
```

### Typography

```css
/* Arabic Text */
--font-arabic: 'Amiri', 'Traditional Arabic', serif;

/* English Text */
--font-primary: 'Inter', 'Segoe UI', sans-serif;
--font-heading: 'Poppins', 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Spacing System

```css
/* Based on 4px base unit */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Islamic Design Elements

1. **Geometric Patterns**
   - 8-point star patterns for backgrounds
   - Interlocking geometric borders
   - Subtle pattern overlays (10-15% opacity)

2. **Calligraphy**
   - Arabic organization name in header
   - Quranic verses in decorative frames
   - Section dividers with Arabic flourishes

3. **Color Usage**
   - Green as primary (Islamic significance)
   - Gold for accents and CTAs (nobility, value)
   - White for cleanliness and clarity
   - Avoid excessive red (cultural sensitivity)

4. **Imagery Guidelines**
   - Community photos showing diversity
   - Learning circles and mentorship
   - Youth engagement activities
   - No inappropriate imagery per Islamic guidelines
   - Modest representation of people

## Implementation Phases

### Phase 1: Foundation (Week 1)
- Project setup (Next.js, Tailwind, TypeScript)
- Design system implementation
- Core layout components (Header, Footer, Navigation)
- Basic page structure

### Phase 2: Content Pages (Week 2)
- Homepage with hero and key sections
- About page with organizational info
- Programs pages with detailed descriptions
- Islamic design elements integration

### Phase 3: Interactive Features (Week 3)
- Contact form with EmailJS integration
- Responsive navigation and mobile menu
- Image galleries and animations
- Accessibility improvements

### Phase 4: Payment Integration (Week 4)
- Stripe account setup
- Donation form component
- Payment processing logic
- Confirmation and receipt pages

### Phase 5: Testing & Optimization (Week 5)
- Cross-browser testing
- Performance optimization
- Accessibility audit
- Payment flow testing
- Bug fixes

### Phase 6: Deployment (Week 6)
- Domain configuration (striveghana.org)
- SSL certificate setup
- Production deployment to Vercel/Netlify
- Analytics integration (optional)
- Final testing

## Security Considerations

1. **Payment Security**
   - Use Stripe's PCI-compliant payment elements
   - Never store card details on server
   - Implement HTTPS everywhere
   - Use environment variables for API keys

2. **Form Security**
   - Implement CSRF protection
   - Add rate limiting to prevent spam
   - Validate all inputs server-side
   - Sanitize user-generated content

3. **Data Privacy**
   - Minimal data collection
   - Clear privacy policy
   - Secure email transmission
   - No third-party tracking without consent

## Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component
   - WebP format with fallbacks
   - Lazy loading for below-fold images
   - Responsive image sizes

2. **Code Splitting**
   - Route-based code splitting (automatic with Next.js)
   - Dynamic imports for heavy components
   - Tree shaking for unused code

3. **Caching Strategy**
   - Static page generation where possible
   - CDN caching for assets
   - Browser caching headers
   - Service worker for offline support (optional)

4. **Bundle Optimization**
   - Minimize JavaScript bundle size
   - Remove unused CSS with PurgeCSS
   - Compress assets with Gzip/Brotli
   - Optimize font loading

## Accessibility Features

1. **Semantic HTML**
   - Proper heading hierarchy
   - Landmark regions (header, nav, main, footer)
   - Descriptive link text
   - Form labels and ARIA attributes

2. **Keyboard Navigation**
   - All interactive elements keyboard accessible
   - Visible focus indicators
   - Skip to main content link
   - Logical tab order

3. **Screen Reader Support**
   - Alt text for all images
   - ARIA labels for icon buttons
   - Live regions for dynamic content
   - Descriptive page titles

4. **Visual Accessibility**
   - Minimum 4.5:1 contrast ratio for text
   - Resizable text up to 200%
   - No information conveyed by color alone
   - Clear visual hierarchy

## Future Enhancements

1. **Content Management System**
   - Integrate Strapi or Sanity for easy content updates
   - Allow staff to update programs and events
   - Blog functionality for news and updates

2. **User Accounts**
   - Donor portal to view donation history
   - Volunteer registration and tracking
   - Mentorship matching system

3. **Multilingual Support**
   - Full Arabic translation
   - Language switcher
   - RTL layout support

4. **Advanced Features**
   - Event calendar and registration
   - Online learning portal
   - Community forum
   - Newsletter subscription

5. **Analytics & Reporting**
   - Donation tracking dashboard
   - Program impact metrics
   - Visitor analytics
   - Conversion optimization
