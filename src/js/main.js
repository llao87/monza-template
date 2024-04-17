jQuery(function () {
    const body = jQuery("body");
    const modal = jQuery(".js-modal");

    // Переключатель языка
    $(".js-example-basic-single").select2({
        closeOnSelect: true,
        minimumResultsForSearch: Infinity,
    });

    $(document).on("mouseenter", ".select2-container", function (e) {
        jQuery(this).prev("select").select2("open");
    });
    $(document).on("mouseleave", ".select2-container", function (e) {
        if (
            $(e.toElement || e.relatedTarget).closest(".select2-container")
                .length == 0
        ) {
            jQuery("select").select2("close");
        }
    });

    // Запуск видео
    jQuery(".js__play-video").on("click", function () {
        let videoEl = jQuery(this)
            .parents(".video-box")
            .find("#showreel_video")
            .get(0);

        jQuery(this).parents(".overlay").fadeOut(800);
        videoEl.play();
    });

    // Маска телефона в форме обратной связи
    // jQuery('[type="tel"]').inputmask("+7 (999) 999-99-99");

    // Запуск анимации при прокрутке
    const wow = new WOW({
        boxClass: "wow" /* класс, который необходим для работы wow.js */,
        animateClass:
            "animate__animated" /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */,
        offset: 40 /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */,
        mobile: true /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */,
        live: true /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */,
    });
    wow.init(); /* Инициализация плагина с установленными выше свойствами */

    // Прокрутка по якорям
    const anchors = document.querySelectorAll("a.nav-link");
    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute("href");

            document.getElementById(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }

    // Карусель в промо блоке
    const promoCarousel = new Swiper(".promo-slider", {
        loop: true,
        speed: 1600,
        spaceBetween: 28,
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
        navigation: {
            nextEl: ".promo-slider-wrap .promo__controls .slider-arrow.next",
            prevEl: ".promo-slider-wrap .promo__controls .slider-arrow.prev",
        },
        pagination: {
            el: ".promo-slider-wrap .promo__dots",
            clickable: true,
        },
    });

    // Карусель категорий
    const categoriesCarousel = new Swiper(".js__categories-slider .swiper", {
        speed: 1200,
        spaceBetween: 28,
        slidesPerView: 4,
        mousewheel: {
            enable: true,
        },
        navigation: {
            prevEl: ".js__categories-slider .swiper-navigation .prev",
            nextEl: ".js__categories-slider .swiper-navigation .next",
        },
    });

    // Запуск модального окна
    jQuery(".js__category-more").on("click", function (e) {
        e.preventDefault();

        if (!body.hasClass("fixed")) {
            body.addClass("fixed");
        }

        modal.fadeIn();
    });

    jQuery(".js__close-modal").on("click", function (e) {
        e.preventDefault();

        if (body.hasClass("fixed")) {
            body.removeClass("fixed");
        }

        modal.fadeOut();
    });

    // Родительский слайдер в модальном окне
    const categoriesModalSlider = new Swiper(".nested-slider-parent", {
        loop: true,
        spaceBetween: 28,
        slidesPerView: 1,
        navigation: {
            prevEl: ".nested-slider-parent .parent-slider-navigation > .prev",
            nextEl: ".nested-slider-parent .parent-slider-navigation > .next",
        },
    });

    // Вложенный слайдер в модальном окне
    const categoriesModalInSlider = new Swiper(".nested-slider-child", {
        loop: true,
        nested: true,

        spaceBetween: 28,
        slidesPerView: 1,
        navigation: {
            prevEl: ".nested-slider-child .nested-slider-navigation > .prev",
            nextEl: ".nested-slider-child .nested-slider-navigation > .next",
        },
        pagination: {
            el: ".nested-slider-child .promo__dots",
            clickable: true,
        },
    });

    $(window).keyup(function (e) {
        var target = $(".input--check:focus");
        if (e.keyCode == 9 && $(target).length) {
            $(target).parent().addClass("focused");
        }
    });

    $(".input--check").focusout(function () {
        $(this).parent().removeClass("focused");
    });
});
