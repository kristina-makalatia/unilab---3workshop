$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 800) {
            $(".navigation-fixed").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navigation-fixed").removeClass("active");
        }
    });
});


document.getElementById('buttonSend').addEventListener('click', function() {
    alert('You pressed enter');
});