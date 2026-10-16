import site from '../site.config.mjs';
import { addressHtml, esc, hero, mail, mesh, policyLinks, tel } from './layout.mjs';

const { company, contact } = site;

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.legalName,
  alternateName: company.displayName,
  url: site.siteUrl + '/',
  logo: site.siteUrl + '/favicon.svg',
  foundingDate: company.incorporatedIso,
  email: contact.business,
  ...(contact.phone ? { telephone: contact.phone } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  identifier: { '@type': 'PropertyValue', propertyID: 'CIN', value: company.cin },
};

const facts = `<dl class="facts">
  <div><dt>Legal name</dt><dd>${esc(company.legalName)}</dd></div>
  <div><dt>CIN</dt><dd class="num">${esc(company.cin)}</dd></div>
  <div><dt>Incorporated</dt><dd class="num">${esc(company.incorporated)}</dd></div>
  <div><dt>Registered office</dt><dd>Andheri West, Mumbai, Maharashtra</dd></div>
</dl>`;

const closing = (title, text) => `<section class="section">
  <div class="wrap">
    <div class="navy-band">
      <div><h2>${title}</h2><p>${text}</p></div>
      <a class="btn on-navy" href="/contact">Contact us <span class="chev" aria-hidden="true"></span></a>
    </div>
  </div>
</section>`;

export default [
  {
    path: '/',
    title: 'Home',
    description: `${company.legalName} is a Mumbai-based company building consumer technology for everyday life in India.`,
    schema: organization,
    body: `<section class="hero hero-home">
  ${mesh()}
  <div class="wrap hero-content">
    <h1 class="rise">Technology for the everyday choices of India.</h1>
    <p class="lead rise d1">Karis Global Retail is a Mumbai-based company building consumer products in food and fashion.</p>
    <div class="ctas rise d2">
      <a class="btn" href="/apps">Our products <span class="chev" aria-hidden="true"></span></a>
      <a class="text-link" href="/about">About the company <span class="chev" aria-hidden="true"></span></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap statement">
    <p class="big">We are a young private limited company, incorporated in 2025, building simple and honest consumer products for people across India.</p>
    ${facts}
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="cream-band">
      <h2 class="section-title">How we work.</h2>
      <div class="principles">
        <div><span class="n">01</span><h3>Clear about who we are</h3><p>Every product we publish names ${esc(company.legalName)} as its developer and links back to this website.</p></div>
        <div><span class="n">02</span><h3>Only the data we need</h3><p>Each product has its own privacy policy that says exactly what it collects and why. We don't sell personal data.</p></div>
        <div><span class="n">03</span><h3>You stay in control</h3><p>Where a product has accounts, people can delete theirs from inside the app and from this website.</p></div>
        <div><span class="n">04</span><h3>Honest about partners</h3><p>We say plainly when another company is involved, and never claim partnerships we don't have.</p></div>
      </div>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="wrap">
    <h2 class="section-title">Policies and transparency.</h2>
    <p class="section-lead">The company's own policies, and separate policies for every product we build.</p>
    <div class="link-grid" style="margin-top:40px">
      <a class="link-card" href="/legal/company-privacy"><strong>Privacy policy</strong><span>How the company handles personal data.</span><span class="chev" aria-hidden="true"></span></a>
      <a class="link-card" href="/legal/website-terms"><strong>Website terms</strong><span>The rules for using this website.</span><span class="chev" aria-hidden="true"></span></a>
      <a class="link-card" href="/legal"><strong>Product policies</strong><span>Privacy, terms and account deletion for each product.</span><span class="chev" aria-hidden="true"></span></a>
      <a class="link-card" href="/legal/company-information"><strong>Company information</strong><span>Legal name, CIN and registered office.</span><span class="chev" aria-hidden="true"></span></a>
    </div>
  </div>
</section>

${closing('Talk to Karis Global Retail.', 'Partnerships, press, product support or a privacy request. We read every message.')}`,
  },

  {
    path: '/about',
    title: 'About the company',
    description: `About ${company.legalName}: an Indian private limited company building consumer technology.`,
    body: `${hero({ title: 'About Karis Global Retail', lead: 'A Mumbai-based company building consumer products that make everyday choices easier.', trail: [['/', 'Home'], 'Company'] })}
<section class="section" style="padding-top:24px">
  <div class="wrap statement">
    <div>
      <p class="big">Karis Global Retail Private Limited was incorporated in India on ${esc(company.incorporated)}.</p>
      <p style="margin-top:24px">We are developing digital products that connect people with relevant products and discoveries. Our first two products are a food discovery app that helps people decide what to eat, and a women's fashion marketplace.</p>
      <p>Our registered office is in Andheri West, Mumbai, and we build for people across India.</p>
      <p><a class="text-link" href="/apps">See our products <span class="chev" aria-hidden="true"></span></a></p>
    </div>
    ${facts}
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="cream-band">
      <h2 class="section-title">What we stand for.</h2>
      <div class="principles">
        <div><span class="n">01</span><h3>Clear about who we are</h3><p>Every product we publish names ${esc(company.legalName)} as its developer and links back to this website.</p></div>
        <div><span class="n">02</span><h3>Only the data we need</h3><p>Each product has its own privacy policy that says exactly what it collects and why.</p></div>
        <div><span class="n">03</span><h3>You stay in control</h3><p>Where a product has accounts, you can delete yours from inside the app and from this website.</p></div>
        <div><span class="n">04</span><h3>Honest about partners</h3><p>We say plainly when another company is involved, such as an ordering app or an AI provider.</p></div>
      </div>
    </div>
  </div>
</section>
${closing('Get in touch.', 'Business inquiries, partnerships or questions about the company.')}`,
  },

  {
    path: '/apps',
    title: 'Products',
    description: `Products built by ${company.legalName}: Kya Khaun? (food discovery) and KARIS (women's fashion marketplace).`,
    body: `${hero({ title: 'Products by Karis Global Retail', lead: 'Each product has its own support page, privacy policy, terms and account deletion page.', trail: [['/', 'Home'], 'Products'] })}
<section class="section" style="padding-top:24px">
  <div class="wrap products">
    <article class="product">
      <div><span class="tag">In development</span></div>
      <h2>Kya Khaun?</h2>
      <p class="kind">Food discovery app</p>
      <ul>
        <li>Tell it a craving, a budget or a mood, in English, Hindi or Hinglish.</li>
        <li>Get dishes and nearby places to order from, or recipes from what's in your kitchen.</li>
        <li>Plan a whole day of meals within a budget.</li>
        <li>Ordering happens on Zomato or Swiggy. Kya Khaun? doesn't take orders or payments.</li>
      </ul>
      <div class="ctas"><a class="btn" href="/apps/kya-khaun">View product <span class="chev" aria-hidden="true"></span></a></div>
      <nav class="product-links" aria-label="Kya Khaun? policies"><a href="/apps/kya-khaun/privacy">Privacy policy</a><a href="/apps/kya-khaun/terms">Terms of use</a><a href="/apps/kya-khaun/delete-account">Delete account</a><a href="/apps/kya-khaun/support">Support</a></nav>
    </article>
    <article class="product featured">
      <div><span class="tag">In development</span></div>
      <h2>KARIS</h2>
      <p class="kind">Women's fashion marketplace</p>
      <ul>
        <li>A shopping experience designed around women's fashion.</li>
        <li>Apparel, jewellery, footwear and bags, in one place.</li>
        <li>Products from KARIS and, in time, approved independent sellers.</li>
        <li>Returns, refunds and shipping policies will be published before launch.</li>
      </ul>
      <div class="ctas"><a class="btn on-navy" href="/apps/karis">View product <span class="chev" aria-hidden="true"></span></a></div>
      <nav class="product-links" aria-label="KARIS policies"><a href="/apps/karis/privacy">Privacy policy</a><a href="/apps/karis/terms">Terms of use</a><a href="/apps/karis/delete-account">Delete account</a><a href="/apps/karis/support">Support</a></nav>
    </article>
  </div>
</section>`,
  },

  {
    path: '/contact',
    title: 'Contact us',
    description: `Contact ${company.legalName}: business inquiries, product support and privacy requests.`,
    body: `${hero({ title: 'Contact us', lead: 'Email us, or send a message using the form.', trail: [['/', 'Home'], 'Contact'] })}
<section class="section" style="padding-top:24px">
  <div class="wrap contact">
    <div class="contact-info">
      <h2>Email</h2>
      <p>For business inquiries, product support, and privacy or data requests.</p>
      <a class="email" href="mailto:${esc(contact.business)}">${esc(contact.business)}</a>
      <h2>Registered office</h2>
      <p>${esc(company.legalName)}<br>${addressHtml()}</p>
      ${contact.phone ? `<p>${tel(contact.phone)}</p>` : ''}
    </div>

    <form class="form" id="contact-form" action="${esc(site.contactEndpoint)}" method="post" novalidate>
      <h2>Send a message</h2>
      <div class="field">
        <label for="cf-name">Your name</label>
        <input id="cf-name" name="name" autocomplete="name" required maxlength="100">
      </div>
      <div class="field">
        <label for="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" inputmode="email" autocomplete="email" spellcheck="false" required maxlength="200">
      </div>
      <div class="field">
        <label for="cf-topic">Topic</label>
        <select id="cf-topic" name="topic" required>
          <option value="business">Business inquiry</option>
          <option value="kya-khaun">Kya Khaun? support</option>
          <option value="karis">KARIS support</option>
          <option value="privacy">Privacy or data request</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div class="field">
        <label for="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows="6" required minlength="10" maxlength="3000"></textarea>
      </div>
      <div class="field hp" aria-hidden="true">
        <label for="cf-website">Leave this empty</label>
        <input id="cf-website" name="website" tabindex="-1" autocomplete="off">
      </div>
      <p class="form-note">We use what you send only to reply to you. See our <a href="/legal/company-privacy">privacy policy</a>.</p>
      <button class="btn" type="submit">Send message</button>
      <p class="form-status" id="cf-status" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>
<script src="/contact.js" defer></script>`,
  },

  {
    path: '/legal/company-information',
    title: 'Company information',
    description: `Legal and registration details of ${company.legalName}.`,
    schema: organization,
    body: `${hero({ title: 'Company information', trail: [['/', 'Home'], ['/legal', 'Policies'], 'Company information'] })}
<section class="section" style="padding-top:24px">
  <div class="wrap">
    <dl class="details">
      <div><dt>Legal name</dt><dd>${esc(company.legalName)}</dd></div>
      <div><dt>Company category</dt><dd>${esc(company.category)}</dd></div>
      <div><dt>Corporate Identity Number (CIN)</dt><dd class="num">${esc(company.cin)}</dd></div>
      <div><dt>Date of incorporation</dt><dd class="num">${esc(company.incorporated)}</dd></div>
      <div><dt>Registered office</dt><dd>${addressHtml()}</dd></div>
      <div><dt>Business contact</dt><dd>${mail(contact.business)}${contact.phone ? `<br>${tel(contact.phone)}` : ''}</dd></div>
      <div><dt>Products</dt><dd><a href="/apps/kya-khaun">Kya Khaun?</a><br><a href="/apps/karis">KARIS</a></dd></div>
    </dl>
  </div>
</section>`,
  },

  {
    path: '/legal',
    title: 'Policies',
    description: `Company and product policies of ${company.legalName}.`,
    body: `${hero({ title: 'Policies', lead: 'The company’s own policies, and separate policies for each product we build.', trail: [['/', 'Home'], 'Policies'] })}
<section class="section" style="padding-top:24px">
  <div class="wrap">
    <div class="hub-group">
      <h2>Company</h2>
      <p>How Karis Global Retail handles data on this website and in business communication.</p>
      <div class="hub-grid">
        <a class="link-card" href="/legal/company-privacy"><strong>Privacy policy</strong><span>Company privacy policy.</span><span class="chev" aria-hidden="true"></span></a>
        <a class="link-card" href="/legal/website-terms"><strong>Website terms</strong><span>The rules for using this website.</span><span class="chev" aria-hidden="true"></span></a>
        <a class="link-card" href="/legal/company-information"><strong>Company information</strong><span>Legal name, CIN and registered office.</span><span class="chev" aria-hidden="true"></span></a>
      </div>
    </div>
    <div class="hub-group">
      <h2>Products</h2>
      <p>Each product collects different data, so each has its own policies.</p>
      <div class="product-policies">
        <div><h3>Kya Khaun?</h3>${policyLinks('/apps/kya-khaun', 'Kya Khaun?')}</div>
        <div><h3>KARIS</h3>${policyLinks('/apps/karis', 'KARIS')}</div>
      </div>
    </div>
  </div>
</section>`,
  },

  {
    path: '/legal/privacy',
    title: 'Privacy policies',
    description: `Privacy policies of ${company.legalName} and its products.`,
    body: `${hero({ title: 'Privacy policies', lead: 'The company has its own privacy policy, and each product has one too.', trail: [['/', 'Home'], ['/legal', 'Policies'], 'Privacy policies'] })}
<section class="section" style="padding-top:24px"><div class="wrap hub-grid">
  <a class="link-card" href="/legal/company-privacy"><strong>Karis Global Retail</strong><span>Company privacy policy</span><span class="chev" aria-hidden="true"></span></a>
  <a class="link-card" href="/apps/kya-khaun/privacy"><strong>Kya Khaun?</strong><span>Product privacy policy</span><span class="chev" aria-hidden="true"></span></a>
  <a class="link-card" href="/apps/karis/privacy"><strong>KARIS</strong><span>Product privacy policy</span><span class="chev" aria-hidden="true"></span></a>
</div></section>`,
  },

  {
    path: '/legal/terms',
    title: 'Terms',
    description: `Terms of ${company.legalName} and its products.`,
    body: `${hero({ title: 'Terms', lead: 'Website terms, and the terms of use for each product.', trail: [['/', 'Home'], ['/legal', 'Policies'], 'Terms'] })}
<section class="section" style="padding-top:24px"><div class="wrap hub-grid">
  <a class="link-card" href="/legal/website-terms"><strong>Karis Global Retail</strong><span>Website terms</span><span class="chev" aria-hidden="true"></span></a>
  <a class="link-card" href="/apps/kya-khaun/terms"><strong>Kya Khaun?</strong><span>Product terms of use</span><span class="chev" aria-hidden="true"></span></a>
  <a class="link-card" href="/apps/karis/terms"><strong>KARIS</strong><span>Product terms of use</span><span class="chev" aria-hidden="true"></span></a>
</div></section>`,
  },

  {
    path: '/legal/delete-account',
    title: 'Delete an account',
    description: `How to delete your account in products built by ${company.legalName}.`,
    body: `${hero({ title: 'Delete an account', lead: 'Choose the product whose account you want to delete.', trail: [['/', 'Home'], ['/legal', 'Policies'], 'Delete an account'] })}
<section class="section" style="padding-top:24px"><div class="wrap hub-grid">
  <a class="link-card" href="/apps/kya-khaun/delete-account"><strong>Kya Khaun?</strong><span>Delete your account</span><span class="chev" aria-hidden="true"></span></a>
  <a class="link-card" href="/apps/karis/delete-account"><strong>KARIS</strong><span>Delete your account</span><span class="chev" aria-hidden="true"></span></a>
</div></section>`,
  },

  {
    path: '/404',
    title: 'Page not found',
    description: 'This page could not be found.',
    noindex: true,
    body: `${hero({ title: 'Page not found', lead: 'The page you were looking for doesn’t exist or has moved.', extra: '<div class="ctas"><a class="btn" href="/">Go to the home page</a></div>' })}`,
  },
];
