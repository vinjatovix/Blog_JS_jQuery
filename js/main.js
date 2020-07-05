(function () {
    'use strict';

    $(document).ready(function () {
        $('.slider').bxSlider({
            mode: 'fade',
            slideWidth: 1600,
            adaptiveHeight: false,
            speed: 500,
            pager:false,
            controls: false,
            auto:true,
            slideMargin: 0,
        });
    });
}());