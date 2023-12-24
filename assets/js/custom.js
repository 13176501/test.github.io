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

    // Dynamic gradient effect for all elements
    function applyDynamicGradient() {
        var elements = $('.dynamic-gradient');

        elements.each(function(index) {
            var element = $(this);
            var intensity = index / elements.length; // 计算渐变强度

            // 动态计算渐变颜色
            var color = calculateDynamicColor(intensity);

            // 设置渐变样式
            element.css({
                'background': 'linear-gradient(to right, ' + color.light + ', ' + color.dark + ')',
                '-webkit-background-clip': 'text',
                'color': 'transparent'
            });
        });
    }

    // 计算动态颜色
    function calculateDynamicColor(intensity) {
        // 在这里，你可以使用颜色库（如TinyColor等）来计算颜色的混合、亮度、饱和度等
        // 这里简单演示一个从浅到深的蓝色渐变
        var lightColor = tinycolor('#3498db').lighten(intensity * 100).toString();
        var darkColor = tinycolor('#3498db').darken(intensity * 100).toString();

        return { light: lightColor, dark: darkColor };
    }

    // 调用动态渐变效果
    applyDynamicGradient();

})(jQuery);
