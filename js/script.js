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

// Alternância de tema claro/escuro com ícones Font Awesome
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
const icon = toggleButton.querySelector('i');

function updateIcon() {
  if (body.classList.contains('dark-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Aplica o tema salvo no localStorage ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
} else {
  body.classList.remove('dark-theme');
}
updateIcon();

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  updateIcon();
});

// ====== FUNCIONALIDADE "VER MAIS" PROJETOS ======
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll("#projects-container .project");
  const verMaisBtn = document.getElementById("verMaisBtn");

  const isMobile = window.innerWidth < 768;
  const visibleCount = isMobile ? 6 : projects.length;

  // Oculta os que ultrapassam o limite visível (no mobile)
  projects.forEach((proj, index) => {
    if (index >= visibleCount) {
      proj.classList.add("hidden-project");
    }
  });

  // Só mostra o botão "ver mais" se estiver no mobile e tiver projetos escondidos
  if (isMobile && projects.length > visibleCount) {
    verMaisBtn.style.display = "block";
  } else {
    verMaisBtn.style.display = "none";
  }

  verMaisBtn.addEventListener("click", () => {
    const hidden = document.querySelectorAll(".hidden-project");
    hidden.forEach((el) => el.classList.remove("hidden-project"));
    verMaisBtn.style.display = "none";
  });
});
