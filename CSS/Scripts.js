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

// contact page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('contactModal');
    const closeButton = document.querySelector('.close-button'); 
    if (closeButton && modal) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none'; 
            const successMessage = document.getElementById('success-message');
            if (successMessage) {
                successMessage.style.display = 'none';
            }
            if (form) {
                form.reset();
            }
        });
    }

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Please fill in all required fields.');
        } else {
            alert('Form submitted successfully.');

            const successMessage = document.getElementById('success-message');
            if (successMessage) {
                successMessage.style.display = 'block'; 
            }

        }
    });
});