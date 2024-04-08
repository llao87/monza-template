jQuery(function () {
    // lang switcher
    $(".js-example-basic-single").select2({
        closeOnSelect: true,
        minimumResultsForSearch: Infinity,
    });

    // promo slider
    const partnersCarousel = new Swiper(".promo-slider", {
        loop: true,
        spaceBetween: 28,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 1,
        breakpoints: {
            // 580: {
            //     slidesPerView: 1,
            // },
            // 768: {
            //     slidesPerView: 2,
            // },
            // 991: {
            //     slidesPerView: 3,
            // },
            // 1180: {
            //     slidesPerView: 4,
            // },
            // 1340: {
            //     slidesPerView: 5,
            // },
        },
    });

    const categoriesCaorusel = new Swiper(".js__categories-slider .swiper", {
        freeMode: true,
        speed: 100,
        spaceBetween: 28,
        slidesPerView: "auto",
        mousewheel: {
            enable: true,
            invert: false,
            sensitivity: 1,
            // eventsTarget: ".swiper-slide:not(.noSwipingClass)",
        },
        navigation: {
            prevEl: ".js__categories-slider .swiper-navigation .prev",
            nextEl: ".js__categories-slider .swiper-navigation .next",
        },
        noSwiping: true,
        noSwipingSelector: ".noSwipingClass",
        on: {
            slideChange: function () {
                if (mySwiper.activeIndex == 0 && mySwiper.activeIndex != 5) {
                    $("body").addClass("no_scroll");
                } else {
                    $("body").removeClass("no_scroll");
                }
            },
        },
    });

    const videossCaorusel = new Swiper(".js__videos-slider .swiper", {
        freeMode: true,
        speed: 100,
        spaceBetween: 28,
        slidesPerView: "auto",
        mousewheel: {
            enable: true,
            invert: false,
            sensitivity: 1,
            // eventsTarget: ".swiper-slide:not(.noSwipingClass)",
        },
        noSwiping: true,
        noSwipingSelector: ".noSwipingClass",
        on: {
            slideChange: function () {
                if (mySwiper.activeIndex == 0 && mySwiper.activeIndex != 5) {
                    $("body").addClass("no_scroll");
                } else {
                    $("body").removeClass("no_scroll");
                }
            },
        },
    });

    

    /*
    const partnersCarousel = new Swiper(".partners-slider", {
        loop: true,
        slidesPerView: 5,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            // 580: {
            //     slidesPerView: 1,
            // },
            // 768: {
            //     slidesPerView: 2,
            // },
            // 991: {
            //     slidesPerView: 3,
            // },
            // 1180: {
            //     slidesPerView: 4,
            // },
            // 1340: {
            //     slidesPerView: 5,
            // },
        },
    });

    const projectsCarousel = new Swiper(".js__projects-slider", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".projects .container .controls .next-project",
            prevEl: ".projects .container .controls .prev-project",
        },
    });

    // прокрутка страницы
    jQuery(".nav-link").on("click", function (e) {
        e.preventDefault();
        let href = jQuery(this).attr("href");

        console.log(document.location.pathname);

        if (document.location.pathname == "/") {
            if (href == "/") {
                href = "#promo";
            }

            if (href.includes("#")) {
                jQuery(this)
                    .parents(".container")
                    .find(".active")
                    .removeClass("active");

                jQuery("html, body").animate(
                    {
                        scrollTop: jQuery(href).stop().offset().top,
                    },
                    {
                        duration: 900,
                        easing: "linear",
                    }
                );
            } else {
                document.location.href = href;
            }
        } else {
            href = href.includes("#") ? "/" + href : href;
            document.location.href = href;
        }
    });
    */
});
