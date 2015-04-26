/*  
	ThemeWorld
	Author: Nathan Garrett
*/
$(document).ready(function(){

	// Sticky footer to bottom of page 

     $(window).bind("load", function () {
    var footer = $(".footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});


// Animations
$(window).fadeThis({
    baseName:       "slide-",
    speed:          1000, // <a href="http://www.jqueryscript.net/animation/">Animation</a> speed in milliseconds.
    easing:         "swing", // Animation easing.
    offset:         15, // <a href="http://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a> offset, allowing to fire fading a little after or before the                               element appear.
    reverse:        true, // Make element disappear again when scrolled out, and fade again when scrolled in. 
    distance:       50, // Element distance to its emplacement, before animation.
    scrolledIn:     null, // Function to call when the element come in viewport. 
    scrolledOut:    null // Function to call when the element go out of the viewport. 
    });


   }); // end 
    