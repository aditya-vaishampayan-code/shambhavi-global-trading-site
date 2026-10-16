# Shambhavi Global Trading FZCO — website

Static one-page site: `index.html`, `styles.css`, `script.js`. No build step.

Deploy on Vercel by importing this repo with the **Other** framework preset and no build command.

Preview locally:

    python -m http.server 5173

## Still to be supplied by the client

Each one appears on the page in red brackets, `[ like this ]`.

- Trade licence number
- Registered office address and telephone
- Confirmation of the enquiry email (`info@shambhaviglobal.com` is a placeholder; it's also used by the form)
- Jaydeep Mane's title, and each person's role at Shambhavi (current titles are their AP Globale group roles)
- Confirmation that "vinear" in the questionnaire means wood veneer

## Enquiry form

There's no backend. On submit, the form opens the visitor's email client with the enquiry filled in. To collect submissions directly, point the form at a handler such as Formspree and replace the submit logic in `script.js`.
