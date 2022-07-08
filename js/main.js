const carouselArry = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const carouselImg = document.querySelector('.carousel-img'); 

for ( let i = 0; i < carouselArry.length; i++){
    carouselImg.innerHTML += `<div class="item"><img class="img-item" src="${carouselArry[i]}"></div>`;
}

let visibile = 0;

const imgList = document.getElementsByClassName('item');

imgList[visibile].classList.add('show');

const up = document.querySelector('.up');

up.addEventListener('click',
    function(){
        imgList[visibile].classList.remove('show')
        visibile++;
        imgList[visibile].classList.add('show')
    }
);