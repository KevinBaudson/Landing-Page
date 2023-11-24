
// const btnMobile = document.querySelector("#btn-menu")

// btnMobile.addEventListener('click',()=>{
    
//     let menuMobile = document.querySelector("#navbar-mob")
//    if(menuMobile){  
//         menuMobile.classList.toggle('nav-mobile')
//    }
// })

// const lastOne = document.querySelector('.last-one')

// const myObserver = new IntersectionObserver((event)=>{
//      console.log(event)
// })

// myObserver.observe(lastOne)

//atalho para comentar é ctrl + ;

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

//aqui ele passa a observar cada elemento que tem a classe sections

elements.forEach((element)=>{
     myObserver.observe(element)
})


