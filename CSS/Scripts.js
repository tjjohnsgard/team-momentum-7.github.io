$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#backToTopBtn').fadeIn();
        } else {
            $('#backToTopBtn').fadeOut();
        }
    })
})

// About Page
$(document).ready(function() {
    //Open Modal
    $('.open-modal').click(function() {
        var targetModal = $(this).data("target");
        $(targetModal).show();
    })

    //Close Modal
    $('.close').click(function() {
        $(this).closest('.modal').hide();
    })
})
$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
})
$(document).ready(function() {
    //Open Modal
    $('.open-modal2').click(function() {
        var targetModal = $(this).data("target");
        $(targetModal).show();
    })

    //Close Modal
    $('.close').click(function() {
        $(this).closest('.modal').hide();
    })
})
