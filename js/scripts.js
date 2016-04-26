$(document).ready(function(){

//build toggle
	$(".bon").click(function(){
        $(".build").toggle();
    });

//gif togggle
	$(".peopleg").click(function(){
        $(".peopleg1").toggle();
    });

    $(".gdg").click(function(){
    	$(".gd1").toggle();
    });

    $(".fg").click(function(){
    	$(".fg1").toggle();
    });

//howto toggle
$(".howto").click(function(){
        $(".panelCon").toggle();
    });
	
	
/********** SLIDER STUFF **********/
	$('#slider5 .slider').prrpleSlider({
		windowsize:				true,
		transition: 			'slide',
		loop:					true,
		loopSeamless:			true
	});
	$('#slider5 .slider').swipe({
		swipeLeft:function(){
			$('#slider5 .slider').prrpleSliderRight();
		},
		swipeRight:function(){
			$('#slider5 .slider').prrpleSliderLeft();
		},
		threshold:100,
		allowPageScroll:'vertical',
		excludedElements: ''
	});


});

var resize;
$(window).resize(function(){
	clearTimeout(resize);
	resize = setTimeout(function(){
		$('.slider').each(function(){
			$(this).prrpleSliderResize();
		});
	},100);
});


//INVERSE SCROLL

	$("body").height($(".panel").length);

//window.addEventListener('resize', function (event) {
//$(".panel").height($(window).innerHeight());
//});
	
	$(window).on('scroll',function(){
    $(".panelCon").css('bottom',$(window).scrollTop()*-.8); //# that controls speed of inverse scroll
});

//BUILD INVERSE SCROLL
$("body").height($(".build").length);

$(window).on('scroll',function(){
    $(".build").css('bottom',$(window).scrollTop()*-2); //# that controls speed of inverse scroll
});


//H1 COLOR

$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.panel h1').offset().top; // pixels to the top of div1
        var ht = $('.panel h1').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht){
            $('.panel h1').toggleClass('red');
        }
    });
});


//backgrounds
var winHeight = $(window).innerHeight();
$(document).ready(function () {
    $(".back").height(winHeight);
    $(".back").height(winHeight*$(".wrapper").length);
});

window.addEventListener('resize', function (event) {
    $(".back").height($(window).innerHeight());
});

$(window).on('scroll',function(){
    $(".bg").css('bottom',$(window).scrollTop()*-1);
});























