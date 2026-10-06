# Design Document: Arabic Language Support

## Overview

This design document outlines the implementation approach for adding bilingual support (English and Arabic) to the StriveGhana website. The solution uses React Context API for state management, browser localStorage for persistence, and a structured translation system that supports both left-to-right (LTR) and right-to-left (RTL) layouts.

The design prioritizes:
- **Performance**: Client-side language switching without page reloads
- **Maintainability**: Centralized translation files with type safety
- **User Experience**: Seamless language switching with visual feedback
- **Accessibility**: Keyboard navigation and screen reader support
- **Scalability**: Easy addition of new translations

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Root Layout (layout.tsx)                 │
│  ┌───────────────────────────────────────────────────────┐  │
│  │         LanguageProvider (Context Provider)           │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │              Application Components              │  │  │
│  │  │  ┌──────────────┐  ┌──────────────────────────┐ │  │  │
│  │  │  │   Header     │  │   Page Components        │ │  │  │
│  │  │  │ ┌──────────┐ │  │  - Home                  │ │  │  │
│  │  │  │ │ Language │ │  │  - About                 │ │  │  │
│  │  │  │ │ Switcher │ │  │  - Programs              │ │  │  │
│  │  │  │ └──────────┘ │  │  - Donate                │ │  │  │
│  │  │  └──────────────┘  │  - Contact               │ │  │  │
│  │  │                    │  - Get Involved          │ │  │  │
│  │  │                    └──────────────────────────┘ │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
         │                                    │
         ▼                                    ▼
┌──────────────────┐              ┌──────────────────────┐
│  localStorage    │              │  Translation Files   │
│  - language pref │              │  - en.ts             │
└──────────────────┘              │  - ar.ts             │
                                  └──────────────────────┘
```

### Technology Stack

- **React Context API**: Global language state management
- **TypeScript**: Type-safe translation keys and language definitions
- **localStorage**: Client-side language preference persistence
- **Tailwind CSS**: RTL-aware styling with directional utilities
- **Next.js 14**: App Router with client-side interactivity

## Components and Interfaces

### 1. Language Context

**File**: `src/contexts/LanguageContext.tsx`

```typescript
interface LanguageContextType {
  language: 'en' | 'ar'
  setLanguage: (lang: 'en' | 'ar') => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}
```

**Responsibilities**:
- Manage current language state
- Provide translation function `t(key)`
- Handle localStorage persistence
- Expose text direction for layout
- Notify components of language changes

**Key Features**:
- Initializes from localStorage on mount
- Falls back to English if no preference exists
- Updates HTML `dir` and `lang` attributes
- Provides memoized translation function

### 2. Language Switcher Component

**File**: `src/components/ui/LanguageSwitcher.tsx`

```typescript
interface LanguageSwitcherProps {
  variant?: 'header' | 'footer' | 'mobile'
  className?: string
}
```

**Responsibilities**:
- Display language toggle button/dropdown
- Show current active language
- Handle language change events
- Provide visual feedback on selection

**Design Variants**:
- **Header**: Compact button with flag icons or language codes
- **Footer**: Text links with language names
- **Mobile**: Full-width buttons in mobile menu

**Visual Design**:
- English: "EN" with 🇬🇧 or text "English"
- Arabic: "عربي" with appropriate styling
- Active state: Highlighted with primary color
- Hover state: Subtle background change

### 3. Translation System

**File Structure**:
```
src/
  locales/
    en.ts          # English translations
    ar.ts          # Arabic translations
    index.ts       # Translation loader and types
```

**Translation File Structure**:
```typescript
interface Translations {
  common: {
    home: string
    about: string
    programs: string
    donate: string
    contact: string
    getInvolved: string
    // ... more common terms
  }
  home: {
    hero: {
      title: string
      subtitle: string
      cta: string
    }
    // ... page-specific translations
  }
  forms: {
    labels: { ... }
    placeholders: { ... }
    validation: { ... }
    buttons: { ... }
  }
  // ... other sections
}
```

**Translation Key Access**:
- Dot notation: `t('common.home')`
- Nested keys: `t('home.hero.title')`
- Type-safe with TypeScript autocomplete

### 4. RTL Layout Handler

**File**: `src/app/layout.tsx` (modified)

**Responsibilities**:
- Apply `dir="rtl"` or `dir="ltr"` to `<html>` element
- Load appropriate fonts for Arabic (Noto Sans Arabic, Amiri)
- Update document language attribute

**Implementation**:
```typescript
// Dynamic dir and lang attributes based on context
<html lang={language} dir={dir}>
```

### 5. Updated Data Models

**File**: `src/data/organization.ts` (modified)

All data structures will be updated to support bilingual content:

```typescript
interface BilingualText {
  en: string
  ar: string
}

interface Program {
  id: string
  title: BilingualText
  description: BilingualText
  activities: BilingualText[]
  icon: string
  category: string
}
```

## Data Models

### Translation Data Structure

```typescript
// src/locales/types.ts
export type Language = 'en' | 'ar'

export interface TranslationKeys {
  // Navigation
  'nav.home': string
  'nav.about': string
  'nav.programs': string
  'nav.donate': string
  'nav.contact': string
  'nav.getInvolved': string
  
  // Common
  'common.learnMore': string
  'common.readMore': string
  'common.submit': string
  'common.cancel': string
  
  // Home page
  'home.hero.title': string
  'home.hero.subtitle': string
  'home.hero.cta': string
  
  // Forms
  'forms.name': string
  'forms.email': string
  'forms.phone': string
  'forms.message': string
  'forms.amount': string
  
  // Validation
  'validation.required': string
  'validation.invalidEmail': string
  'validation.invalidPhone': string
  
  // ... more keys
}
```

### Organization Data Model Updates

```typescript
// Bilingual fields in organization data
export const organizationData = {
  name: {
    english: "StriveGhana",
    arabic: "السعي"
  },
  motto: {
    en: "Strive in unity, growing in faith and brotherhood",
    ar: "نسعى في وحدة، ننمو في الإيمان والأخوة"
  },
  mission: {
    en: "To support and empower...",
    ar: "دعم وتمكين..."
  },
  // ... all other fields with bilingual support
}
```

## Error Handling

### Missing Translation Keys

**Strategy**: Fallback to English with console warning in development

```typescript
function t(key: string): string {
  const translation = translations[language][key]
  
  if (!translation) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Missing translation for key: ${key} in language: ${language}`)
    }
    // Fallback to English
    return translations['en'][key] || key
  }
  
  return translation
}
```

### localStorage Errors

**Strategy**: Graceful degradation to default language

```typescript
try {
  const savedLang = localStorage.getItem('language')
  if (savedLang === 'en' || savedLang === 'ar') {
    setLanguage(savedLang)
  }
} catch (error) {
  console.error('Failed to load language preference:', error)
  setLanguage('en') // Default to English
}
```

### Font Loading Failures

**Strategy**: System fonts as fallback

```css
font-family: 'Noto Sans Arabic', 'Amiri', 'Arial', sans-serif;
```

## Testing Strategy

### Unit Tests

**Language Context Tests**:
- ✓ Context provides correct initial language
- ✓ Language switching updates state
- ✓ localStorage is updated on language change
- ✓ Translation function returns correct strings
- ✓ Fallback to English for missing keys

**Language Switcher Tests**:
- ✓ Renders current language correctly
- ✓ Clicking switches language
- ✓ Visual indicator shows active language
- ✓ Keyboard navigation works (Tab, Enter)

### Integration Tests

**Page Translation Tests**:
- ✓ All pages render in English
- ✓ All pages render in Arabic
- ✓ Switching language updates all content
- ✓ RTL layout applies correctly for Arabic
- ✓ Forms work in both languages

**Persistence Tests**:
- ✓ Language preference persists across page reloads
- ✓ Language preference persists across sessions
- ✓ New users default to English

### Manual Testing Checklist

- [ ] All navigation items translated
- [ ] All page content translated
- [ ] All form labels and placeholders translated
- [ ] All buttons and CTAs translated
- [ ] All validation messages translated
- [ ] RTL layout displays correctly
- [ ] Arabic text renders with proper fonts
- [ ] Language switcher accessible via keyboard
- [ ] Language preference persists
- [ ] Mobile responsive in both languages
- [ ] No layout breaks in RTL mode
- [ ] Quranic verses display correctly

## RTL Layout Considerations

### CSS Approach

Use Tailwind's RTL-aware utilities:

```css
/* Automatic RTL support */
.ms-4  /* margin-start: 1rem (left in LTR, right in RTL) */
.me-4  /* margin-end: 1rem (right in LTR, left in RTL) */
.ps-4  /* padding-start */
.pe-4  /* padding-end */

/* Text alignment */
.text-start  /* left in LTR, right in RTL */
.text-end    /* right in LTR, left in RTL */
```

### Component Mirroring

Components that need RTL mirroring:
- Navigation menus (flex-row-reverse)
- Breadcrumbs
- Pagination
- Dropdown menus
- Icon positions in buttons
- Form field icons
- Card layouts with images

### Elements That Don't Mirror

- Phone numbers
- Email addresses
- URLs
- Numerical values
- Currency symbols
- Icons (unless directional like arrows)

## Performance Optimization

### Translation Loading

**Strategy**: Static imports for both languages (small size)

```typescript
// Both languages loaded at build time
import en from './locales/en'
import ar from './locales/ar'

// Total size: ~20-30KB (acceptable for client bundle)
```

**Alternative for larger apps**: Dynamic imports

```typescript
const loadTranslations = async (lang: Language) => {
  const translations = await import(`./locales/${lang}`)
  return translations.default
}
```

### Font Loading

**Strategy**: Preload Arabic fonts conditionally

```typescript
// In layout.tsx
{language === 'ar' && (
  <link
    rel="preload"
    href="/fonts/NotoSansArabic.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
)}
```

### Render Optimization

**Strategy**: Memoize translation function

```typescript
const t = useMemo(
  () => (key: string) => translations[language][key] || key,
  [language]
)
```

## Accessibility

### Keyboard Navigation

- Language switcher accessible via Tab key
- Enter/Space to activate language change
- Focus visible on switcher button

### Screen Readers

```typescript
<button
  aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
  aria-pressed={language === 'ar'}
>
  {/* Button content */}
</button>
```

### Language Announcement

```typescript
<div role="status" aria-live="polite" className="sr-only">
  {language === 'ar' ? 'Language changed to Arabic' : 'Language changed to English'}
</div>
```

## Implementation Phases

### Phase 1: Foundation (Core Infrastructure)
- Create Language Context
- Implement translation system structure
- Add Language Switcher component
- Update root layout for RTL support

### Phase 2: Translation Content
- Create English translation file (en.ts)
- Create Arabic translation file (ar.ts)
- Update organization data with bilingual fields
- Translate all static content

### Phase 3: Component Integration
- Update Header component
- Update Footer component
- Update all page components
- Update form components

### Phase 4: Testing & Refinement
- Test all pages in both languages
- Verify RTL layout correctness
- Test language persistence
- Accessibility audit
- Performance optimization

## Design Decisions and Rationales

### Why React Context over i18n libraries?

**Decision**: Use custom React Context instead of libraries like react-i18next

**Rationale**:
- Simpler implementation for two languages
- No external dependencies
- Full control over translation logic
- Smaller bundle size
- Easier to customize for specific needs

### Why localStorage over cookies?

**Decision**: Use localStorage for language preference

**Rationale**:
- No server-side rendering complexity
- Larger storage capacity
- Simpler API
- No HTTP overhead
- Client-side only (appropriate for this use case)

### Why static imports over dynamic?

**Decision**: Import both translation files statically

**Rationale**:
- Only two languages (small total size)
- Instant language switching (no loading delay)
- Simpler code
- Better for SEO (all content available)

### Why Tailwind RTL utilities over custom CSS?

**Decision**: Use Tailwind's built-in RTL support

**Rationale**:
- Automatic directional handling
- Consistent with existing styling approach
- Less custom CSS to maintain
- Well-tested and documented

## Security Considerations

### XSS Prevention

All translated content is static strings (no user input in translations):
```typescript
// Safe: Static translation strings
<h1>{t('home.hero.title')}</h1>

// Avoid: Dynamic content in translations
// Use sanitization if needed
```

### localStorage Security

- Language preference is non-sensitive data
- No PII stored in localStorage
- Safe to use without encryption

## Future Enhancements

### Potential Additions

1. **More Languages**: French, Hausa (common in Ghana)
2. **URL-based Language**: `/ar/about` for SEO
3. **Auto-detection**: Browser language detection
4. **Translation Management**: Admin panel for translations
5. **Partial Translations**: Show English fallback for untranslated content
6. **Language-specific Content**: Different content per language (not just translations)

### Scalability Considerations

The current design supports:
- Easy addition of new languages
- Migration to i18n library if needed
- Server-side rendering (with minor adjustments)
- Translation management systems
- Content Management System integration
