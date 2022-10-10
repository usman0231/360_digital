// Prev Next Button of Portfolio
$(document).ready(function() {
    setScrollablePortfolio();
    $(window).on('resize', function() {
        setScrollablePortfolio();
    });
    
    function setScrollablePortfolio() {
		var tabsWidthTotal = $('.scrollable-tabs').find('ul').get(0).scrollWidth;
		var tabsWidth = $('.scrollable-tabs').find('ul').width();
        if (tabsWidthTotal > tabsWidth) {
			$('.scrollable-tabs').find('ul').addClass('scrollable-tabs-ul');
			$('.scrollable-tabs').find('ul').attr('id', 'scrollable-tabs-ul');
		} else {
            $('.scrollable-tabs').find('ul').removeClass('scrollable-tabs-ul');
			$('.scrollable-tabs').find('ul').attr('id', '');
        }
    }  
});

$(".next-portfolio").click(function() {
  	nextPortTab();
  	$(".scrollable-tabs-ul").scroll(function() {
  		checkPortPos();
  	});
});

$(".prev-portfolio").click(function() {
  	prevPortTab();
  	$(".scrollable-tabs-ul").scroll(function() {
  		checkPortPos();
  	});
});

function nextPortTab() {
	var scrollerWidth = $('.scrollable-tabs').width() - 120;
	document.getElementById('scrollable-tabs-ul').scrollBy(scrollerWidth, 0);
}

function prevPortTab() {
	var scrollerWidth = $('.scrollable-tabs').width() - 120;
	document.getElementById('scrollable-tabs-ul').scrollBy(-scrollerWidth, 0);
}

function checkPortPos() {
	nextCheck();
  	prevCheck();
}

function prevCheck() {
	var totalWidthTab = $('.scrollable-tabs-ul').get(0).scrollWidth - $('.scrollable-tabs-ul').width();
	var scrollLeftValue = $('.scrollable-tabs-ul').scrollLeft();
	if (scrollLeftValue == 0) {
		$(".prev-portfolio").css('visibility','hidden');
		$(".prev-portfolio").css('opacity','0');
	}
	else {
		$(".prev-portfolio").css('visibility','visible');
		$(".prev-portfolio").css('opacity','1');
	}
}

function nextCheck() {
	var totalWidthTab = $('.scrollable-tabs-ul').get(0).scrollWidth - $('.scrollable-tabs-ul').width();
	var scrollLeftValue = $('.scrollable-tabs-ul').scrollLeft();
	if (scrollLeftValue >= totalWidthTab) {
		$(".next-portfolio").css('visibility','hidden');
		$(".next-portfolio").css('opacity','0');
	}
	else {
		$(".next-portfolio").css('visibility','visible');
		$(".next-portfolio").css('opacity','1');
	}
}
    
// Owl Carousel Slider
$(window).on('load', function() {
    $('.companies-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 6
            }
        }
    });
    $('.services-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    
    // Sticky Scroll
$(function() {
    var headerHeight = $('.header').height();
    $(".fixed-scroll-area").stick_in_parent({
        offset_top: headerHeight
    })
});

$('.fixed-scroll-area a[href*="#"]').on("click", function(e) {
    e.preventDefault();
    var t = $(this).attr("href");
    var headerHeight = $('.header').height();
    return $("html, body").stop().animate({
        scrollTop: $(t).offset().top - headerHeight
    }, 600), !1
})

$(window).scroll(function() {
    var halfwindowHeight = $(window).height()/2;
    var t = $(window).scrollTop() + halfwindowHeight;
    $(".fixed-right-item").each(function(e) {
        $(this).offset().top <= t && (
            $(".fixed-scroll-area a.active").removeClass("active"), 
            $(".fixed-scroll-area a").eq(e).addClass("active")
        )
    })
})


     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 2500);
            return false;
        });
        
        /*$('#back-to-top').tooltip('show');*/

});




// Pricing
$('.price_tab').click(function(e) {

  e.preventDefault();
  // e.stopPropagation();
  var getVal = $(this).attr('data-filter');
  if(getVal == "logo")
  {
      $('.price__tab').css('display', 'none');
      $('#tab1').css('display', 'block');
  } else if(getVal == "Branding")
  {
      $('.price__tab').css('display', 'none');
      $('#tab2').css('display', 'block');
  }
  if(getVal == "Web")
  {
      $('.price__tab').css('display', 'none');
      $('#tab3').css('display', 'block');
  }
  if(getVal == "Video")
  {
      $('.price__tab').css('display', 'none');
      $('#tab4').css('display', 'block');
  }

});