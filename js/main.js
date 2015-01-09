/* ---------------------------------------------------------------
  Template Name: Plegma
  Template URI: http://www.ergastiri.eu
  Description: ERgastiri - One Page CV template
  Author: Nicolas
  Author URI: http://www.ergastiri.eu
  License: GNU General Public License version 3.0
  License URI: http://www.gnu.org/licenses/gpl-3.0.html
  Version: 1.0
  
  1.  Template Script file value ( Bootstrap and template ) 

// ------------------------------------------------------------------*/
// Animating the scroll
//---------------------------------------------------------------------
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, "slow");
          return false;
        }
      }
    });

// ------------------------------------------------------------------*/
// Bootstrap 3 collapsed menu close on click
//---------------------------------------------------------------------
$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
})

// ------------------------------------------------------------------*/
// AJAX Contact Form mailer
//---------------------------------------------------------------------
jQuery(document).ready(function(){

    jQuery('#ajax-contact').submit( function() {

         // Get the messages div.
          var formMessages = $('#form-messages');

        $.ajax({
            url     : $(this).attr('action'),
            type    : $(this).attr('method'),
            data    : $(this).serialize(),
            success : function( data ) {
                        $(".success").show();
                        setTimeout(function() {
                          $(".success").hide();
                        }, 8000);
                      },
            error   : function(){
                        $(".errors").show();
                        setTimeout(function() {
                          $(".errors").hide();
                        }, 8000);
                      }
        });
        return false;
    });
});
