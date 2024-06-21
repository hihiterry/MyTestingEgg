const clickTimesElement = document.getElementById('clickTimes');
const eggElement = document.getElementById('egg');
const eggImage = eggElement.querySelector('img');

let clickCount = 0;

eggElement.addEventListener('click', function() {
    clickCount++;
    clickTimesElement.textContent = clickCount;
    eggImage.classList.add('shrink');
    eggImage.addEventListener('animationend', function() {
        eggImage.classList.remove('shrink');
    }, { once: true });
});