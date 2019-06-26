//get DOM Elements
const burgerMenu = document.querySelector('.hamburger-menu');
const burgerItems = document.querySelectorAll('.line');
const naviMenu = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-link');
const icon = document.querySelector('.fas');
const navigationItems = document.querySelectorAll('.nav-item');
const fontAwe = document.querySelectorAll('.nav-item i');

// 

let showMenu = false;

burgerMenu.addEventListener('click',toggleMenu);

function toggleMenu(){
  if(!showMenu){
    burgerItems.forEach(item=> item.classList.add('active'));
    naviMenu.classList.add('show');
    navItems.forEach(item=> item.classList.add('animOp'));
    icon.classList.add('iconAnime');

    showMenu = true;
  }else{
    burgerItems.forEach(item=> item.classList.remove('active'));
    naviMenu.classList.remove('show');
    navItems.forEach(item=> item.classList.remove('animOp'));
    icon.classList.remove('iconAnime');

    showMenu = false;
  }
}

navigationItems.forEach(itemNav => {
  itemNav.addEventListener('click',function(){
    naviMenu.classList.remove('show');
    burgerItems.forEach(burItem => {
      burItem.classList.remove('active');
    })
  })
})


//click button,add many to icon shop
const counter = document.querySelector('span.count');
let value = 0;
const addBtn = document.querySelector('.cta-add').addEventListener('click',() => {
  value++;
  counter.innerHTML = value;

});