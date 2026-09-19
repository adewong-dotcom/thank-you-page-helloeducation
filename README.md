# Hello Education — Spanish and English thank-you pages

## Included

- `gracias.html`: Spanish post-checkout enrollment instructions.
- `thank-you.html`: English post-checkout enrollment instructions.
- `thank-you-assets/`: isolated styles, scripts, logo, unchanged globe favicon and locally hosted fonts with licenses.

Merge these files into the SAME published directory as your existing landing-page index.html. They add pages; they do not replace index.html, styles.css or app.js. If your Cloudflare output directory is `dist`, put them inside `dist`. Do not upload this README as a website asset.

## Required: connect the two published forms

Edit `thank-you-assets/config.js`:

```js
window.HELLO_ENROLLMENT_FORMS = Object.freeze({
  es: '', // Paste the published SPANISH responder URL between these quotes.
  en: ''  // Paste the published ENGLISH responder URL between these quotes.
});
```

Accepts HTTPS Google Forms responder URLs ending in /viewform (including query parameters) and HTTPS forms.gle short links. Do not use the form editor URL, response spreadsheet URL or any credentials. Both settings are blank in this package because the actual published URLs have not been supplied. Until configured, the form button stays unavailable and an email-help message is shown. Do not launch the pages with blank links.

The Spanish page selects only `es`; the English page selects only `en`. The ES/EN toggle links to the counterpart thank-you page. No tracking parameters, payment identifiers or personal information are forwarded automatically.

## Connect PayPal returns

For each Spanish product/payment link, where PayPal offers the after-payment return/redirect setting, use:

`https://YOUR-DOMAIN/gracias.html`

For each English product/payment link, use:

`https://YOUR-DOMAIN/thank-you.html`

Replace YOUR-DOMAIN with your actual domain. The placeholder is documentation only and is not embedded in the pages.

Do not expect one shared PayPal payment link with a single fixed return destination to remember which landing-page language was used. Use the separate ES and EN checkout links and matching return destinations. Locale parameters alone do not configure this routing. Test the actual return behavior of each configured checkout. These files do not modify PayPal settings or guarantee that every buyer will click a return link.

These are public informational pages, not payment verification. Visiting either URL must never grant course or Discord access. Verify enrollment/payment separately. Confirmation copy says the purchase will be reviewed; it does not claim a successful verified payment.

## Copy and delivery expectations

- First action: complete the corresponding registration form.
- One form per student; completed by their parent or guardian.
- Form asks for Discord username and guardian WhatsApp number; both are optional.
- After enrollment verification, email the relevant invitations and access instructions to the guardian BEFORE the cohort starts.
- Send WhatsApp invitations only to people who opted in. Use email for families who do not use these services.
- No weekly live-session promise, countdown or price is shown.
- Wording refers to the cohort start rather than a fixed October date, so it can be reused for later cohorts.
- The promise to send invitations is copy only: no email automation or scheduled job is included. Plan your actual delivery process accordingly.

## Deploy and check

1. Add these two HTML files and the entire asset folder to your website repository's publish directory.
2. Fill in BOTH real responder URLs.
3. Commit to a preview branch and let Cloudflare create the preview deployment.
4. Check each page on desktop and mobile. Test both form buttons and the language toggle.
5. Test the actual forms in a signed-out/incognito window to confirm families can submit them.
6. Merge the reviewed changes into the production branch.
7. Set the matching PayPal return destinations and verify the resulting URLs on your domain.

No external runtime dependencies, remote fonts, analytics, personal-data storage, payment scripts, or automatic redirects are included. Existing root `_headers` rules using `/*` also apply to these pages. Both pages include `noindex, nofollow`; this discourages indexing but does not restrict access.

The original-wordmark logo is a self-contained SVG with embedded raster artwork. Fonts and licenses are bundled. The current domain's `/` is used for the logo's home link.

## Validation
JavaScript syntax, both language routes, missing/invalid link fallback and local asset references were checked. Browser visual testing could not run in this environment because the browser download timed out; preview both pages in Cloudflare before production.
