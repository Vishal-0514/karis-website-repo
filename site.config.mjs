// Everything that appears on many pages lives here, so a change (new domain,
// new email, phone number) is made once. Run `node build.mjs` afterwards.

export default {
  // The company-owned domain. Change it if you buy a different one.
  siteUrl: 'https://karisglobalretail.com',

  company: {
    legalName: 'KARIS GLOBAL RETAIL PRIVATE LIMITED',
    displayName: 'Karis Global Retail',
    category: 'Indian private limited company; company limited by shares',
    cin: 'U47711MH2025PTC439460',
    incorporated: '31 January 2025',
    incorporatedIso: '2025-01-31',
    address: {
      lines: ['1501, 15th Floor, RNA N.G. Eclat-B', 'Millat Nagar Road, Andheri West', 'Mumbai 400053, Maharashtra, India'],
      street: '1501, 15th Floor, RNA N.G. Eclat-B, Millat Nagar Road, Andheri West',
      city: 'Mumbai',
      region: 'Maharashtra',
      postalCode: '400053',
      country: 'IN',
    },
  },

  // Public contact address, used everywhere on the site.
  contact: {
    business: 'developer@karisglobalretail.com',
    karisSupport: 'developer@karisglobalretail.com',
    kyaKhaunSupport: 'developer@karisglobalretail.com',
    privacy: 'developer@karisglobalretail.com',
    // Shown only when filled in, e.g. '+91 96696 60031'.
    phone: '',
  },

  // Where the contact form sends messages (the Kya Khaun server stores them).
  // Local testing: CONTACT_ENDPOINT=http://localhost:4100/api/contact node build.mjs
  contactEndpoint: process.env.CONTACT_ENDPOINT || 'https://kya-khaun-server.onrender.com/api/contact',

  // Effective date shown on policies. Update it whenever a policy changes.
  policyDate: '15 October 2026',

  apps: {
    karis: { name: 'KARIS', status: 'In development' },
    kyaKhaun: { name: 'Kya Khaun?', status: 'In development' },
  },
};
