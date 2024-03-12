$(document).ready(function(){
    $("#flipbook").turn({
        width: window.innerWidth,
        height: window.innerHeight,
        autoCenter: true
    });

    $(window).resize(function(){
        $("#flipbook").turn('size', window.innerWidth, window.innerHeight);
    });
});