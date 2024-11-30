/**
 * Centralized object to store all route paths.
 * This ensures consistency and makes it easier to update paths in one place.
 * 
 * To add a new path:
 * 1. Add a new key-value pair to the `paths` object.
 * 2. Use the new key in the `routes` and `sidebarData` files.
 */
export const paths = {
  home: '/',
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
    demoButton: '/components/demo-button',
    demoCard: '/components/demo-card',
    demoChart: '/components/demo-chart',
    demoDialog: '/components/demo-dialog',
    demoDropdown: '/components/demo-dropdown',
    demoForm: '/components/demo-form',
    demoTabs: '/components/demo-tabs',
    demoToggle: '/components/demo-toggle',
    demoTooltip: '/components/demo-tooltip',
  },
  colorPalette: '/color-palette',
  statusBoard: '/status-board',
  notFound: '*',
};