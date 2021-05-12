

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
}); 

$('#carousel-2').owlCarousel({
    loop:true,
    margin:80,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel', [300]);
})

$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})



