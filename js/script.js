// Mobile navigation, theme persistence, search, tabs, quiz, and playground behavior.
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const typingTarget = document.querySelector("[data-typing]");
const searchInput = document.querySelector("[data-search]");
const tutorialCards = [...document.querySelectorAll(".tutorial-card")];
const editorTabs = [...document.querySelectorAll("[data-editor-tab]")];
const editors = [...document.querySelectorAll("[data-editor]")];
const runButton = document.querySelector("[data-run-code]");
const outputFrame = document.querySelector("[data-output]");
const quiz = document.querySelector("[data-quiz]");
const quizFeedback = document.querySelector("[data-quiz-feedback]");

const languageWords = ["HTML5", "CSS3", "JavaScript", "Python", "Java", "C++", "C", "C#"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("codeforge-theme", theme);
  themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  themeToggle.querySelector(".toggle-icon").textContent = theme === "dark" ? "☀" : "☾";
}

function typeLoop() {
  const word = languageWords[wordIndex];
  typingTarget.textContent = word.slice(0, charIndex);

  if (!deleting && charIndex < word.length) {
    charIndex += 1;
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1200);
    return;
  } else if (charIndex > 0) {
    charIndex -= 1;
  } else {
    deleting = false;
    wordIndex = (wordIndex + 1) % languageWords.length;
  }

  setTimeout(typeLoop, deleting ? 55 : 95);
}

function runCode() {
  const html = document.querySelector('[data-editor="html"]').value;
  const css = document.querySelector('[data-editor="css"]').value;
  const js = document.querySelector('[data-editor="js"]').value;
  const documentSource = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>${css}</style>
</head>
<body>
  ${html}
  <script>${js}<\/script>
</body>
</html>`;

  outputFrame.srcdoc = documentSource;
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  tutorialCards.forEach((card) => {
    const haystack = `${card.textContent} ${card.dataset.tags}`.toLowerCase();
    card.hidden = !haystack.includes(query);
  });
});

editorTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.editorTab;

    editorTabs.forEach((item) => item.classList.toggle("active", item === tab));
    editors.forEach((editor) => editor.classList.toggle("active", editor.dataset.editor === target));
  });
});

runButton.addEventListener("click", runCode);

quiz.addEventListener("click", (event) => {
  const option = event.target.closest("button");
  if (!option) return;

  quiz.querySelectorAll("button").forEach((button) => button.classList.remove("correct"));

  if (option.dataset.correct === "true") {
    option.classList.add("correct");
    quizFeedback.textContent = "Correct. CSS controls visual styling.";
  } else {
    quizFeedback.textContent = "Close. HTML structures content, while CSS styles it.";
  }
});

const savedTheme = localStorage.getItem("codeforge-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
setTheme(savedTheme || preferredTheme);
typeLoop();
runCode();
