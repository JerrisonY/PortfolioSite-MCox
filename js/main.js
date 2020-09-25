$(document).ready(function() {

    function hideLoader() {
        $('#loader').delay(2000).hide(500);
        animateLanding();
    }

    function animateLanding() {
        TweenMax.to('#landing .content-area', 0.5, {
            opacity: 1,
            ease: Expo.easeInOut
        })

        TweenMax.from('.lt1', 1.5, {
            opacity: 0,
            x: '100px',
            y: '-100px',
            ease: Expo.easeInOut
        });

        TweenMax.from('.rt1', 1.5, {
            opacity: 0,
            x: '-100px',
            y: '100px',
            ease: Expo.easeInOut
        });

        TweenMax.from('.lt2', 1.5, {
            delay: 0.25,
            opacity: 0,
            x: '100px',
            y: '-100px',
            ease: Expo.easeInOut
        });

        TweenMax.from('.rt2', 1.5, {
            delay: 0.25,
            opacity: 0,
            x: '-100px',
            y: '100px',
            ease: Expo.easeInOut
        });

        TweenMax.from('.lt3', 1.5, {
            delay: 0.5,
            opacity: 0,
            x: '100px',
            y: '-100px',
            ease: Expo.easeInOut
        });

        TweenMax.from('.rt3', 1.5, {
            delay: 0.5,
            opacity: 0,
            x: '-100px',
            y: '100px',
            ease: Expo.easeInOut
        });

        TweenMax.from('.text-1', 1.5, {
            delay: 1.5,
            opacity: 0,
            x: '-50px',
            ease: Expo.easeInOut
        });

        TweenMax.from('.text-3', 1.5, {
            delay: 1.75,
            opacity: 0,
            x: '50px',
            ease: Expo.easeInOut
        });

        TweenMax.from('.text-4', 1.5, {
            delay: 2.75,
            opacity: 0,
            // y: '50px',
            ease: Expo.easeInOut
        });
    }

    TweenMax.to('html', 1, {
        opacity: 1
    });

    TweenMax.to('#loader-text-1', 0.5, {
        opacity: 1,
        ease: Sine.easeIn
    });

    TweenMax.to('#loader-text-2', 0.5, {
        delay: 0.25,
        opacity: 1,
        ease: Sine.easeIn
    });

    TweenMax.to('#loader-text-3', 0.5, {
        delay: 0.5,
        opacity: 1,
        ease: Sine.easeIn
    });

    TweenMax.to('#loader-text-4', 0.5, {
        delay: 0.75,
        opacity: 1,
        ease: Sine.easeIn
    });

    TweenMax.to('#loader-text-5', 0.5, {
        delay: 1,
        opacity: 1,
        ease: Sine.easeIn
    });

    TweenMax.to('#loader-text-1', 0.5, {
        delay: 0.5,
        opacity: 0,
        ease: Sine.easeOut
    });

    TweenMax.to('#loader-text-2', 0.5, {
        delay: 0.75,
        opacity: 0,
        ease: Sine.easeOut
    });

    TweenMax.to('#loader-text-3', 0.5, {
        delay: 1,
        opacity: 0,
        ease: Sine.easeOut
    });

    TweenMax.to('#loader-text-4', 0.5, {
        delay: 1.25,
        opacity: 0,
        ease: Sine.easeOut
    });

    TweenMax.to('#loader-text-5', 0.5, {
        delay: 1.5,
        opacity: 0,
        ease: Sine.easeOut
    });


    TweenMax.to('#loader', 1, {
        delay: 2,
        opacity: 0,
        onComplete: hideLoader
    });

    var activeMenuSection = '.menu-info-about';

    // $('.menu-info-services, .menu-info-contact').hide();

    $('#nav-icon1').click(function() {

        $(this).toggleClass('open');

        if ($(this).attr('data-click-state') == 0) {
            $(this).attr('data-click-state', 1);
            console.log('DCS is now 1.');

            TweenMax.to('#menu', 1.0, {
                left: '0px',
                ease: Expo.easeOut
            });

        } else {
            console.log('DCS is now 0.');
            $(this).attr('data-click-state', 0);

            TweenMax.to('#menu', 1.25, {
                left: '-530px',
                ease: Expo.easeInOut
            });
        }

    });

    $('#nav-icon2').click(function() {

        $(this).toggleClass('open');

        if ($(this).attr('data-click-state') == 0) {
            $(this).attr('data-click-state', 1);
            console.log('DCS is now 1.');

            TweenMax.to('#mobile', 1.0, {
                top: '50px',
                ease: Expo.easeOut
            });

        } else {
            console.log('DCS is now 0.');
            $(this).attr('data-click-state', 0);

            let windowHeight = window.innerHeight;

            TweenMax.to('#mobile', 1.25, {
                top: '-' + windowHeight + 'px',
                ease: Expo.easeInOut
            });
        }

    });


    $('#link-about').click(function() {

        if ($('#link-about').hasClass('active-link') == false) {
            $('#link-about').toggleClass('active-link');
        }

        if ($('#link-services').hasClass('active-link')) {
            $('#link-services').toggleClass('active-link');
        }

        if ($('#link-contact').hasClass('active-link')) {
            $('#link-contact').toggleClass('active-link');
        }

        if ($('#link-etc').hasClass('active-link')) {
            $('#link-etc').toggleClass('active-link');
        }

        if (activeMenuSection != '.menu-info-about') {

            TweenMax.to(activeMenuSection, 0.5, {
                opacity: 0,
                y: 20
            });

            activeMenuSection = '.menu-info-about';

            TweenMax.fromTo(activeMenuSection, 0.5, {
                y: 20,
                opacity: 0
            }, {
                delay: 0.25,
                y: 0,
                opacity: 1
            });
        }

    });

    $('#link-services').click(function() {

        if ($('#link-services').hasClass('active-link') == false) {
            $('#link-services').toggleClass('active-link');
        }

        if ($('#link-about').hasClass('active-link')) {
            $('#link-about').toggleClass('active-link');
        }

        if ($('#link-contact').hasClass('active-link')) {
            $('#link-contact').toggleClass('active-link');
        }

        if ($('#link-etc').hasClass('active-link')) {
            $('#link-etc').toggleClass('active-link');
        }

        if (activeMenuSection != '.menu-info-services') {

            TweenMax.to(activeMenuSection, 0.5, {
                opacity: 0,
                y: 20
            });

            activeMenuSection = '.menu-info-services';

            TweenMax.fromTo(activeMenuSection, 0.5, {
                y: 20,
                opacity: 0
            }, {
                delay: 0.25,
                y: 0,
                opacity: 1
            });
        }

    });

    $('#link-contact').click(function() {

        if ($('#link-contact').hasClass('active-link') == false) {
            $('#link-contact').toggleClass('active-link');
        }

        if ($('#link-about').hasClass('active-link')) {
            $('#link-about').toggleClass('active-link');
        }

        if ($('#link-services').hasClass('active-link')) {
            $('#link-services').toggleClass('active-link');
        }

        if ($('#link-etc').hasClass('active-link')) {
            $('#link-etc').toggleClass('active-link');
        }

        if (activeMenuSection != '.menu-info-contact') {

            TweenMax.to(activeMenuSection, 0.5, {
                opacity: 0,
                y: 20
            });

            activeMenuSection = '.menu-info-contact';

            TweenMax.fromTo(activeMenuSection, 0.5, {
                y: 20,
                opacity: 0
            }, {
                delay: 0.25,
                y: 0,
                opacity: 1
            });
        }

    });
    $('#link-etc').click(function() {

        if ($('#link-etc').hasClass('active-link') == false) {
            $('#link-etc').toggleClass('active-link');
        }

        if ($('#link-about').hasClass('active-link')) {
            $('#link-about').toggleClass('active-link');
        }

        if ($('#link-services').hasClass('active-link')) {
            $('#link-services').toggleClass('active-link');
        }

        if ($('#link-contact').hasClass('active-link')) {
            $('#link-contact').toggleClass('active-link');
        }

        if (activeMenuSection != '.menu-info-etc') {

            TweenMax.to(activeMenuSection, 0.5, {
                opacity: 0,
                y: 20
            });

            activeMenuSection = '.menu-info-etc';

            TweenMax.fromTo(activeMenuSection, 0.5, {
                y: 20,
                opacity: 0
            }, {
                delay: 0.25,
                y: 0,
                opacity: 1
            });
        }

    });

    $('#link-about-mobile').click(function() {

        if ($('#link-about-mobile').hasClass('active-link') == false) {
            $('#link-about-mobile').toggleClass('active-link');
        }

        if ($('#link-services-mobile').hasClass('active-link')) {
            $('#link-services-mobile').toggleClass('active-link');
        }

        if ($('#link-contact-mobile').hasClass('active-link')) {
            $('#link-contact-mobile').toggleClass('active-link');
        }

        if ($('#link-etc-mobile').hasClass('active-link')) {
            $('#link-etc-mobile').toggleClass('active-link');
        }

        if (activeMenuSection != '.menu-info-about') {

            TweenMax.to(activeMenuSection, 0.5, {
                opacity: 0,
                y: 20
            });

            activeMenuSection = '.menu-info-about';

            TweenMax.fromTo(activeMenuSection, 0.5, {
                y: 20,
                opacity: 0
            }, {
                delay: 0.25,
                y: 0,
                opacity: 1
            });
        }

    });

    $('#link-services-mobile').click(function() {

        if ($('#link-services-mobile').hasClass('active-link') == false) {
            $('#link-services-mobile').toggleClass('active-link');
        }

        if ($('#link-about-mobile').hasClass('active-link')) {
            $('#link-about-mobile').toggleClass('active-link');
        }

        if ($('#link-contact-mobile').hasClass('active-link')) {
            $('#link-contact-mobile').toggleClass('active-link');
        }

        if ($('#link-etc-mobile').hasClass('active-link')) {
            $('#link-etc-mobile').toggleClass('active-link');
        }

        if (activeMenuSection != '.menu-info-services') {

            TweenMax.to(activeMenuSection, 0.5, {
                opacity: 0,
                y: 20
            });

            activeMenuSection = '.menu-info-services';

            TweenMax.fromTo(activeMenuSection, 0.5, {
                y: 20,
                opacity: 0
            }, {
                delay: 0.25,
                y: 0,
                opacity: 1
            });
        }

    });

    $('#link-contact-mobile').click(function() {

        if ($('#link-contact-mobile').hasClass('active-link') == false) {
            $('#link-contact-mobile').toggleClass('active-link');
        }

        if ($('#link-about-mobile').hasClass('active-link')) {
            $('#link-about-mobile').toggleClass('active-link');
        }

        if ($('#link-services-mobile').hasClass('active-link')) {
            $('#link-services-mobile').toggleClass('active-link');
        }

        if ($('#link-etc-mobile').hasClass('active-link')) {
            $('#link-etc-mobile').toggleClass('active-link');
        }

        if (activeMenuSection != '.menu-info-contact') {

            TweenMax.to(activeMenuSection, 0.5, {
                opacity: 0,
                y: 20
            });

            activeMenuSection = '.menu-info-contact';

            TweenMax.fromTo(activeMenuSection, 0.5, {
                y: 20,
                opacity: 0
            }, {
                delay: 0.25,
                y: 0,
                opacity: 1
            });
        }

    });

    $('#link-etc-mobile').click(function() {

        if ($('#link-etc-mobile').hasClass('active-link') == false) {
            $('#link-etc-mobile').toggleClass('active-link');
        }

        if ($('#link-about-mobile').hasClass('active-link')) {
            $('#link-about-mobile').toggleClass('active-link');
        }

        if ($('#link-services-mobile').hasClass('active-link')) {
            $('#link-services-mobile').toggleClass('active-link');
        }

        if ($('#link-contact-mobile').hasClass('active-link')) {
            $('#link-contact-mobile').toggleClass('active-link');
        }

        if (activeMenuSection != '.menu-info-etc') {

            TweenMax.to(activeMenuSection, 0.5, {
                opacity: 0,
                y: 20
            });

            activeMenuSection = '.menu-info-etc';

            TweenMax.fromTo(activeMenuSection, 0.5, {
                y: 20,
                opacity: 0
            }, {
                delay: 0.25,
                y: 0,
                opacity: 1
            });
        }

    });

    $(".link-transition").click(function() {

        var href = $(this).attr('href');

        TweenMax.to('html', 0.5, {
            opacity: 0
        });

        // Delay setting the location for one second
        setTimeout(function() { window.location = href }, 500);
        return false;
    });

});