// Observador para animações de entrada
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const elements = document.querySelectorAll('.sections');
elements.forEach((element) => {
  myObserver.observe(element);
});

// Alternância de tema claro/escuro
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// ====== FUNCIONALIDADE "VER MAIS" PROJETOS ======
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll("#projects-container .project");
  const verMaisBtn = document.getElementById("verMaisBtn");
  const visibleCount = 6;

  // Oculta todos após o limite inicial
  projects.forEach((proj, index) => {
    if (index >= visibleCount) {
      proj.classList.add("hidden-project");
    }
  });

  verMaisBtn.addEventListener("click", () => {
    const hidden = document.querySelectorAll(".hidden-project");
    hidden.forEach((el) => el.classList.remove("hidden-project"));
    verMaisBtn.style.display = "none";
  });
});
