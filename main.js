// ============= MOBILE MENU =============
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("open");
});

navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("open");
  });
});

// ============= LANGUAGE SWITCHER =============
const language = document.getElementById("language");
const currentLang = document.getElementById("current-lang");

const langLabels = { en: "EN", fr: "FR", ar: "AR" };

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  currentLang.querySelector(".lang-code").textContent = langLabels[lang];
  localStorage.setItem("site-lang", lang);
}

currentLang.addEventListener("click", (e) => {
  e.stopPropagation();
  language.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!language.contains(e.target)) {
    language.classList.remove("active");
  }
});

language.querySelectorAll(".language-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    applyLanguage(link.getAttribute("data-lang"));
    language.classList.remove("active");
  });
});

// ============= INIT =============
applyLanguage(localStorage.getItem("site-lang") || "en");
