var $window = $(window);

var $width = $window.width();
var $height = $window.height();

$main();

$window.resize(function () {
    $main();
});

function $main() {
    $width = $window.width();
    $height = $window.height();

    $("#wrap").css({
        "width": styleDisplay($width, "100"),
        "height": styleDisplay($height, "100"),
        "background-color": "#f00",
    });


    $("#headerWrap").css({
        "width": $width,
        "height": styleDisplay($height, "10"),
        "background-color": "#f0f",
    });

    $("#logoWrap").css({
        "width": styleDisplay($width, "10"),
        "height": styleDisplay($height, "10"),
        "background-color": "#000",
    })
}
