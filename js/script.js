
const myObserver = new IntersectionObserver((entries)=>{
     entries.forEach((entry)=>{
          if(entry.isIntersecting){
               entry.target.classList.add('show')
          }else{
               entry.target.classList.remove('show')
          }
     })
})
const elements = document.querySelectorAll('.sections')


elements.forEach((element)=>{
     myObserver.observe(element)
})


const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Verifica se há preferência salva no localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  toggleButton.textContent = '☀️';
}

// Evento de clique para alternar o tema
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
