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
    title: 'Kya Khaun? home cooking app',
    description: 'Kya Khaun? helps you cook at home: recipes from what is in your fridge, step-by-step cooking with a voice guide, drinks, festival dishes and a calorie planner. A product of Karis Global Retail Private Limited.',
    body: `${hero({
      title: 'Kya Khaun?',
      lead: "A home cooking app. Tell it what you have or what you feel like, and cook something good today.",
      trail: [['/', 'Home'], ['/apps', 'Products'], 'Kya Khaun?'],
      extra: `<div class="ctas rise d2"><span class="tag">In development</span><span class="publisher" style="margin:0">A product of <a href="/legal/company-information">${esc(company.legalName)}</a></span></div>`,
    })}

<section class="section" style="padding-top:24px">
  <div class="wrap">
    <h2 class="section-title">What it does.</h2>
    <div class="features">
      <div><h3>Fridge to feast</h3><p>Type what's in your kitchen, or photograph your fridge, and see what you can cook right now.</p></div>
      <div><h3>Cook step by step</h3><p>Big clear steps, timers, and Chatora reading each step aloud. Say "next" or "repeat" with messy hands, or snap your pan when you're not sure.</p></div>
      <div><h3>Ask Chatora</h3><p>Type or speak any cooking question, in English, Hindi or Hinglish: what to make, how long, what to use instead, how to fix a dish.</p></div>
      <div><h3>Drinks, festivals and moods</h3><p>Drinks to make at home, festival dishes for the season, 15-minute cravings and recipes by mood. An adults-only Bar section opens only after a date-of-birth check.</p></div>
      <div><h3>Eat smart</h3><p>A simple calorie planner with meal ideas for a daily goal. Calories are estimates, not medical advice.</p></div>
      <div><h3>Chef Journey</h3><p>Keep a photo of each dish you cook in My Kitchen, earn points and badges, and level up. English and हिंदी throughout.</p></div>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="wrap notes">
    <article class="note">
      <h2>Cooking only</h2>
      <p>Kya Khaun? is about cooking at home. It does not sell, order or deliver food, and it does not take payments.</p>
      <p>Some dish and step pictures are made with AI to show what a step looks like; they are illustrations, not photos of a real plate.</p>
    </article>
    <article class="note">
      <h2>About the AI</h2>
      <p>Chatora's answers, recipe ideas, fridge scans, pan checks and dish-photo checks are made by Claude, an AI model from Anthropic. The app asks before using it, and people can choose basic mode instead.</p>
      <p>AI can make mistakes. It does not give medical, nutritional or allergy advice. Every AI reply can be reported.</p>
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
  <h3>Can I order food in Kya Khaun?</h3>
  <p>No. Kya Khaun? is a cooking app: it helps you decide what to cook and guides you while you cook. It doesn't sell or deliver food.</p>
  <h3>A reply from Chatora looks wrong or unsafe.</h3>
  <p>Tap "Report" under the reply and choose a reason. We review reports. Always check allergens and ingredients yourself.</p>
  <h3>How do I turn off AI?</h3>
  <p>Tap the circle at the top of Home → Settings → Use AI (Chatora) → "Not now". The app keeps working with simpler matching; photo scans, pan checks and Ask Chatora are switched off.</p>
  <h3>Why does my dish photo not count?</h3>
  <p>Points and badges count only a real photo of the dish you just cooked. Chatora checks the photo once (it isn't kept) and tells you why when it doesn't count, for example a screenshot or a different dish.</p>
  <h3>Where are the photos of dishes I cooked?</h3>
  <p>In My Kitchen. They are kept on your phone only. Long-press a dish to remove it; uninstalling the app removes them all.</p>
  <h3>How do I open the Bar?</h3>
  <p>The Bar has drinks with alcohol and is only for adults. Add your date of birth once in your profile; the Bar opens if you are 18 or older.</p>
  <h3>How do I change or stop notifications?</h3>
  <p>Settings → Notifications. You can switch off Chatora's notifications or the reminder for an unfinished recipe, or turn notifications off in your phone settings.</p>
  <h3>How do I delete my saved recipes, history or account?</h3>
  <p>Saved: remove a recipe from Saved. History: email ${privacyMail} and we'll clear it, or it goes with your account. Account: <a href="${base}/delete-account">see how to delete your account</a>.</p>

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
<div class="callout"><strong>In short:</strong> we collect only what we need to help you cook. We don't sell your data, we don't show ads, and we don't track you across other apps or websites. You can delete your saved recipes or your whole account from inside the app at any time.</div>`,
    },
    {
      title: 'What we collect and why',
      html: `<table><thead><tr><th scope="col">What</th><th scope="col">Why</th></tr></thead><tbody>
<tr><td><strong>Account:</strong> your name and email address. If you sign in with Google or Apple, the name and email on that account.</td><td>To sign you in and keep your account. Passwords are handled by Google Firebase; we never see them.</td></tr>
<tr><td><strong>Your food profile</strong> (optional): veg or non-veg, spice level, cuisines you like, and allergies or foods you avoid.</td><td>To suggest recipes that suit you. You can change them in Settings.</td></tr>
<tr><td><strong>Date of birth</strong> (optional), only if you add it.</td><td>To check you are 18 or older before the adults-only Bar opens. Checked on our server; not used for anything else.</td></tr>
<tr><td><strong>Saved recipes and history</strong>: recipes you save, open or plan.</td><td>For your Saved list and History. We don't build a taste profile from it.</td></tr>
<tr><td><strong>Questions to Chatora</strong>, and the recent chat on that screen.</td><td>To answer you. Ask Chatora chats are not stored in your account.</td></tr>
<tr><td><strong>What you ate</strong>, when you type it in the calorie planner, and your daily calorie goal.</td><td>To estimate calories and suggest meals. Estimates only, not medical advice. Your daily log stays on your phone.</td></tr>
<tr><td><strong>Fridge or shelf photos</strong>, only when you choose to scan.</td><td>To spot the ingredients you have. We don't keep the photo.</td></tr>
<tr><td><strong>Pan photos</strong>, only when you ask Chatora to check a cooking step.</td><td>To tell you if the step looks done. We don't keep the photo.</td></tr>
<tr><td><strong>A photo of a dish you cooked</strong>, when you add one for points and badges.</td><td>Checked once to confirm it is a real photo of that dish. We don't keep it; your copy stays in My Kitchen on your phone.</td></tr>
<tr><td><strong>Voice</strong>, only when you tap the microphone.</td><td>Your phone's own speech recognition (Google or Apple) turns it into text; we receive only the text.</td></tr>
<tr><td><strong>Chatora's spoken lines</strong>, when you use voice, tap Listen or cook with the voice on.</td><td>The text to be spoken is sent to Google Cloud Text-to-Speech to make the audio, which is kept on our server for up to 15 minutes. Your own voice is never sent.</td></tr>
<tr><td><strong>Crash reports</strong>: when the app or our server hits an error, the app version, phone model and system, and what went wrong.</td><td>To find and fix bugs. They don't include your photos or account details.</td></tr>
<tr><td><strong>Reports</strong> you send about an AI reply.</td><td>To review and improve safety.</td></tr>
</tbody></table>
<p><strong>Kept only on your phone:</strong> My Kitchen (photos of dishes you cooked, points and badges), your profile photo, your calorie log, notification settings, and your language and voice settings. We never receive these. We don't collect your location, advertising IDs, contacts, or anything for advertising.</p>`,
    },
    {
      title: 'App permissions',
      html: `<ul>
<li><strong>Camera and photos</strong> (optional): fridge scan, pan checks, photos of dishes you cooked, and your profile photo. You can type instead.</li>
<li><strong>Microphone and speech recognition</strong> (optional): speaking to Chatora instead of typing, and saying "next" or "repeat" while cooking.</li>
<li><strong>Notifications</strong> (optional): a couple of friendly cooking ideas a day, and a reminder when you leave a recipe unfinished. They are scheduled on your phone; nothing is sent to us. Switch them off in Settings → Notifications.</li>
</ul><p>Each is asked for only when you use that feature, and can be turned off in your phone settings.</p>`,
    },
    {
      title: 'Artificial intelligence (AI)',
      html: `<p>Chatora's answers, recipe ideas, photo scans, pan checks and dish-photo checks come from Claude, an AI model made by Anthropic. The app asks before using it. If you agree, we send Anthropic what's needed: your question and the recent chat, your first name, and the photo when you scan or check one. Not your email or anything else on your phone. Anthropic processes it to produce a reply and, under its commercial terms, does not use it to train its models. Recipe text may also be translated into Hindi by Claude; that contains nothing about you. You can turn AI off in Settings → Use AI.</p>
<p>Some dish and step pictures are made with AI (OpenAI) from the recipe alone, to show what a step looks like. No personal data is used to make them.</p>`,
    },
    {
      title: 'Who we share it with',
      html: `<p>We don't sell personal data. These service providers process data on our behalf, only to run the app:</p>
<ul>
<li><strong>Anthropic</strong>: AI replies and photo checks, only if you agree (USA).</li>
<li><strong>Google Firebase</strong>: sign-in and account emails. <strong>Google Cloud Text-to-Speech</strong>: turns Chatora's lines into a male or female voice, when you choose to hear them.</li>
<li><strong>Sentry</strong> (Functional Software, Inc.): crash and error reports, so we can fix problems.</li>
<li><strong>MongoDB Atlas</strong>: our database. <strong>Google Cloud Run</strong> (Mumbai, India): our server; <strong>Render</strong> also runs it while older test versions of the app are in use.</li>
</ul>
<p>Some providers process data outside India. We may disclose information where the law requires it.</p>`,
    },
    {
      title: 'How long we keep it',
      html: `<p>We keep your data while you have an account. You can remove saved recipes at any time in the app, and ask us to clear your history. Data saved by earlier versions of the app (chats, saved places, taste settings) is no longer used and is deleted with your account. When you delete your account, your data is deleted from our database straight away; copies in backups are removed within 30 days.</p>`,
    },
    {
      title: 'Your choices and rights',
      html: `<ul>
<li>Turn off "Use AI" at any time in Settings.</li>
<li>Change your food type, spice level, allergies and date of birth in Settings.</li>
<li>Remove dishes from My Kitchen on your phone at any time.</li>
<li>Remove saved recipes or delete your account in the app, or <a href="${base}/delete-account">request deletion here</a>.</li>
<li>Ask for a copy of your data, or a correction, by writing to ${privacyMail}.</li>
</ul>`,
    },
    {
      title: 'Children',
      html: `<p>Kya Khaun? is not meant for children under 13. If you are under 18, use it with a parent's or guardian's permission. The Bar, which has drinks with alcohol, opens only for people whose date of birth shows they are 18 or older. If you believe a child has given us personal data, contact us and we will delete it.</p>`,
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
    { title: 'Who these terms are with', html: `<p>These terms apply when you use the Kya Khaun? app, provided by ${esc(company.legalName)} (CIN ${esc(company.cin)}). By using the app you agree to them. You must be at least 13 years old; if you are under 18, use the app with a parent's or guardian's permission. The Bar section is only for people aged 18 or older.</p>` },
    { title: 'What Kya Khaun? does', html: `<p>Kya Khaun? helps you cook at home: recipes, step-by-step cooking, drinks, festival dishes and a calorie planner. <strong>We don't sell, prepare or deliver food, and we don't take payments.</strong></p>` },
    { title: 'Recipes, calories and AI', html: `<ul><li>Replies from Chatora are written by AI and can be wrong. They are not medical, nutritional or allergy advice. If you have an allergy or follow a diet for health reasons, check every ingredient yourself.</li><li>Calories are estimates, not medical advice.</li><li>Recipes are ideas. Cook safely, handle raw meat, eggs and hot oil with care, and use your own judgement.</li><li>Drinks with alcohol in the Bar are for adults only. Drink responsibly, and never drink and drive.</li><li>Some pictures are made with AI to illustrate a step; they may not match your dish exactly.</li></ul>` },
    { title: 'Your account', html: `<p>Keep your sign-in details private and tell us if you think someone else is using your account. Give your real date of birth if you use the Bar. You can delete your account at any time from Settings → Delete account.</p>` },
    { title: 'Fair use', html: `<p>Please don't misuse the app: no attempting to break or overload it, getting around its limits, copying it at scale, or using Chatora to create harmful or illegal content. We may limit or close accounts that do.</p>` },
    { title: 'Content and intellectual property', html: `<p>The app, its design, text, recipes and software belong to ${esc(company.legalName)}. You keep what you write and the photos you take; you allow us to use them only to run the app for you.</p>` },
    { title: 'Our responsibility', html: `<p>We work to keep Kya Khaun? useful and available, but it is provided "as is". As far as the law allows, we are not responsible for losses that come from relying on a recipe or suggestion. Nothing here limits rights you have under law.</p>` },
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
    <li>Scroll to the bottom and tap <strong>Delete account</strong>.</li>
    <li>Confirm. Your account and data are deleted straight away and you are signed out.</li>
  </ol>

  <h2>Without the app</h2>
  <p>Email ${privacyMail} <strong>from the email address you sign in with</strong>, with the subject <strong>"Delete my Kya Khaun account"</strong>. We'll confirm and delete it within 7 days. We won't ask for any other documents.</p>

  <h2>What is deleted</h2>
  <ul>
    <li>Your account: name, email, date of birth and sign-in sessions.</li>
    <li>About you, saved recipes, history, and anything saved by earlier versions of the app (chats, saved places, taste settings).</li>
  </ul>

  <h2>What we keep</h2>
  <p>If you reported a reply from Chatora, the report text is kept for safety review but is no longer linked to you. Copies in backups are removed within 30 days. My Kitchen photos, your profile photo, your calorie log and notification settings live only on your phone and go when you uninstall the app.</p>

  <h2>Delete only some data</h2>
  <p>In the app you can remove saved recipes without deleting your account. To clear your history only, email ${privacyMail}.</p>

  <p>Need help? ${support}</p>
</div>`,
  },
];
