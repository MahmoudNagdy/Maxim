$(function () {

    $('.carousel').carousel({
        interval: 4000
    });

    $("html").niceScroll();

    $(".navbar-default .navbar-nav li a").click(function (e) {

        e.preventDefault();

        $("body, html").animate({
            scrollTop: $($(this).data("scroll")).offset().top + 1
        }, 600);

        $(this).addClass("active").parent().siblings().find("a").removeClass("active");

    });

    $(".features ul li a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active-li").siblings().removeClass("active-li");

        $("#" + $(this).parent().data("img")).addClass("active-img").siblings().removeClass("active-img");

    });
    
    $(".hero .start").click(function (e) {
        
        e.preventDefault();
        
        $("body, html").animate({
            
            scrollTop: $(".about").offset().top + 1
            
        }, 600);
        
    });
        


    $(window).scroll(function () {

        $(".block").each(function () {

            if ($(window).scrollTop() >= $(this).offset().top) {

                $($(this).data("change")).addClass("active").parent().siblings().find("a").removeClass("active");

            }

        });
        
        if($(this).scrollTop() > 500) {
            
            $(".scroll-arrow i").fadeIn(600);
            
        } else{
            
            $(".scroll-arrow i").fadeOut(600);
            
        }

    });
    
    $(".scroll-arrow i").click(function () {
       
        $("body, html").animate({
            scrollTop: 0
        }, 600);
        
    });
    
    $(".over-loading .sk-cube-grid").delay(3000).fadeOut(1000, function () {
            
        $("body").css({overflow: "auto"});
        
        $(this).parent().fadeOut(1000, function () {
            
            $(this).remove();
            
        });
        
    });

    $(".portfolio li a").click(function (e) {

        e.preventDefault();

        $(this).addClass("show").parent().siblings().find("a").removeClass("show");
        
        $($(this).data("call")).fadeIn(600).siblings("div").fadeOut(600);

    });

});