(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
    const answer = item.querySelector('.faq-answer');
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
const studentSlider = document.getElementById('student-slider');
const lessonSlider = document.getElementById('lesson-slider');
const priceSlider = document.getElementById('price-slider');

const studentAmount = document.getElementById('student-amount');
const lessonAmount = document.getElementById('lesson-amount');
const priceAmount = document.getElementById('price-amount');

const totalAmount = document.getElementById('total-amount');

// Fonksiyon: Slider değerlerini güncelle ve toplam geliri hesapla
function calculateTotal() {
    const studentValue = studentSlider.value;
    const lessonValue = lessonSlider.value;
    const priceValue = priceSlider.value;

    // Net gelir: (öğrenci sayısı * ders sayısı * ders ücreti) * %90
    const total = (studentValue * lessonValue * priceValue) * 0.9;

    studentAmount.textContent = studentValue;
    lessonAmount.textContent = lessonValue;
    priceAmount.textContent = priceValue;

    totalAmount.textContent = total.toFixed(2); // Sonuç noktadan sonra 2 haneli olacak şekilde
}

// Slider'lara event listener ekle
studentSlider.addEventListener('input', calculateTotal);
lessonSlider.addEventListener('input', calculateTotal);
priceSlider.addEventListener('input', calculateTotal);

// İlk hesaplama işlemini yap
calculateTotal();
