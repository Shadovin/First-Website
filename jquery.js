// Scroll to elemenet of menu, which you chosen.

$('.menu li').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 600)
})