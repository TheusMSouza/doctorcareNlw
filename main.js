window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()

  activeteMenuAtCurrentSection(home)
  activeteMenuAtCurrentSection(services)
  activeteMenuAtCurrentSection(about)
  activeteMenuAtCurrentSection(contact)

}

function activeteMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  
  //verificar se a base esta abaixo da linha alvo
  //dados

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limite da seção 
  //&& obriga que as duas ações sejam verdadeira para continuar 
  const sectionBoundaries = 
  sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  
 // ! negação  se for true vira falso e o inverso tbm
    
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries) {
   menuElement.classList.add('active')
  }
}


function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 500) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
#home img,
#home .stats, 
#services, 
#services header,
#services .cards,
#about,
#about header,
#about .content`)
