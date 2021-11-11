//abrir e fechar menu: hamburguer e x
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

//fechar menu quando clicar em um item para
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

//colocar sombra quando der scroll
 const header = document.querySelector("#header");
  const navHeight = header.offsetHeight
  
function changeHeaderWhenScroll () {
 

  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

//testimonials carousel slider swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,

  //pagination
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

// scrollreveal: mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal ({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image, #about .image, #about .text, #services .card, #testimonials .testimonials, #contact .links, footer .brand, footer .social
    `, { interval: 100 })

//back to top
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {


  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//menu ativo conforme seção
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
        
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//when scroll
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll ()
  backToTop()
  activateMenuAtCurrentSection()
});

//DOM - document object model