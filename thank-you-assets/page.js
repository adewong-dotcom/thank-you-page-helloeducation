'use strict';
(() => {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
  const button = document.querySelector('[data-form-link]');
  const raw = window.HELLO_ENROLLMENT_FORMS?.[lang];
  let valid = false;
  try {
    const url = new URL(raw);
    valid = url.protocol === 'https:' && (
      (url.hostname === 'forms.gle' && url.pathname.length > 1) ||
      (url.hostname === 'docs.google.com' && /^\/forms\//.test(url.pathname) && /\/viewform\/?$/.test(url.pathname))
    );
    if (valid) {
      button.href = url.href;
      button.removeAttribute('aria-disabled');
      document.querySelector('[data-unavailable]').hidden = true;
    }
  } catch (_) { /* Keep the email fallback available until configured. */ }
  button.addEventListener('click', event => {
    if (!valid) {
      event.preventDefault();
      document.querySelector('[data-unavailable]').focus();
    }
  });
})();
