$(window).load(function() {
	$(".preloder").delay(1000).fadeOut("fast");
	$(".loder").delay(1000).fadeOut("fast");
});

$(function () {
  var link = $("#navbar a.dot");

  //   upper label id
  var id = $(this).attr("id");

  // Move to specific section when click on menu link
  link.on("click", function (e) {
    var target = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 40
      },
      // 600
    );
    

    //     upper label remove class
    $(".comman").removeClass("active");

    $(this).addClass("active");
    //    label add
    $("." + id).addClass("active");

    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on("scroll", function () {
    scrNav();
  });

  // scrNav function
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $("section").each(function () {
      var id = $(this).attr("id"),
        offset = $(this).offset().top -50,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass("active");
        $("#navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }


    });
  }






  // *************************************//
 // ********** barfiller *************** //
// *************************************//
$(document).ready(function(){
    $('#bar1').barfiller({barColor: "#FFB400",duration: 1500});
    $('#bar2').barfiller({barColor: "#FFB400",duration: 1500});
    $('#bar3').barfiller({barColor: "#FFB400",duration: 1500});
    $('#bar4').barfiller({barColor: "#FFB400",duration: 1500});
    $('#bar5').barfiller({barColor: "#FFB400",duration: 1500});
    $('#bar6').barfiller({barColor: "#FFB400",duration: 1500});
    $('#bar7').barfiller({barColor: "#FFB400",duration: 1500});
    $('#bar8').barfiller({barColor: "#FFB400",duration: 1500});
    $('#bar9').barfiller({barColor: "#FFB400",duration: 1500});

    new Typed('#typed',{
        strings : ['<span class = "yellow"> Font-End </span> Developer'],
        typeSpeed : 200,
        delaySpeed : 90,
        loop : true
      });



  // **************************************************//
 // *************** static background *************** //
// **************************************************//
$('#nav').localScroll(800);
$('#intro').parallax("50%", 0.1);
$('#message').parallax("50%", 0.1);
$('#second').parallax("50%", 0.1);  
$('.bg').parallax("50%", 0.1);  

$('.new-learn').parallax("50%", 0.1);
$('#education').parallax("50%", 0.1);
$('#bg-template').parallax("50%", 0.1);
$('#blog-area').parallax("50%", 0.1);
$('#third').parallax("50%", 0.1);
$('#mapping').parallax("50%", 0.1);
$('#end').parallax("50%", 0.3);
AOS.init();
new WOW().init();

// sidebarm-menu-button 

$("#menu-button").click(function(){
    $('.left-sidebar-area').toggleClass('clickable');
});




});
  // *************************************//
 // ********** 3d slider *************** //
// *************************************//
var swiper = new Swiper(".second-slider", {
  effect: "cube",
  grabCursor: true,
  loop: true,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  cubeEffect: {
    shadow: true,
    

    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  }
});

  // **********************************************//
 // ********** recommandation-slider ************ //
// **********************************************//
var swiper = new Swiper(".swiper_edite", {
  effect: "coverflow",
  grabCursor: true,

  slidesPerView: 1,
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },


  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

    },
    670: {
      slidesPerView: 3,
      spaceBetween: 20,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },






    },


  },
});

  // **************************************************//
 // ***************** isotop-plugin ***************** //
// **************************************************//
var $grid = $('.isotop-items').isotope({
  // options
});


// filter items on button click
$('.isotop-list').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

   $('.isotop-list ul').on('click', 'li', function(){
        $('.isotop-list ul li.active').removeClass("active");
        $(this).addClass('active')
    })
  // *************************************//
 // ********** hero slider *************** //
// *************************************//

    var swiper = new Swiper(".heros", {
      slidesPerView: 1,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
           breakpoints: {
        450: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        750: {
          slidesPerView: 4,
        },
      },

    });


    scrNav();
  });
  

  document
  .querySelector(".tumbler-wrapper")
  .addEventListener("click", (_) =>
    document.body.classList.toggle("night-mode")
  );

  // let buttonToggle = () => {
  //   const button = document.getElementById("menu-button").classList,
  //     isopened = "is-opened";
  //   let isOpen = button.contains(isopened);
  //   if (isOpen) {
  //     button.remove(isopened);
  //   } else {
  //     button.add(isopened);
  //   }
  // };
  
