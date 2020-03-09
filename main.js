// Animation of hamburger
const hamburger = document.querySelector('.hamburger');



const menu = () => {
    hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', menu);