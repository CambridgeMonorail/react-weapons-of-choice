/**
 * Centralized object to store all route paths.
 * This ensures consistency and makes it easier to update paths in one place.
 * 
 * To add a new path:
 * 1. Add a new key-value pair to the `paths` object.
 * 2. Use the new key in the `routes` and `sidebarData` files.
 */
export const paths = {
  landing: '/',
  about: '/about',
  blog: '/blog',
  blogPost: '/blog/:postId',
  contact: '/contact',
  dashboard: '/dashboard',
  faq: '/faq',
  features: '/features',
  home: '/home',
  pricing: '/pricing',
  statusBoard: '/status-board',
  termsAndConditions: '/terms-and-conditions',
  components: {
    colorPalette: '/color-palette',
    libraryPage: '/library',
  },
  notFound: '*',
};