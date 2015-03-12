//// HEADTRACKING SET UP ////
var htracker = new headtrackr.Tracker({debug:document.getElementById('inputCanvas')});
htracker.init(document.getElementById('inputVideo'),document.getElementById('inputCanvas'));
htracker.start();

//// DEBUGGING CLASS ////
if(window.location.hash.length){
	$('body').addClass(window.location.hash.substring(1));
}

//// RESIZE ELEMENTS ////
$('#inputVideo').height($(document).height());
$('.product-video, .list').height($(document).height()-302);
$('.list li').css('line-height',(($(document).height()-302)-25)/5+'px');


//// FACE MOVEMENT EVENT ////
var current = 1;
document.addEventListener('facetrackingEvent',
	function (e) {
		distance = e.width > 90 ? 3 : parseInt(e.width / 30);
		console.log(e.width,distance);
		$('#threshold').html(distance);
		
		if(current!=distance){
			if(distance==1){
				if(current==3){
					slide2();
				}
				slide1();
			} else if(distance==2){
				slide2();
			} else if(distance==3){
				if(current==1){
					slide2();
				}
				slide3();
			}
			current = distance;
		}
	}
);

function slide1(){
	$('.advert-1 .left, .vid-container').removeClass('door-left');
	$('.advert-1 .right').removeClass('door-right');
}

function slide2(){
	$('.advert-1 .left, .vid-container').addClass('door-left');
	$('.advert-1 .right').addClass('door-right');
	$('.logo').removeClass('fade-up');
	$('.product-video').removeClass('slide-in-left').get(0).pause();
	$('.product-video').get(0).currentTime = 0;
	$('.bundlar').removeClass('slide-in-left');
	$('.hasAlt').removeClass('alt');
	$('.list').removeClass('slide-in-right');
}

function slide3(){
	$('.hasAlt').addClass('alt');
	$('.logo').addClass('fade-up');
	$('.product-video').addClass('slide-in-left').get(0).play();
	$('.bundlar').addClass('slide-in-left');
	$('.list').addClass('slide-in-right');
}