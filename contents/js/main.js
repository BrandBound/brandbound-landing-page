/*
	EXHO TEMPLATE  V1.0 BY SUPVIEW.BE
*/

var ajax_form = true;

$(document).ready(function () { // Document ready
    
 /*-----------------------------------------------------------------------------------*/
    /*	00. CHANGE HEADER COLOUR (DARK OVERLAY)
/*-----------------------------------------------------------------------------------*/   
   
    $(window).scroll(function(){
        var top=$(window).scrollTop()
        console.log(top)
        /*put your color in background color */
        if(top>2360){ $('#header').css('background-color','#d3d3d3'); }
        else{ $('#header').css('background-color','Transparent'); }
    });
    
/*-----------------------------------------------------------------------------------*/
    /*	01. Go-Down and ACCESS BUTTON SLIDE ANIMATION
/*-----------------------------------------------------------------------------------*/

    
    $('#transitionbutton').click(function () {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
        return false;
//        alert("I am an alert box!");
    });
    
    $("#godown").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutus").offset().top
        }, 500);
});
    
    
    /*-----------------------------------------------------------------------------------*/
    /*	02. SLIDER
/*-----------------------------------------------------------------------------------*/

    $(function() {
    $(".rslides").responsiveSlides();
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