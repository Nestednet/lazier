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

var lazierContainers = document.querySelectorAll('.lazierContainer');


document.onreadystatechange = function(e)
{
    if (document.readyState === 'complete')
    {
        for (var i = 0; i < lazierContainers.length; i++) {
            lazierSmallProcess(lazierContainers.item(i));
        }

        for (var i = 0; i < lazierContainers.length; i++) {
            lazierCanvasProcess(lazierContainers.item(i));
        }
    }
};

window.onload = function () {

    for (var i = 0; i < lazierContainers.length; i++) {
        lazierBigProcess(lazierContainers.item(i));
    }
}
