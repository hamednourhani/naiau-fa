$(document).ready(function (){
                
   $("#slides").slidesjs({
        width: 800 ,
        height: 400
      });

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