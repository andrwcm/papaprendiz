
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
