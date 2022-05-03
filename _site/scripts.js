$(document).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle()
    });
});

// animate on scroll activate 
AOS.init({
    duration: 500
});