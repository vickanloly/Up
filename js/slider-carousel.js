const sliderContainer = document.querySelector('.slider-carousel-container');
const buttonPrev = document.querySelector('#left');
const buttonNext = document.querySelector('#right');
let offset = 0;

buttonPrev.addEventListener('click', () => {
    offset += 220;

    if (offset > 0) {
        offset = -880;
    }

    sliderContainer.style.transform = `translateX(${offset + 'px'})`;
});

buttonNext.addEventListener('click', () => {
    offset -= 220;

    if (offset < -880) {
        offset = 0;
    }

    sliderContainer.style.transform = `translateX(${offset + 'px'})`;
});
