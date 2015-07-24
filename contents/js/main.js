/*

	EXHO TEMPLATE  V1.0 BY SUPVIEW.BE
	
	
	01. ACCESS BUTTON SLIDE ANIMATION
	02. Flexslider ( testimonials )
	
	06. Form Settings
	
    
	10. Load the Whole Page

*/

var ajax_form = true;

$(document).ready(function () { // Document ready
    
    
    
/*-----------------------------------------------------------------------------------*/
    /*	01. ACCESS BUTTON SLIDE ANIMATION
/*-----------------------------------------------------------------------------------*/

    
    $('#transitionbutton').click(function () {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
        return false;
//        alert("I am an alert box!");
    });

    $(function() {
    $(".rslides").responsiveSlides();
  });
    
    
    
    /* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".backgroundImage").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();
    
    
    
/*-----------------------------------------------------------------------------------*/
    /*	02. FLEXSLIDER - TESTIMONIAL
/*-----------------------------------------------------------------------------------*/


    $('#slider1').flexslider({
        animation: "fade",
        directionNav: false,
        controlNav: false,
        smoothHeight: true,
        animationLoop: true,
        slideshowSpeed: 3000,
        slideToStart: 0,
    });

    $('#slider2').flexslider({
        animation: "slide",
        directionNav: true,
        controlNav: false,
        smoothHeight: true,
        animationLoop: true,
        sync: "#slider1",
        slideshowSpeed: 3000,
        slideToStart: 0,
    });


/*-----------------------------------------------------------------------------------*/
    /*	06. FORM SENDER
/*-----------------------------------------------------------------------------------*/



    /* Form Submission */
    $('form').submit(function () {

        var form_data = $(this).serialize();

        if (validateEmail($('input[name=email]').attr('value'))) {

            if (typeof ajax_form !== "undefined" && ajax_form === true) {

                $.post($(this).attr('action'), form_data, function (data) {
                    $('form').show('slow', function () {
                        $(this).after('<div class="clear"></div> <p class="msg-ok">' + data + '</p>');
                    });
                    $('.spam').hide();
                    $('.msg-ok').delay(100).effect("pulsate", {
                        times: 1
                    }, 1000).hide();
                });

                return false;

            }

        } else {
            $('p.spam').text('Please enter a valid e-mail').effect("pulsate", {
                times: 3
            }, 1000);
            return false;
        }

    });


    /* Validate E-Mail */

    function validateEmail(email) {
        // http://stackoverflow.com/a/46181/11236

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



}); /* END OF Document Ready */

/*-----------------------------------------------------------------------------------*/
/*	10. Load the Whole Page
/*-----------------------------------------------------------------------------------*/



$(window).load(function () {
    // will first fade out the loading animation
    jQuery("#loading-animation").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(600).fadeOut("slow");



});