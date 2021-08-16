
// Перемещение персонажа -------------------------------------------------

let step = 0;

const arrayX = [341, 267, 180, 101, 111, 133, 205, 167, 129, 189, 872];
const arrayY = [469, 512, 530, 502, 436, 382, 345, 274, 221, 189, 160];

const diff_Y = -60;

let movePlayer = () => {
    let girl = document.querySelector('.girl');

    girl.style.top = arrayY[step] + diff_Y + 'px';
    girl.style.left = arrayX[step] + 'px';

    step += 1;
}

// Окно рейтинга ---------------------------------------------------------

let showRating = () => {
    let popupCont = document.querySelector('.popup-rating-container');
    let popup = document.querySelector('.popup-rating');

    popupCont.style.height = '100%';
    popup.style.top = '82px';

}

let hideRating = () => {
    let popupCont = document.querySelector('.popup-rating-container');
    let popup = document.querySelector('.popup-rating');

    hideBackground = () => {
        return (popupCont.style.height = '0');
    }

    popup.style.top = '-455px';
    setTimeout(hideBackground, 1000);
}

// Слайдер ---------------------------------------------------------------

let position = 0;

let sliderNext = () => {
    let players = document.querySelector('.players');
    position -= 59;

    if (position < -354) {
        position = 0;
    }

    players.style.left = position + 'px';
}

let sliderPrew = () => {
    let players = document.querySelector('.players');
    position += 59;

    if (position > 0) {
        position = -354;
    }

    players.style.left = position + 'px';
}