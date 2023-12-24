// 在 applyDynamicGradient 函数中添加对 .element 类的处理
function applyDynamicGradient() {
    var elements = $('.dynamic-gradient');

    elements.each(function(index) {
        var element = $(this);
        var intensity = index / elements.length;

        var color = calculateDynamicColor(intensity);

        element.css({
            'background': 'linear-gradient(to right, ' + color.light + ', ' + color.dark + ')',
            '-webkit-background-clip': 'text',
            'color': 'transparent'
        });
    });

    // 针对 .element 类的处理
    var element = $('.element');
    var color = calculateDynamicColor(0.5); // 例：设置固定强度的颜色
    element.css({
        'background': 'linear-gradient(to right, ' + color.light + ', ' + color.dark + ')',
        '-webkit-background-clip': 'text',
        'color': 'transparent'
    });
}

// 调用动态渐变效果
applyDynamicGradient();
