document.addEventListener("DOMContentLoaded", function() {
    // Variables
    var mobile_menu = document.getElementById("mobile-menu");
    var mobile_trigger = document.getElementById("mobile-menu-trigger");

    // On the trigger, if it contains the class, we remove it and add it, if it doesn't, we add it
    mobile_trigger.addEventListener('click', function() {
        console.log("Clicked");
        if (mobile_menu.classList.contains('is-active')) {
            this.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
        } else {
            mobile_menu.classList.add('is-active');
            this.classList.add('is-active');
        }
    });
});