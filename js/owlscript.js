$('#gallery-carousel').owlCarousel({
    autoplay: true,
    dotsEach: true,
    autoplaytimeout: 750,
    loop:true,
    margin:10,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('#owl-carousel').owlCarousel({
    loop:true,
    dotsEach: true,
    margin:90,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
