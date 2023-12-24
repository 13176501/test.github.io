// custom.js

(function($) {

    var $window = $(window),
        $wrapper = $('#wrapper');

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $wrapper.removeClass('is-preload');
        }, 100);
    });

    // Background with dynamic parallax effect.
    $wrapper._parallax(0.925, true);

})(jQuery);
