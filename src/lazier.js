var lazierSmallProcess = function (container) {
    var renderImage = container.querySelector('.lazierLowFy');
    renderImage.src = renderImage.dataset.src;
    renderImage.onload = function () {
        renderImage.classList.add('loaded');
    };
}

var lazierCanvasProcess = function (container) {
    var lazierCanvas = container.querySelector('.lazierCanvas');
    var lazierCanvasContext = lazierCanvas.getContext('2d');
    var renderImageLow = container.querySelector('.lazierLowFy');

    var lowBlur = new Image();
    lowBlur.src = renderImageLow.dataset.src;

    lowBlur.onload = function () {
        var w = lazierCanvas.width;
        var h = lazierCanvas.height;
        lazierCanvasContext.drawImage(lowBlur, 0, 0, w, h);
        boxBlurCanvasRGBA(lazierCanvas, 0, 0, w, h, 20, 1);
    }

}

var lazierBigProcess = function (container) {
    var renderImage = container.querySelector('.lazierRender');
    renderImage.src = renderImage.dataset.src;
    renderImage.onload = function () {
        renderImage.classList.add('loaded');
    };
}

//document.addEventListener("DOMContentLoaded", function(event) {
    var lazierContainers = document.querySelectorAll('.lazierContainer');
    // for (var i = 0; i < lazierContainers.length; i++) {
    //     lazierSmallProcess(lazierContainers.item(i));
    // }

    for (var i = 0; i < lazierContainers.length; i++) {
        lazierCanvasProcess(lazierContainers.item(i));
    }
//});



var lazierBigBckgProcess = function (container) {
    var renderImage = container.querySelector('.lazierBackgroundRender');
    renderImage.style.backgroundImage = 'url("'+renderImage.dataset.src+'")';
    renderImage.onload = function () {
        renderImage.classList.add('loaded');
    };
    renderImage.classList.remove("blur");
}




window.onload = function () {
    var lazierContainers = document.querySelectorAll('.lazierContainer');
    var lazierBckgContainers = document.querySelectorAll('.lazierBackgroundContainer');
    for (var i = 0; i < lazierContainers.length; i++) {
        lazierBigProcess(lazierContainers.item(i));
    }
    for (var i = 0; i < lazierBckgContainers.length; i++) {
        lazierBigBckgProcess(lazierBckgContainers.item(i));
    }

}
