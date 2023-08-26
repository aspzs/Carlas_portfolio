$( document ).ready(function() {
    
	var isRight = false;

    $('.next-projects').click(function() {
    	if(isRight == false){
    		$('.year').css("transform","translateX(-100%");
        $('.year-border').css("transform","translateX(-100%");
    		$(this).css("transform", "rotate(180deg)")
    		isRight = true;
    	} else {
    		$('.year').css("transform","translateX(0%");
        $('.year-border').css("transform","translateX(0%");
    		$(this).css("transform", "rotate(0deg)")
    		isRight = false;
    	}
	});


    function mobileTitles() {
        displayyear = $('.year-titles').eq(mobileoffset).data( "year");
          
        $('.year-titles').each(function() {
            if($(this).data("year") == displayyear){
              $( this ).find('ul').css( "opacity","1" );

            } else {
              $( this ).find('ul').css( "opacity","0" );

            }
          });
    }



    var mobileoffset = 0;
    var yearnumber = $('.year').length - 2;
    var displayyear;

    
    
    if(yearnumber <= 4){
      $(".next-projects").hide();
    }

      $('.prev-projects-mob').css("display","none");

      $('.next-projects-mob').click(function() {
          if (mobileoffset < yearnumber) {
          mobileoffset += 1;
          $('.year:nth-child(1)').css("transform","translateX(-" + mobileoffset*107.5 + "%");
          $('.year:not(:first)').css("transform","translateX(-" + mobileoffset*108.5 + "%");
          $('.year-border:nth-child(1)').css("transform","translateX(-" + mobileoffset*107.5 + "%");
          $('.year-border:not(:first)').css("transform","translateX(-" + mobileoffset*108.5 + "%");
          $('.prev-projects-mob').css("display","inline-flex");
          mobileTitles();
        } else {
          mobileoffset += 1;
          $('.year:nth-child(1)').css("transform","translateX(-" + mobileoffset*107.5 + "%");
          $('.year:not(:first)').css("transform","translateX(-" + mobileoffset*108.5 + "%");
          $('.year-border:nth-child(1)').css("transform","translateX(-" + mobileoffset*107.5 + "%");
          $('.year-border:not(:first)').css("transform","translateX(-" + mobileoffset*108.5 + "%");
          $(this).css("display","none");
          mobileTitles();
        }
      });


      $('.prev-projects-mob').click(function() {
          if (mobileoffset <= 1) {
            mobileoffset -= 1;
            $('.year').css("transform","translateX(-" + mobileoffset*108.5 + "%");
            $('.year-border').css("transform","translateX(-" + mobileoffset*108.5 + "%");
            $(this).css("display","none");
            mobileTitles();

          } else {
            mobileoffset -= 1;
            $('.year').css("transform","translateX(-" + mobileoffset*108.5 + "%");
            $('.year-border').css("transform","translateX(-" + mobileoffset*108.5 + "%");
            $('.next-projects-mob').css("display","inline-flex");
            mobileTitles();
          }
        });


    
    // -------------------------------------------- SLIDER

     $('.pictures-slider').slick({
              infinite: true,
              speed: 200,
              fade: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,

            });

      $('.pictures-slider .slick-slide').click(function() {
        $('.pictures-slider').slick('slickGoTo', parseInt( $('.pictures-slider').slick('slickCurrentSlide'))+1);
      });

    
          $('.mobile-slider').slick({
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
          });




        var $status = $('.pagingInfo');
        var $slickElement = $('.mobile-slider');

        var $imagescount = parseInt($(".slick-slide").length/2);
        



        $('.pagingInfo').html("1/" + $imagescount);

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
        });


      // -------------------------------------------- Collapsible

          var coll = document.getElementsByClassName("collapsible");
          var i;
      

            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                this.classList.toggle("collapsed");
                var content = this.nextElementSibling;
                if (content.style.maxHeight){
                  content.style.maxHeight = null;
                } else {
                  content.style.maxHeight = content.scrollHeight + "px";
                } 
              });
          }




        var $status = $('.pagingInfo');
        var $slickElement = $('.pictures-slider');
        $currentSlide = 0;

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
        });


    


});


