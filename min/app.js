function slide1(){$(".advert-1 .left, .vid-container").removeClass("door-left"),$(".advert-1 .right").removeClass("door-right")}function slide2(){$(".advert-1 .left, .vid-container").addClass("door-left"),$(".advert-1 .right").addClass("door-right"),$(".logo").removeClass("fade-up"),$(".product-video").removeClass("slide-in-left").get(0).pause(),$(".product-video").get(0).currentTime=0,$(".bundlar").removeClass("slide-in-left"),$(".hasAlt").removeClass("alt"),$(".list").removeClass("slide-in-right")}function slide3(){$(".hasAlt").addClass("alt"),$(".logo").addClass("fade-up"),$(".product-video").addClass("slide-in-left").get(0).play(),$(".bundlar").addClass("slide-in-left"),$(".list").addClass("slide-in-right")}var htracker=new headtrackr.Tracker({debug:document.getElementById("inputCanvas")});htracker.init(document.getElementById("inputVideo"),document.getElementById("inputCanvas")),htracker.start(),window.location.hash.length&&$("body").addClass(window.location.hash.substring(1)),$("#inputVideo").height($(document).height()),$(".product-video, .list").height($(document).height()-302),$(".list li").css("line-height",($(document).height()-302-25)/5+"px");var current=1;document.addEventListener("facetrackingEvent",function(e){distance=e.width>90?3:parseInt(e.width/30),console.log(e.width,distance),$("#threshold").html(distance),current!=distance&&(1==distance?(3==current&&slide2(),slide1()):2==distance?slide2():3==distance&&(1==current&&slide2(),slide3()),current=distance)});