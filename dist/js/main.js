jQuery(function($){


  $("#mobileNav").mmenu({
               "extensions": [
                 "effect-panels-zoom",
                  "theme-dark",
                  "fullscreen"
               ],
               offCanvas	: {
          			zposition 	: "front",
          			position 	: "bottom"
          		},
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield",
                        "close"
                     ]
                  }
      ]
  });

  $("#catNav").mmenu({
               "extensions": [
                 "effect-panels-zoom",
                  "fullscreen"
               ],
               offCanvas	: {
                zposition 	: "front",
                position 	: "bottom"
              },
              "navbar": {
                "title" : "Categories Navigation"
              },
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "close"
                     ]
                  }
      ]
  });


  /*var categories_var_height = $(".products__categories-list").outerHeight()/2;

  $(".products__wrapper").css("min-height", categories_var_height);*/

$(".products__categories-nav").mmenu({

        offCanvas: false,
        navbar:
          {
            "title": "Categories"
          }



  });



  $('.main__slider').flexslider({
      animation: "slide",
      controlNav: true
  });

  $(".header__info-searchbox input[type='submit']").val("");

  /* Adding the space of the submenu when this is displayed */

  if($('.navigation > div > ul > li.current-menu-item').hasClass('menu-item-has-children')){

      $('.navigation').css('margin-bottom', $('.navigation .sub-menu').outerHeight());

  }

  $('.navigation > div > ul > li a').each(function(index){
    console.log(index);
    if($("." + index).text() == "Fuel"){
      $("." + index).parent().addClass("keepActive");
    }
  });


});
