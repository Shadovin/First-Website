// Animation of hamburger
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const menu = () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active_navigation');
}
hamburger.addEventListener('click', menu);
// Animation of popup
const button_send = document.querySelector(".send_button");
const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".close_button");

const show_popup = () => {
    popup.classList.toggle('popup_active');
    document.body.style.opacity('0.1');

}
const close_button = () => {
    popup.classList.remove('popup_active');

}
button_send.addEventListener('click', show_popup);
popup_close.addEventListener('click', close_button);