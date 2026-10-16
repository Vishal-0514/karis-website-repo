import site from '../site.config.mjs';
import { esc, hero, mail, policy } from './layout.mjs';

// The company's own policies: this website, the contact form and business
// communication. Each app has its own privacy policy and terms.

const { company, contact } = site;
const privacyMail = mail(contact.privacy);
const trail = (last) => [['/', 'Home'], ['/legal', 'Policies'], last];

export default [
  {
    path: '/legal/company-privacy',
    title: 'Privacy policy',
    description: `Privacy policy of ${company.legalName} for its website and business communication.`,
    body: `${hero({ title: 'Privacy policy', lead: `How ${esc(company.legalName)} handles personal data on this website and when you contact us.`, trail: trail('Privacy policy') })}
${policy({
  updated: site.policyDate,
  sections: [
    {
      title: 'Who we are',
      html: `<p>This policy is from <strong>${esc(company.legalName)}</strong> ("we", "us"), CIN ${esc(company.cin)}, registered office ${esc(company.address.lines.join(', '))}. It covers this website and how we handle personal data when you contact us or do business with us.</p>
<div class="callout">Each of our apps has its own privacy policy, because each collects different data: <a href="/apps/kya-khaun/privacy">Kya Khaun?</a> and <a href="/apps/karis/privacy">KARIS</a>.</div>`,
    },
    {
      title: 'What we collect',
      html: `<ul>
<li><strong>When you use the contact form:</strong> your name, email address, the topic you choose and your message.</li>
<li><strong>When you email us:</strong> your email address, your message and anything you choose to include.</li>
<li><strong>When you visit the website:</strong> our hosting provider keeps standard technical logs (such as IP address, browser type and the time of the visit) to keep the site secure and running.</li>
</ul>
<p>This website does not use cookies, analytics or advertising trackers, and it does not load fonts or scripts from other companies.</p>`,
    },
    {
      title: 'Why we use it',
      html: `<ul>
<li>To reply to your message and keep a record of our conversation.</li>
<li>To handle business, partnership, support and privacy requests.</li>
<li>To protect the website against misuse, for example by limiting how many messages can be sent.</li>
<li>To meet legal obligations.</li>
</ul>`,
    },
    {
      title: 'Who we share it with',
      html: `<p>We don't sell personal data. These service providers process it on our behalf, only to run our website and email:</p>
<ul>
<li><strong>Vercel</strong>: hosts this website.</li>
<li><strong>Render</strong> and <strong>MongoDB Atlas</strong>: receive and store contact form messages.</li>
<li><strong>Google</strong>: our email service.</li>
</ul>
<p>Some providers process data outside India. We may disclose information where the law requires it.</p>`,
    },
    {
      title: 'How long we keep it',
      html: `<p>We keep contact messages and emails for as long as we need them to deal with your request, and for up to two years after our last exchange, unless the law requires us to keep them longer. Hosting logs are kept by the provider for a short period.</p>`,
    },
    {
      title: 'Your rights',
      html: `<p>You can ask us to access, correct or delete the personal data we hold about you, or to stop using it. Write to ${privacyMail}. We may need to confirm it is you before acting, and we will not ask for more information than we need.</p>`,
    },
    {
      title: 'Children',
      html: `<p>This website is meant for adults. We do not knowingly collect personal data from children through it. If you believe a child has sent us personal data, contact us and we will delete it.</p>`,
    },
    {
      title: 'Security',
      html: `<p>The website is served over an encrypted connection (HTTPS), and access to messages is limited to people who need it.</p>`,
    },
    {
      title: 'Changes and contact',
      html: `<p>If we change this policy, we'll update the effective date above. For questions, requests or complaints (including as our grievance contact under India's data protection law), write to ${privacyMail}.</p>`,
    },
  ],
})}`,
  },

  {
    path: '/legal/website-terms',
    title: 'Website terms',
    description: `Terms for using the website of ${company.legalName}.`,
    body: `${hero({ title: 'Website terms', lead: 'The rules for using this website.', trail: trail('Website terms') })}
${policy({
  updated: site.policyDate,
  sections: [
    { title: 'About these terms', html: `<p>This website is operated by ${esc(company.legalName)} (CIN ${esc(company.cin)}). By using it, you agree to these terms. Each of our apps has its own terms of use: <a href="/apps/kya-khaun/terms">Kya Khaun?</a> and <a href="/apps/karis/terms">KARIS</a>.</p>` },
    { title: 'Using the website', html: `<p>You may use this website to learn about the company and our products, read our policies and contact us. Please don't try to disrupt it, gain unauthorised access, send spam through the contact form, or copy it at scale.</p>` },
    { title: 'Content and trademarks', html: `<p>The text, design and logos on this website belong to ${esc(company.legalName)} unless stated otherwise. Names of other companies, such as Zomato, Swiggy, Google and Anthropic, belong to their owners and are used only to describe how our products work. Their use does not mean they endorse us.</p>` },
    { title: 'Accuracy', html: `<p>We work to keep the information here accurate and up to date. Products described as "in development" may change before launch, and features may differ between versions.</p>` },
    { title: 'Links to other websites', html: `<p>This website may link to other websites. We are not responsible for their content or their privacy practices.</p>` },
    { title: 'Liability', html: `<p>This website is provided "as is". As far as the law allows, we are not liable for losses that come from using it or relying on it. Nothing here limits rights you have under law.</p>` },
    { title: 'Law and contact', html: `<p>These terms are governed by the laws of India, and the courts of Mumbai have jurisdiction. Questions? Write to ${mail(contact.business)}.</p>` },
  ],
})}`,
  },
];
