//слаидер главное секции по стрелкам

let imgs = document.querySelectorAll('.img');
let currentImg = 0;
let isEnabled = true;
let sqs = document.querySelectorAll('.sq');

function changeCurrentImg(n) {
  currentImg = (n + imgs.length) % imgs.length;
}

function hideImg(direction) {
  isEnabled = false;
  imgs[currentImg].classList.add(direction);
  imgs[currentImg].addEventListener('animationend', function() {
    this.classList.remove('active', direction);
  });
}

function showImg(direction) {
  imgs[currentImg].classList.add('next', direction);
  imgs[currentImg].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

//слаидер главной секции по квадратам
let activeSq = n => {
  for(sq of sqs) {
    sq.classList.remote('active');
  }
  sqs[n].classList.add('active');
}



function previousImg(n) {
  hideImg('to-right');
  changeCurrentImg(n - 1);
  showImg('from-left');
}

function nextImg(n) {
  hideImg('to-left');
  changeCurrentImg(n + 1);
  showImg('from-right');
}

document.querySelector('.slider_arrow.left').addEventListener('click',function(){
  if (isEnabled){
    previousImg(currentImg);
  }
});

document.querySelector('.slider_arrow.right').addEventListener('click',function(){
  if (isEnabled){
    nextImg(currentImg);
  }
});



//слаидер главное секции по гориз скролу


const swipedetect = (el) => {

  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;

  
  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 150;
  let restraint = 100;
  let allowedTime = 400;

  surface.addEventListener('mousedown', function(e){
  
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener('mouseup', function(e){
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold  && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (isEnabled){
            previousImg(currentImg);
          }
        } else {
          if (isEnabled){
            nextImg(currentImg);
          }
        }
      }
    }

    e.preventDefault();
  });
}

let el = document.querySelector('.slider_container');
swipedetect(el);





//прогрес бар видео видео секции

const progress = document.querySelector('.progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
});



//прогрес бар звук видео секции

const volume_progress = document.querySelector('.volume_progress');
  
volume_progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
});



//галерея секция
const pictureInnerContainer = document.querySelector('.picture_inner_container');

const gallerySrc = new Array(15).fill('')
  .map((item, index) => item = `assets/img/galery/galery${index + 1}.jpg`)
  .sort(() => Math.random() - 0.5)
  .forEach(item => {
    const img = document.createElement('img');
    img.classList.add('galery_item')
    img.src = item;
    img.alt = `galery`;
    pictureInnerContainer.append(img);
  })

