const langLink = document.querySelectorAll('.language__link');
const langBlock = document.querySelector('.language');

langLink.forEach(item => {
    item.addEventListener('click', () => {
        let currentLink = item;

        langLink.forEach(function(item){
            item.classList.remove('language__link_active');
        });

        currentLink.classList.add('language__link_active');
    })
});



const links = document.querySelectorAll('.menu__item');
const sections = document.querySelectorAll('.anchor');

function changeLinkState() {
  let index = sections.length;
  while(--index && window.scrollY + 600 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('menu__item_active'));
  links[index].classList.add('menu__item_active');
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);

const anchors = document.querySelectorAll('.menu__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/* MOBILE */

const burgerMenu = document.querySelector('.burger');
const header = document.querySelector('.header');



burgerMenu.addEventListener('click', () => {
  let menuItem = document.querySelectorAll('.menu__item');
  burgerMenu.classList.toggle('burger__active');
  header.classList.toggle('header__mobile');
})


