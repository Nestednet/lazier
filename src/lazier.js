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

window.onload = function () {

    var lazierContainers = document.querySelectorAll('.lazierContainer');

    for (var i = 0; i < lazierContainers.length; i++) {
        lazierSmallProcess(lazierContainers.item(i));
    }

    for (var i = 0; i < lazierContainers.length; i++) {
        lazierCanvasProcess(lazierContainers.item(i));
    }

    for (var i = 0; i < lazierContainers.length; i++) {
        lazierBigProcess(lazierContainers.item(i));
    }
}
