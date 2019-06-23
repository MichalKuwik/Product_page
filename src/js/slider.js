
const slideList = ['img/tv-left.png','img/tv-left-2.png','img/tv-left-3.png']

//Get Dom el
const image = document.querySelector('img.slider');

let i = 0;

function changeImg(){
  image.setAttribute('src', slideList[i]);
 
    if(i < slideList.length - 1){
      i++;
    }else{
      i = 0;
    } 
      setTimeout(changeImg, 5000);
}

window.onload = changeImg;

