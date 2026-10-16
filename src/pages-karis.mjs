import site from '../site.config.mjs';
import { esc, hero, mail, policy, policyLinks } from './layout.mjs';

// KARIS is in development: these pages say so plainly instead of describing
// features, data use or seller programmes that don't exist yet. Replace the
// policy text with the real one (from the app's actual data flows) before launch.

const { company, contact } = site;
const APP = 'KARIS';
const base = '/apps/karis';
const trail = (last) => [['/', 'Home'], ['/apps', 'Products'], [base, APP], last];
const support = mail(contact.karisSupport);
const privacyMail = mail(contact.privacy);

const appLinks = policyLinks(base, 'KARIS');

const inDevelopment = `<div class="callout">KARIS is <strong>in development</strong> and is not yet available on the App Store or Google Play. This page will be updated with the full version before the app launches.</div>`;

export default [
  {
    path: base,
    title: "KARIS women's fashion marketplace",
    description: "KARIS is a women-focused fashion marketplace in development, a product of Karis Global Retail Private Limited.",
    body: `${hero({
      title: 'KARIS',
      lead: "A women-focused fashion marketplace. Apparel, jewellery, footwear and bags, in one place.",
      trail: [['/', 'Home'], ['/apps', 'Products'], 'KARIS'],
      extra: `<div class="ctas rise d2"><span class="tag">In development</span><span class="publisher" style="margin:0">A product of <a href="/legal/company-information">${esc(company.legalName)}</a></span></div>`,
    })}

<section class="section" style="padding-top:24px">
  <div class="wrap">
    <h2 class="section-title">What we're building.</h2>
    <div class="features">
      <div><h3>Made for women</h3><p>A shopping experience designed around women's fashion, from everyday wear to occasion outfits.</p></div>
      <div><h3>Four categories</h3><p>Apparel, jewellery, footwear and bags.</p></div>
      <div><h3>KARIS and partner sellers</h3><p>Products from KARIS and, as the platform grows, approved independent sellers. Seller onboarding is not open yet.</p></div>
      <div><h3>Clear policies first</h3><p>Returns, refunds, shipping and seller terms will be published here before the app launches.</p></div>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="wrap">
    <div class="note">
      <h2>Status</h2>
      <p>KARIS is in development. It is not yet available to download, and no orders or payments are being taken. Questions or partnership interest? Write to ${mail(contact.business)}.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2 class="section-title">Policies and support.</h2>
    <p class="section-lead">How KARIS will handle your data, the rules for using it, and how accounts can be deleted.</p>
    <div style="margin-top:40px">${appLinks}</div>
    <p class="publisher">KARIS is a product of ${esc(company.legalName)}, CIN <span class="num">${esc(company.cin)}</span>.</p>
  </div>
</section>`,
  },

  {
    path: `${base}/support`,
    title: 'KARIS support',
    description: 'Get help with the KARIS app.',
    body: `${hero({ title: 'KARIS support', trail: trail('Support') })}
<div class="wrap prose">
  ${inDevelopment}
  <h2>Contact support</h2>
  <p>Email ${support}, or use the <a href="/contact">contact form</a> and choose "KARIS support".</p>
  <h2>Orders, returns and refunds</h2>
  <p>KARIS is not taking orders yet. When it does, this page will explain how to track an order, request a return or refund, and who to contact for each.</p>
  <h2>Policies</h2>
  ${appLinks}
</div>`,
  },

  {
    path: `${base}/privacy`,
    title: 'KARIS privacy policy',
    description: 'Privacy policy for the KARIS app by Karis Global Retail Private Limited.',
    body: `${hero({ title: 'KARIS privacy policy', trail: trail('Privacy policy') })}
${policy({
  updated: site.policyDate,
  sections: [
    { title: 'Who we are', html: `<p>This policy covers the <strong>KARIS</strong> mobile app, developed and operated by <strong>${esc(company.legalName)}</strong> ("we", "us"), CIN ${esc(company.cin)}, registered office ${esc(company.address.lines.join(', '))}. Privacy contact: ${privacyMail}.</p>${inDevelopment}` },
    { title: 'Current status', html: `<p>KARIS is in development and not yet available to the public, so it does not currently collect personal data from users. If you contact us by email or through our contact form, we use what you send only to reply to you.</p>` },
    { title: 'Before launch', html: `<p>Before KARIS is released, this page will be replaced with a full privacy policy describing exactly what the app collects (for example account, delivery address and order details), why, who it is shared with (such as payment, delivery and seller partners), how long it is kept, and how to exercise your rights, including deleting your account. The effective date above will change when it is published.</p>` },
    { title: 'Contact', html: `<p>For any privacy question, write to ${privacyMail}.</p>` },
  ],
})}`,
  },

  {
    path: `${base}/terms`,
    title: 'KARIS terms of use',
    description: 'Terms of use for the KARIS app by Karis Global Retail Private Limited.',
    body: `${hero({ title: 'KARIS terms of use', trail: trail('Terms of use') })}
${policy({
  updated: site.policyDate,
  sections: [
    { title: 'Current status', html: `<p>KARIS, a product of ${esc(company.legalName)}, is in development and is not yet available to download or to place orders.</p>${inDevelopment}` },
    { title: 'Before launch', html: `<p>Full terms of use will be published here before KARIS launches, covering accounts, orders and payments, pricing, cancellations, returns, refunds and shipping, the relationship between customers, KARIS and independent sellers, acceptable use, and how disputes are handled under the laws of India.</p>` },
    { title: 'Contact', html: `<p>Questions? Write to ${support}.</p>` },
  ],
})}`,
  },

  {
    path: `${base}/delete-account`,
    title: 'Delete your KARIS account',
    description: 'How to delete a KARIS account.',
    body: `${hero({ title: 'Delete your KARIS account', lead: `KARIS is operated by ${esc(company.legalName)}.`, trail: trail('Delete account') })}
<div class="wrap prose">
  ${inDevelopment}
  <h2>Current status</h2>
  <p>KARIS accounts are not available yet, because the app has not launched.</p>
  <h2>When KARIS launches</h2>
  <p>You will be able to delete your KARIS account from inside the app (Profile → Account → Delete account) and by request on this page. This page will list exactly what is deleted, anything we must keep by law (for example invoices for completed orders), and how long deletion takes.</p>
  <p>Questions now? Write to ${privacyMail}.</p>
</div>`,
  },
];
