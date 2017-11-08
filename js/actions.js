$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1300);
        return false;
      }
    }
  });
});


    $('.icossTest > span').click(function(){
        $("span .icoPhone").removeClass("icoPhone"),
        $("span .ico").addClass("icoColor");
    });


    $( "header h1" ).hover(
      function() {
        $( "header h1 span.logo div.letterO" ).addClass( "rotate" );
      }, function() {
        $( "header h1 span.logo div.letterO" ).removeClass( "rotate" );
      }
    );


    //acciones precarga
    $(window).load(function() {
          $("#preloader").delay(2900).fadeOut("slow", function(){
       });
    })
