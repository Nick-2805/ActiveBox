$(function() {
//  При скроле страници создаем переменную, в которой сохраняем высоту блока intro
    var header = $("#header"),
        introH = $("#intro").innerHeight(); // Придаем значение высотты блога intro
   var scrollOffset = $(window).scrollTop();// Первоначальное значение при загрузке страницы, которое отправляется в функцию ниже

    /*Fixed Header*/
    checkScroll(scrollOffset);// Функция присвоения класса fixed со значением scrollOffset

   $(window).on("scroll", function() {

//При скроле окна создаем функцию обновляем значение переменной.
       scrollOffset = $(this).scrollTop();// переменной присваевается значение при скролле, которое также передается в функцию присвоения класса
       checkScroll(scrollOffset);

   });

    function checkScroll(scrollOffset) {//функция присвоения класса fixed

       if( scrollOffset >= introH ) {
           header.addClass("fixed");
       } else {
           header.removeClass("fixed");
       }
    }


    /*Smooth scroll*/
    //При "click" на атрибут data-scroll  будем делать...
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();//Отменяем стандартное поведение ссылки

        var $this = $(this),/*Значение клика для ссылки в переменной*/
            blockId =$(this).data('scroll'),//Сохраняем в переменную значение атрибута data значение scroll
            blockOffset = $(blockId).offset().top;//Получаем позицию верха страницы для blockId и сохраняем его в переменной
        $("#nav a").removeClass("active");

        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /*Menu nav toggle*/
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");/*Добавляем класс active для элементов с id=nav*/
    });
    
     /*Collapse*/
     $("[data-collapse]").on("click", function(event){
         event.preventDefault();
         
         var $this = $(this),
              blockId =$(this).data('collapse');
         
         $(this).toggleClass("active");
         
     });
    /*Slider*/
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
});
