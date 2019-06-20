//get DOM Elements
const burgerMenu = document.querySelector('.hamburger-menu');
const burgerItems = document.querySelectorAll('.line');
const naviMenu = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-link');
const icon = document.querySelector('.fas');

//ad event listener
burgerMenu.addEventListener('click',function(){
  burgerItems.forEach(function(item){
    item.classList.toggle('active');
   
  });

  naviMenu.classList.toggle('show');
  
  navItems.forEach(function(ite){
    ite.classList.toggle('animOp');
  }) ;
 
  icon.classList.toggle('iconAnime');
  
  
});

