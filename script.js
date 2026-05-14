const slides = document.querySelector('.slides');

const totalSlides = document.querySelectorAll('.slide').length;

let index = 0;

function cambiarSlide(){

    index++;

    if(index >= totalSlides){
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(cambiarSlide, 3000);