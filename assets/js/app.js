$( document ).ready(function() {
    //about
    $(".about-go").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".close-about").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//portfolio
	$(".portfolio-go").on('click', function () {
		$("body").addClass("portfolio-on");
	});
	$(".close-portfolio").on('click', function () {
		$("body").removeClass("portfolio-on");
    });

 
    
    $('.slider-skills').slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrow: false,
              }
            },
            {
              breakpoint: 767,
              settings: {
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrow: false,
              }
            }
          ]
    });

    

});





