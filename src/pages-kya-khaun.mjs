import site from '../site.config.mjs';
import { esc, hero, mail, policy, policyLinks } from './layout.mjs';

const { company, contact } = site;
const APP = 'Kya Khaun?';
const base = '/apps/kya-khaun';
const trail = (last) => [['/', 'Home'], ['/apps', 'Products'], [base, APP], last];
const support = mail(contact.kyaKhaunSupport);
const privacyMail = mail(contact.privacy);

const appLinks = policyLinks(base, 'Kya Khaun?');

export default [
  {
    path: base,
    title: 'Kya Khaun? food discovery app',
    description: 'Kya Khaun? helps you decide what to eat: dishes and nearby places to order from, or recipes from what you have at home. A product of Karis Global Retail Private Limited.',
    body: `${hero({
      title: 'Kya Khaun?',
      lead: "A food discovery app. Tell it what you feel like, and get a few good options in seconds.",
      trail: [['/', 'Home'], ['/apps', 'Products'], 'Kya Khaun?'],
      extra: `<div class="ctas rise d2"><span class="tag">In development</span><span class="publisher" style="margin:0">A product of <a href="/legal/company-information">${esc(company.legalName)}</a></span></div>`,
    })}

<section class="section" style="padding-top:24px">
  <div class="wrap">
    <h2 class="section-title">What it does.</h2>
    <div class="features">
      <div><h3>Say what you feel like</h3><p>Type or speak a craving, a budget and how quickly you need it, in English, Hindi or Hinglish. Or choose a mood: spicy, comfort, light, street or sweet.</p></div>
      <div><h3>Picks near you</h3><p>With permission to use approximate location, it suggests nearby restaurants using Google's places information, and typical dishes to look for.</p></div>
      <div><h3>Cook at home</h3><p>List what's in your kitchen, or photograph your fridge, and get recipes. Cook step by step with Chatora reading each step aloud, then keep a photo of your dish in My Kitchen.</p></div>
      <div><h3>Plan your day, or order for a group</h3><p>Breakfast to dinner within a budget, or places that suit a group of friends, family or colleagues, veg and non-veg.</p></div>
      <div><h3>Festivals and snaps</h3><p>What people eat for each festival, and dishes that fit where you are: snap the place, say veg or non-veg, and pick.</p></div>
      <div><h3>English and हिंदी</h3><p>The whole app works in English or Hindi.</p></div>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="wrap notes">
    <article class="note">
      <h2>How ordering works</h2>
      <p><strong>Ordering and delivery, where available, are completed through the selected third-party provider.</strong> When someone chooses a place, Kya Khaun? opens Zomato or Swiggy, where they see the real menu and price and place the order. Kya Khaun? does not take orders or payments.</p>
      <p>Kya Khaun? is independent and is not affiliated with, endorsed by or partnered with Zomato, Swiggy or any restaurant. Restaurant details come from Google, and prices can differ in the ordering app.</p>
    </article>
    <article class="note">
      <h2>About the AI</h2>
      <p>Replies, recipe ideas, fridge scans and photo ideas are made by Claude, an AI model from Anthropic. It also finds a restaurant's own page on Zomato or Swiggy. The app asks before using it, and people can choose basic mode instead.</p>
      <p>AI can make mistakes. It does not give nutritional, medical or allergy advice, and it can't promise a restaurant or dish is available. Every AI reply can be reported.</p>
    </article>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2 class="section-title">Policies and support.</h2>
    <p class="section-lead">Everything about how Kya Khaun? handles your data, the rules for using it, and how to delete your account.</p>
    <div style="margin-top:40px">${appLinks}</div>
    <p class="publisher">Kya Khaun? is a product of ${esc(company.legalName)}, CIN <span class="num">${esc(company.cin)}</span>. Store links will appear here once the app is published.</p>
  </div>
</section>`,
  },

  {
    path: `${base}/support`,
    title: 'Kya Khaun? support',
    description: 'Get help with the Kya Khaun? app.',
    body: `${hero({ title: 'Kya Khaun? support', lead: 'We’re here to help with the app.', trail: trail('Support') })}
<div class="wrap prose">
  <h2>Contact support</h2>
  <p>Email ${support}, or use the <a href="/contact">contact form</a> and choose "Kya Khaun? support". Tell us your phone model and what happened, and include a screenshot if you can.</p>

  <h2>Common questions</h2>
  <h3>Can I order food inside Kya Khaun?</h3>
  <p>No. Kya Khaun? helps you decide. When you pick a place, it opens Zomato or Swiggy, where you order and pay. For a problem with an order, payment or delivery, contact the app you ordered on.</p>
  <h3>Why do I see "Sample" dishes?</h3>
  <p>When real nearby restaurants aren't available (for example, if location is off), the app shows example dishes so you can see how picks work. Turn on location to see real places near you.</p>
  <h3>A reply from Chatora looks wrong or unsafe.</h3>
  <p>Tap "Report" under the reply and choose a reason. We review reports. Always check allergens and ingredients with the restaurant.</p>
  <h3>How do I turn off AI?</h3>
  <p>Tap the circle at the top of Home → Settings → Use AI → "Not now, use basic mode". The app keeps working with simpler matching; photo scan, Snap Your Order and song picks are switched off.</p>
  <h3>Does the app remember my taste?</h3>
  <p>No. Kya Khaun? doesn't keep a taste profile. Chatora asks veg or non-veg and your budget in the chat when it needs them.</p>
  <h3>Where are the photos of dishes I cooked?</h3>
  <p>In My Kitchen (Settings → My Kitchen). They stay on your phone only and are never uploaded. Long-press a dish to remove it; uninstalling the app removes them all.</p>
  <h3>How do I delete my chats, history or account?</h3>
  <p>Chats: Chat → list button → delete one or all. History: Settings → History → Clear. Account: <a href="${base}/delete-account">see how to delete your account</a>.</p>

  <h2>Policies</h2>
  ${appLinks}
</div>`,
  },

  {
    path: `${base}/privacy`,
    title: 'Kya Khaun? privacy policy',
    description: 'Privacy policy for the Kya Khaun? app by Karis Global Retail Private Limited.',
    body: `${hero({ title: 'Kya Khaun? privacy policy', trail: trail('Privacy policy') })}
${policy({
  updated: site.appPolicyDate ?? site.policyDate,
  sections: [
    {
      title: 'Who we are',
      html: `<p>This policy explains how the <strong>Kya Khaun?</strong> mobile app handles personal data. The app is developed and operated by <strong>${esc(company.legalName)}</strong> ("we", "us"), CIN ${esc(company.cin)}, registered office ${esc(company.address.lines.join(', '))}. For privacy questions, write to ${privacyMail}.</p>
<div class="callout"><strong>In short:</strong> we collect only what we need to suggest food. We don't sell your data, we don't show ads, and we don't track you across other apps or websites. You can delete your chats, history or whole account from inside the app at any time.</div>`,
    },
    {
      title: 'What we collect and why',
      html: `<table><thead><tr><th scope="col">What</th><th scope="col">Why</th></tr></thead><tbody>
<tr><td><strong>Account:</strong> your name and email address. If you sign in with Google, the name and email on that Google account.</td><td>To sign you in and keep your account. Passwords are handled by Google Firebase; we never see them.</td></tr>
<tr><td><strong>Chats with Chatora</strong>, and day plans you save.</td><td>To answer you, and so you can return to them.</td></tr>
<tr><td><strong>What you do with picks:</strong> dishes or places you save, open on Zomato or Swiggy, or mark "Not for me".</td><td>For your Saved list, History and "Order again". We don't build a taste profile from it.</td></tr>
<tr><td><strong>Group orders</strong>: how many people, how many are veg, the kind of group and the budget each, when you use Order for a Group.</td><td>To find places that suit everyone. Not stored in your account.</td></tr>
<tr><td><strong>Crash reports</strong>: when the app or our server hits an error, the app version, phone model and system, and what went wrong.</td><td>To find and fix bugs. They don't include your chats, photos, location or account details.</td></tr>
<tr><td><strong>Approximate location</strong>, if you allow it.</td><td>To find food and places to go near you, to work out drive times, and to check the weather there (rain or heat changes what Chatora suggests). It is sent with each search and not stored in your account.</td></tr>
<tr><td><strong>Fridge or shelf photos</strong>, only when you choose to scan.</td><td>To spot the ingredients you have. We don't keep the photo.</td></tr>
<tr><td><strong>A photo of where you are</strong> (Snap Your Order), only when you take one.</td><td>To read the setting (indoors or out, time of day, weather) and suggest dishes that fit. We don't keep the photo, and Chatora never tries to identify anyone or guess how anyone feels.</td></tr>
<tr><td><strong>A photo of your food</strong> (Songs for your meal), only when you take one, the language you pick and an optional line.</td><td>To suggest 3–4 songs for the moment. We don't keep the photo. To make sure each song is real, only the song and artist names are checked against Apple's public music catalogue; nothing about you is sent to Apple. Songs open in Spotify, YouTube Music or Apple Music, which we're not linked to.</td></tr>
<tr><td><strong>Voice</strong>, only when you tap the microphone.</td><td>Your phone's own speech recognition (Google or Apple) turns it into text; we receive only the text.</td></tr>
<tr><td><strong>Chatora's spoken replies</strong>, only when you use voice chat, tap Listen or turn on "Read replies aloud".</td><td>The text of Chatora's reply is sent to Google Cloud Text-to-Speech to make the audio, which is kept on our server for up to 15 minutes. Your own voice is never sent.</td></tr>
<tr><td><strong>Reports</strong> you send about an AI reply.</td><td>To review and improve safety.</td></tr>
</tbody></table>
<p>Meal reminders, your language and voice settings, and <strong>My Kitchen</strong> (photos of dishes you cooked, and your cooking achievements) stay on your phone only. We never receive those photos. Calling a restaurant opens your phone's dialler; we don't see the call. We don't collect advertising IDs, contacts, or anything for advertising.</p>`,
    },
    {
      title: 'App permissions',
      html: `<ul>
<li><strong>Location</strong> (optional): nearby restaurants, places to go out to with drive times, and the local weather. Without it, you still get suggestions.</li>
<li><strong>Camera and photos</strong> (optional): fridge scan, Snap Your Order, songs for your meal, and photos of dishes you cooked for My Kitchen (kept on your phone). You can type instead.</li>
<li><strong>Microphone and speech recognition</strong> (optional): speaking instead of typing, and saying "next" or "repeat" while cooking.</li>
<li><strong>Notifications</strong> (optional): meal reminders you set yourself.</li>
</ul><p>Each is asked for only when you use that feature, and can be turned off in your phone settings.</p>`,
    },
    {
      title: 'Artificial intelligence (AI)',
      html: `<p>Chatora's replies and recipe ideas come from Claude, an AI model made by Anthropic. The app asks before using it. If you agree, we send Anthropic what's needed to answer you: your message and the recent chat, your first name and, when you scan or snap, the photo. Not your email, your exact location or anything else on your phone. To open a restaurant's own page on Zomato or Swiggy, its public name and area are looked up with Anthropic's web search; nothing about you is sent for that. Anthropic processes it to produce a reply and, under its commercial terms, does not use it to train its models. You can turn AI off in Settings → Use AI.</p>`,
    },
    {
      title: 'Who we share it with',
      html: `<p>We don't sell personal data. These service providers process data on our behalf, only to run the app:</p>
<ul>
<li><strong>Anthropic</strong>: AI replies, only if you agree (USA).</li>
<li><strong>Google Firebase</strong>: sign-in and account emails. <strong>Google Maps Platform</strong>: nearby places, drive times and current weather, from your approximate location and what you searched. <strong>Google Cloud Text-to-Speech</strong>: turns Chatora's replies into a male or female voice, when you choose to hear them.</li>
<li><strong>Sentry</strong> (Functional Software, Inc.): crash and error reports, so we can fix problems.</li>
<li><strong>MongoDB Atlas</strong>: our database. <strong>Render</strong>: our server.</li>
</ul>
<p>Some providers process data outside India. When you choose Zomato or Swiggy, we open their app or website; we don't send them your data, and their privacy policies apply there. We may disclose information where the law requires it.</p>`,
    },
    {
      title: 'How long we keep it',
      html: `<p>We keep your data while you have an account. You can delete single chats, all chats and your history at any time in the app. Taste settings saved by earlier versions of the app are no longer used, and are deleted with your account. When you delete your account, your data is deleted from our database straight away; copies in backups are removed within 30 days.</p>`,
    },
    {
      title: 'Your choices and rights',
      html: `<ul>
<li>Turn off "Use AI" at any time in Settings.</li>
<li>Remove dishes from My Kitchen on your phone at any time.</li>
<li>Delete chats, history or your account in the app, or <a href="${base}/delete-account">request deletion here</a>.</li>
<li>Ask for a copy of your data, or a correction, by writing to ${privacyMail}.</li>
</ul>`,
    },
    {
      title: 'Children',
      html: `<p>Kya Khaun? is not meant for children under 13. If you are under 18, use it with a parent's or guardian's permission. If you believe a child has given us personal data, contact us and we will delete it.</p>`,
    },
    {
      title: 'Security',
      html: `<p>Data travels over encrypted connections (HTTPS). Sign-in is handled by Firebase, and the app keeps its sign-in token in the phone's secure storage. Access to our systems is limited to people who need it.</p>`,
    },
    {
      title: 'Changes and contact',
      html: `<p>If we change this policy, we'll update the effective date above and tell you in the app when a change matters. For questions, requests or complaints (including as our grievance contact under India's data protection law), write to ${privacyMail}.</p>`,
    },
  ],
})}`,
  },

  {
    path: `${base}/terms`,
    title: 'Kya Khaun? terms of use',
    description: 'Terms of use for the Kya Khaun? app by Karis Global Retail Private Limited.',
    body: `${hero({ title: 'Kya Khaun? terms of use', trail: trail('Terms of use') })}
${policy({
  updated: site.appPolicyDate ?? site.policyDate,
  sections: [
    { title: 'Who these terms are with', html: `<p>These terms apply when you use the Kya Khaun? app, provided by ${esc(company.legalName)} (CIN ${esc(company.cin)}). By using the app you agree to them. You must be at least 13 years old; if you are under 18, use the app with a parent's or guardian's permission.</p>` },
    { title: 'What Kya Khaun? does', html: `<p>Kya Khaun? suggests what to eat: dishes and places to order from, recipes to cook, and plans for a day of meals. <strong>We don't sell, prepare or deliver food.</strong> When you choose to order, we open Zomato or Swiggy; ordering and delivery are completed through that third-party provider and are between you, that provider and the restaurant, under their terms.</p><p>Kya Khaun? is independent. It is not affiliated with, endorsed by or sponsored by Zomato, Swiggy or any restaurant. Their names are used only to show where you can order.</p>` },
    { title: 'Suggestions, prices and AI', html: `<ul><li>Prices, ratings, distances, menus and opening hours are estimates and may differ in the ordering app. Example dishes are labelled "Sample".</li><li>Replies from Chatora are written by AI and can be wrong. They are not medical, nutritional or allergy advice. If you have an allergy or follow a diet for health reasons, check every dish with the restaurant before ordering or cooking.</li><li>Recipes are ideas. Cook safely and use your own judgement.</li></ul>` },
    { title: 'Your account', html: `<p>Keep your sign-in details private and tell us if you think someone else is using your account. You can delete your account at any time from Settings → Delete my account.</p>` },
    { title: 'Fair use', html: `<p>Please don't misuse the app: no attempting to break or overload it, getting around its limits, copying it at scale, or using Chatora to create harmful or illegal content. We may limit or close accounts that do.</p>` },
    { title: 'Content and intellectual property', html: `<p>The app, its design, text and software belong to ${esc(company.legalName)}. Restaurant names and information belong to their owners. You keep what you write; you allow us to use it only to run the app for you.</p>` },
    { title: 'Our responsibility', html: `<p>We work to keep Kya Khaun? useful and available, but it is provided "as is". As far as the law allows, we are not responsible for food, orders, payments or deliveries made through other apps, or for losses that come from relying on a suggestion. Nothing here limits rights you have under law.</p>` },
    { title: 'Ending use', html: `<p>You can stop using the app and delete your account at any time. We may suspend accounts that break these terms.</p>` },
    { title: 'Changes, law and contact', html: `<p>We may update the app and these terms; when a change matters, we'll tell you in the app. These terms are governed by the laws of India, and the courts of Mumbai have jurisdiction. Questions? Write to ${support}.</p>` },
  ],
})}`,
  },

  {
    path: `${base}/delete-account`,
    title: 'Delete your Kya Khaun? account',
    description: 'How to delete your Kya Khaun? account and data.',
    body: `${hero({ title: 'Delete your Kya Khaun? account', lead: `This service is operated by ${esc(company.legalName)}. You can permanently delete your Kya Khaun? account and its personal data at any time.`, trail: trail('Delete account') })}
<div class="wrap prose">
  <h2>In the app (quickest)</h2>
  <ol>
    <li>Open Kya Khaun?, tap the circle at the top of Home to open <strong>Settings</strong>.</li>
    <li>Scroll to the bottom and tap <strong>Delete my account</strong>.</li>
    <li>Confirm. Your account and data are deleted straight away and you are signed out.</li>
  </ol>

  <h2>Without the app</h2>
  <p>Email ${privacyMail} <strong>from the email address you sign in with</strong>, with the subject <strong>"Delete my Kya Khaun account"</strong>. We'll confirm and delete it within 7 days. We won't ask for any other documents.</p>

  <h2>What is deleted</h2>
  <ul>
    <li>Your account: name, email and sign-in sessions.</li>
    <li>Your chats with Chatora, saved dishes and places, saved day plans, order history, and any taste settings from earlier versions of the app.</li>
  </ul>

  <h2>What we keep</h2>
  <p>If you reported a reply from Chatora, the report text is kept for safety review but is no longer linked to you. Copies in backups are removed within 30 days. Meal reminders and My Kitchen photos live only on your phone and go when you uninstall the app.</p>

  <h2>Delete only some data</h2>
  <p>In the app you can delete single chats or clear your history, without deleting your account.</p>

  <p>Need help? ${support}</p>
</div>`,
  },
];
