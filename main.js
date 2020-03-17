// Animation of hamburger
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const menu = () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active_navigation');
}
hamburger.addEventListener('click', menu);

// $('.menu li').on('click', function () {
//     const goToSection = "[data-section=" + $(this).attr('class') + "]";
//     $('body, html').animate({
//         scrollTop: $(goToSection).offset().top
//     }, 600)
// })
const liList = document.querySelectorAll('#item');