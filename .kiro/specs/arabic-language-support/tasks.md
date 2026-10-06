# Implementation Plan: Arabic Language Support

- [ ] 1. Set up language infrastructure and context
  - Create TypeScript types for language and translations
  - Implement LanguageContext with React Context API
  - Add localStorage integration for language persistence
  - Create custom hook `useLanguage` for consuming context
  - _Requirements: 1.2, 3.1, 3.2, 3.3, 3.4_

- [ ] 2. Create translation files and data structure
  - Create `src/locales/types.ts` with translation interfaces
  - Create `src/locales/en.ts` with complete English translations
  - Create `src/locales/ar.ts` with complete Arabic translations
  - Create `src/locales/index.ts` to export translation loader
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 3. Build Language Switcher component
  - Create `LanguageSwitcher.tsx` component with toggle functionality
  - Implement visual indicators for active language
  - Add keyboard accessibility (Tab, Enter, Space)
  - Add ARIA labels for screen readers
  - Style for desktop and mobile variants
  - _Requirements: 1.1, 1.3, 1.4, 10.1, 10.2, 10.5_

- [ ] 4. Update root layout for RTL support
  - Modify `src/app/layout.tsx` to wrap app with LanguageProvider
  - Add dynamic `lang` and `dir` attributes to HTML element
  - Load Arabic fonts (Noto Sans Arabic, Amiri) conditionally
  - Update metadata for bilingual support
  - _Requirements: 1.5, 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 5. Update organization data model for bilingual content
  - Modify `src/data/organization.ts` to support bilingual fields
  - Convert all text fields to `{ en: string, ar: string }` structure
  - Add Arabic translations for all organization data
  - Update type definitions for bilingual data
  - _Requirements: 2.2, 2.4, 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 6. Integrate language support in Header component
  - Update `src/components/layout/Header.tsx` to use translation context
  - Add LanguageSwitcher to desktop navigation
  - Add LanguageSwitcher to mobile menu
  - Translate all navigation menu items
  - Apply RTL layout styles for Arabic
  - _Requirements: 1.1, 1.4, 8.1, 8.3, 8.4, 8.5_

- [ ] 7. Integrate language support in Footer component
  - Update `src/components/layout/Footer.tsx` to use translations
  - Translate all footer links and text
  - Update contact information display for both languages
  - Apply RTL layout styles for Arabic
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 8.2_

- [ ] 8. Update Home page with translations
  - Modify `src/app/page.tsx` to use translation context
  - Translate hero section (title, subtitle, CTA)
  - Translate stats counter labels
  - Translate program cards and descriptions
  - Translate Quranic verses (keep Arabic, translate English)
  - Apply RTL layout for Arabic
  - _Requirements: 2.1, 2.2, 2.4, 2.5, 10.3_

- [ ] 9. Update About page with translations
  - Modify `src/app/about/page.tsx` to use translations
  - Translate mission, vision, and values content
  - Translate organizational structure information
  - Translate team and leadership sections
  - Apply RTL layout for Arabic
  - _Requirements: 2.1, 2.2, 2.4_

- [ ] 10. Update Programs page with translations
  - Modify `src/app/programs/page.tsx` to use translations
  - Translate all program titles and descriptions
  - Translate program categories and activities
  - Update ProgramCard component for bilingual support
  - Apply RTL layout for Arabic
  - _Requirements: 2.4, 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 11. Update Donate page and form with translations
  - Modify `src/app/donate/page.tsx` to use translations
  - Update `src/components/forms/DonationForm.tsx` for bilingual support
  - Translate all form labels and placeholders
  - Translate donation amount options and frequency labels
  - Translate payment method labels
  - Translate validation messages
  - Translate success/error messages
  - Apply RTL layout for form fields in Arabic
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 12. Update Contact page and form with translations
  - Modify `src/app/contact/page.tsx` to use translations
  - Update `src/components/forms/ContactForm.tsx` for bilingual support
  - Translate all form labels and placeholders
  - Translate contact information headings
  - Translate validation messages
  - Translate success/error messages
  - Apply RTL layout for form fields in Arabic
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 13. Update Get Involved page with translations
  - Modify `src/app/get-involved/page.tsx` to use translations
  - Translate volunteer opportunities and descriptions
  - Translate call-to-action sections
  - Translate involvement categories
  - Apply RTL layout for Arabic
  - _Requirements: 2.1, 2.2, 2.4_

- [ ] 14. Update shared UI components for translations
  - Update `src/components/ui/Hero.tsx` for bilingual support
  - Update `src/components/ui/StatsCounter.tsx` for bilingual support
  - Update `src/components/ui/ProgramCard.tsx` for bilingual support
  - Update `src/components/ui/QuranicVerse.tsx` for bilingual support
  - Apply RTL-aware styling to all components
  - _Requirements: 2.1, 2.2, 2.4, 2.5, 4.5_

- [ ] 15. Add RTL-aware Tailwind CSS utilities
  - Update `tailwind.config.js` to enable RTL support
  - Replace directional classes (ml, mr, pl, pr) with logical properties (ms, me, ps, pe)
  - Update flex and grid layouts for RTL compatibility
  - Test all components in RTL mode
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 16. Implement language change animations and feedback
  - Add smooth transition when switching languages
  - Add visual feedback (loading state if needed)
  - Add aria-live region for screen reader announcements
  - Ensure language switch completes within 500ms
  - _Requirements: 1.2, 10.1, 10.2, 10.3_

- [ ] 17. Add language persistence and initialization
  - Implement localStorage read on app initialization
  - Set default language to English if no preference exists
  - Update HTML attributes on language change
  - Test persistence across page reloads and sessions
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ] 18. Verify all translations and fix missing keys
  - Review all pages in English mode
  - Review all pages in Arabic mode
  - Check for missing translation keys
  - Verify fallback to English works for missing keys
  - Ensure all Arabic text displays correctly
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 19. Test RTL layout across all pages and components
  - Verify navigation menus mirror correctly
  - Verify form layouts work in RTL
  - Verify card layouts and grids work in RTL
  - Verify icons and images position correctly
  - Fix any layout issues in RTL mode
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 20. Test accessibility and keyboard navigation
  - Test language switcher with keyboard only
  - Test screen reader announcements
  - Verify ARIA labels are correct
  - Test focus management during language switch
  - Verify color contrast in both languages
  - _Requirements: 10.1, 10.2, 10.5_

- [ ] 21. Test mobile responsiveness in both languages
  - Test all pages on mobile in English
  - Test all pages on mobile in Arabic
  - Verify mobile menu works in both languages
  - Verify forms work on mobile in both languages
  - Fix any mobile-specific issues
  - _Requirements: 10.5_

- [ ] 22. Performance testing and optimization
  - Measure language switch performance (target: <500ms)
  - Optimize translation file size if needed
  - Test page load times in both languages
  - Verify font loading doesn't block rendering
  - Optimize any performance bottlenecks
  - _Requirements: 10.3, 10.4_

- [ ] 23. Create documentation for translation system
  - Document how to add new translations
  - Document translation key naming conventions
  - Document how to add new languages in the future
  - Create guide for maintaining translations
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_
