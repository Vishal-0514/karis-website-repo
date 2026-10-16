# Karis Global Retail company website

The official website of **KARIS GLOBAL RETAIL PRIVATE LIMITED** and its two apps, KARIS and Kya Khaun?, built to the developer handover brief (13 October 2026). Plain HTML and CSS, with no framework. The design follows the Stripe DESIGN.md (awesome-design-md collection): a soft gradient mesh across the top of every page with a slanted edge, thin Inter headlines, deep navy text, one indigo accent, hairline cards, a cream principles band and a navy closing band. Fonts are self-hosted, so the site loads nothing from other companies. It supports dark mode and was checked against the Web Interface Guidelines (UI/UX) and the design-taste skill. No app screenshots: products are described in words, with their policies.

## Pages

The website is about the company. The apps appear on the Products page, as apps built by Karis Global Retail.

| URL | Page |
| --- | --- |
| `/` | Home: the company |
| `/about` | About the company |
| `/apps` | Products: apps built by Karis Global Retail |
| `/contact` | Contact details + working contact form |
| `/legal` | Policies: company policies and each app's policies |
| `/legal/company-privacy`, `/legal/website-terms` | The company's own privacy policy and website terms |
| `/legal/company-information` | Legal name, CIN, incorporation date, registered office |
| `/legal/privacy`, `/legal/terms`, `/legal/delete-account` | Short lists linking to each policy |
| `/apps/kya-khaun` (+ `/support`, `/privacy`, `/terms`, `/delete-account`) | Kya Khaun? |
| `/apps/karis` (+ `/support`, `/privacy`, `/terms`, `/delete-account`) | KARIS (marked "In development") |

## Change something

- **Domain, emails, phone, address, policy date:** edit `site.config.mjs`.
- **Page text:** `src/pages-company.mjs` (company pages), `src/pages-legal.mjs` (company privacy policy and website terms), `src/pages-kya-khaun.mjs`, `src/pages-karis.mjs`.
- **Design:** `public/styles.css`.

Then build:

```bash
node build.mjs
```

This writes the site to `dist/` and stops with an error if any internal link is broken.

To preview it locally, run `npx serve dist` and open http://localhost:3000.

## Contact form

Messages go to the Kya Khaun server (`POST /api/contact`) and are saved in the `contactmessages` collection in MongoDB, with at most 5 per visitor per hour. A hidden field drops spam bots. Messages are not emailed yet: check the collection, or add email delivery later.

## Put it live (Vercel, free)

1. Create a Vercel account at https://vercel.com, using **Continue with GitHub**.
2. **Add New → Project →** import the `karis-global-retail-website` repository.
3. Leave **Root Directory** as it is (the repo root). Vercel reads `vercel.json`, which sets the build command (`node build.mjs`), the output folder (`dist`) and clean URLs.
4. **Deploy.** You get a temporary `*.vercel.app` link to check.
5. **Settings → Domains → Add** `karisglobalretail.com` (and `www.karisglobalretail.com`). Vercel shows the DNS records to add at your domain registrar (GoDaddy/Hostinger → DNS). Don't delete the email (MX/TXT) records there.
6. Once the domain works, use it in Apple's and Google's enrollment forms.

Every push to GitHub then updates the website automatically.

## Before submitting to Apple / Google

- [ ] Buy the domain and check `siteUrl` in `site.config.mjs` matches it.
- [x] Company email on the domain: developer@karisglobalretail.com (in `site.config.mjs`). Make sure the inbox works before submitting.
- [ ] Decide whether to show the phone number (`contact.phone`).
- [ ] Confirm the registered office formatting against company records.
- [ ] Replace the KARIS policies with the real ones before KARIS launches.
- [ ] Point the Kya Khaun app's privacy, terms and delete-account links at this website.
