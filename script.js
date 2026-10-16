// Mobile navigation
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Enquiry form: no backend, so build an email for the visitor to send
const form = document.getElementById("enquiry");
const hint = document.getElementById("formHint");
const to = document.querySelector("[data-email]").textContent.trim();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstInvalid = null;
  form.querySelectorAll("[required]").forEach((field) => {
    const ok = field.checkValidity();
    field.setAttribute("aria-invalid", String(!ok));
    if (!ok && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    hint.textContent = "Please fill in your name, company, a valid email and a message.";
    hint.classList.add("is-error");
    firstInvalid.focus();
    return;
  }

  const d = Object.fromEntries(new FormData(form));
  const subject = `${d.type} enquiry from ${d.company}`;
  const body = [
    `Name: ${d.name}`,
    `Company: ${d.company}`,
    `Email: ${d.email}`,
    `Country: ${d.country || "-"}`,
    `Enquiry: ${d.type}`,
    "",
    d.message,
  ].join("\n");

  window.location.href =
    `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  hint.textContent = "Your email client should now open with the enquiry ready to send.";
  hint.classList.remove("is-error");
});

document.getElementById("year").textContent = new Date().getFullYear();
