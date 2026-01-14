/**
 * Site configuration
 *
 * Central place for URLs and settings that may change across environments
 */

export const siteConfig = {
  // Main application URL - where users go to sign up/sign in
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://seeme.contactsolution.io",

  // Marketing site metadata
  name: "ContactSolution",
  description: "Transform networking with digital business cards, Apple & Google Wallet integration, and real-time analytics.",

  // Contact emails
  emails: {
    support: "support@contactsolution.io",
    security: "security@contactsolution.io",
    privacy: "privacy@contactsolution.io",
  },
} as const;
