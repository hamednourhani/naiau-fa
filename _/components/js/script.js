$(document).ready(function (){
                
    $('a#tab-nav').on('click', function(event) {
        var target = $(this.href.pathname);
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});