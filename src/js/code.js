const burgerMenu = document.querySelector('.hamburger-menu');
const burgerItems = document.querySelectorAll('.line');
const naviMenu = document.querySelector('.nav-list');

burgerMenu.addEventListener('click',function(){
  burgerItems.forEach(function(item){
    item.classList.toggle('active');
  });

  naviMenu.classList.toggle('show');  
  
});

