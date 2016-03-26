var portfolioPreview = ["images/portfolio/witter_ad.jpg",
    "images/portfolio/market_report_2016.jpg",
    "images/portfolio/on_fitness.png",
    "images/portfolio/ticketprintingposter.png",
    "images/portfolio/collections_mag_fall2015.jpg",
    "images/portfolio/mac_trends.png",
    "images/portfolio/soaker_package1.png"
];

var spot = 0;

var mrPagesLeft;

var colPagesLeft;

var macPagesLeft;

$(document).ready(function() {
    
    $(".grid-item").mouseenter(function() {
        $(this).siblings().addClass("blur");
        if ($(".slideDown").css("float")=="none"){
            $(".slideDown").addClass("noShow");
        }else{
        $(".slideDown").fadeIn("slow");
    }
    });
    $(".grid-item").mouseleave(function() {
        $(this).siblings().removeClass("blur");
    });
    

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


    /*If page scrolls show navigation bar, if not hide it*/
    $(document).scroll(function() {
        if ($("body").scrollTop()) {

            $(".navbar,.navbar-brand").fadeIn("slow", function() {
            $(".navbar").addClass("scrollNav");
            
            });

        } else {
            
             $(".navbar-collapse").removeClass("in");
        }
    });
    
 /*Fills portfolio spots from array into bg img*/
     while ($(".port").length > 0) {
        if ($(".spot").hasClass("multiPage")) {
            $(".spot").eq(spot).prepend("<a href=" + portfolioPreview[
                    spot] + " data-lightbox='image" + spot + spot +
                "'>").addClass(
                "full").removeClass("port").css("background-image","url(" + portfolioPreview[spot] + ")");
            spot++;
        } else {
            $(".spot").eq(spot).prepend("<a href=" + portfolioPreview[
                    spot] + " data-lightbox='image" + spot +
                "'>").removeClass("port").css("background-image","url(" + portfolioPreview[spot] + ")");
            spot++;
        }
    }

    for(mrPagesLeft = 2; mrPagesLeft < 25; mrPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/mr/mr"+mrPagesLeft+".jpg' data-lightbox='image11' </a>")
    }

    for(macPagesLeft = 2; macPagesLeft < 8; macPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/mac/"+macPagesLeft+".png' data-lightbox='image55' </a>")
    }

    for(colPagesLeft = 2; colPagesLeft < 45; colPagesLeft++){
        $(".additionalPages").append("<a href='images/portfolio/col/col_Page_"+colPagesLeft+".jpg' data-lightbox='image44' </a>")
    }
  /*  $(function() {
        // Init Controller
        var ctrl = new ScrollMagic.Controller({
            globalSceneOptions:{
                triggerHook:'onEnter', duration: "200%"
            }
        });
    

$("#portfolioBar").each(function(){

    new ScrollMagic.Scene({
        triggerElement: ".hero"
    })
    .setTween(".hero", {y:"80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(ctrl);
});

$("#portfolio").each(function(){

    new ScrollMagic.Scene({
        triggerElement: "#home"
    })
    .setTween("#home", {y:"80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(ctrl);
});

});*/



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

    $('.grid').masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      // use element for option
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
});