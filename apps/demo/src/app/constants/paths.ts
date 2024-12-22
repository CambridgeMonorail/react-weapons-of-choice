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
  home: '/home',
  about: '/about',
  features: '/features',
  pricing: '/pricing',
  faq: '/faq',
  contact: '/contact',
  blog: '/blog',
  blogPost: '/blog/:postId',
  termsAndConditions: '/terms-and-conditions',
  dashboard: '/dashboard',
  components: {
    colorPalette: '/color-palette',
    libraryPage: '/library',
  },

  statusBoard: '/status-board',
  notFound: '*',
};