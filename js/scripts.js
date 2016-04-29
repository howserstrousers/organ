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

    $(".spg").click(function(){
    	$(".s1").toggle();
    });

     $(".geogif").click(function(){
        $(".geo1").toggle();
    });

    $(".formg").click(function(){
        $(".formg1").toggle();
    });

    $(".feelg").click(function(){
        $(".feelg1").toggle();
    });

    $(".greeng").click(function(){
        $(".greeng1").toggle();
    });

    $(".redg").click(function(){
        $(".redg1").toggle();
    });

    $(".machineryg").click(function(){
        $(".machineryg1").toggle();
    });

    $(".lightg").click(function(){
        $(".lightg1").toggle();
    });

    $(".natureg").click(function(){
        $(".natureg1").toggle();
    });

   $(".sportg").click(function(){
        $(".sportg1").toggle();
    });

    $(".surfingg").click(function(){
        $(".surfingg1").toggle();
    });





//howto toggle
$(".howto").click(function(){
        $(".panelCon").toggle();
    });

// COUNTERS

//fashion
var counter2;
$(document).ready(function() {

        $("#gdLeft, #gdRight").click(function(){
            counter2 = parseInt($("#gdL").val());
            counter2++;
            $("#gdL").val(counter2);
            $("#gdCount").text(counter2);
        });

});



var counter2;
$(document).ready(function() {

        $("#fashionLeft, #fashionRight").click(function(){
            counter2 = parseInt($("#fashionL").val());
            counter2++;
            $("#fashionL").val(counter2);
            $("#fCount").text(counter2);
        });

});

var counter2;
$(document).ready(function() {

        $("#spaceLeft, #spaceRight").click(function(){
            counter2 = parseInt($("#spaceL").val());
            counter2++;
            $("#spaceL").val(counter2);
            $("#spaceCount").text(counter2);
        });

});

var counter2;
$(document).ready(function() {

        $("#geometryLeft, #geometryRight").click(function(){
            counter2 = parseInt($("#geometryL").val());
            counter2++;
            $("#geometryL").val(counter2);
            $("#geometryCount").text(counter2);
        });

});

var counter2;
$(document).ready(function() {

        $("#greenLeft, #greenRight").click(function(){
            counter2 = parseInt($("#greenL").val());
            counter2++;
            $("#greenL").val(counter2);
            $("#greenCount").text(counter2);
        });

});


var counter2;
$(document).ready(function() {

        $("#orangeLeft, #orangeRight").click(function(){
            counter2 = parseInt($("#orangeL").val());
            counter2++;
            $("#orangeL").val(counter2);
            $("#orangeCount").text(counter2);
        });

});

var counter2;
$(document).ready(function() {

        $("#feelLeft, #feelRight").click(function(){
            counter2 = parseInt($("#feelL").val());
            counter2++;
            $("#feelL").val(counter2);
            $("#feelCount").text(counter2);
        });

});


var counter2;
$(document).ready(function() {

        $("#formLeft, #formRight").click(function(){
            counter2 = parseInt($("#formL").val());
            counter2++;
            $("#formL").val(counter2);
            $("#formCount").text(counter2);
        });

});


var counter2;
$(document).ready(function() {

        $("#machineryLeft, #machineryRight").click(function(){
            counter2 = parseInt($("#machineryL").val());
            counter2++;
            $("#machineryL").val(counter2);
            $("#machineryCount").text(counter2);
        });

});

var counter2;
$(document).ready(function() {

        $("#peopleLeft, #peopleRight").click(function(){
            counter2 = parseInt($("#peopleL").val());
            counter2++;
            $("#peopleL").val(counter2);
            $("#peopleCount").text(counter2);
        });

});

var counter2;
$(document).ready(function() {

        $("#lightLeft, #lightRight").click(function(){
            counter2 = parseInt($("#lightL").val());
            counter2++;
            $("#lightL").val(counter2);
            $("#lightCount").text(counter2);
        });

});

var counter2;
$(document).ready(function() {

        $("#natureLeft, #natureRight").click(function(){
            counter2 = parseInt($("#natureL").val());
            counter2++;
            $("#natureL").val(counter2);
            $("#natureCount").text(counter2);
        });

});

var counter2;
$(document).ready(function() {

        $("#sportLeft, #sportRight").click(function(){
            counter2 = parseInt($("#sportL").val());
            counter2++;
            $("#sportL").val(counter2);
            $("#sportCount").text(counter2);
        });

});

var counter2;
$(document).ready(function() {

        $("#surfingLeft, #surfingRight").click(function(){
            counter2 = parseInt($("#surfingL").val());
            counter2++;
            $("#surfingL").val(counter2);
            $("#surfingCount").text(counter2);
        });

});



//end fashion counter
	
	
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
    $(".panelCon").css('bottom',$(window).scrollTop()*-1.2); //# that controls speed of inverse scroll
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
    $(".wrapper").height(winHeight);
    $(".back").height(winHeight*$(".wrapper").length);
});

window.addEventListener('resize', function (event) {
    $(".back").height($(window).innerHeight());
});

$(window).on('scroll',function(){
    $(".bg").css('bottom',$(window).scrollTop()*-1.1);
});





















