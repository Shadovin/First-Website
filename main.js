// Animation of hamburger
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const menu = () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active_navigation');
}
hamburger.addEventListener('click', menu);