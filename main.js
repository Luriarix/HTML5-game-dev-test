var Safe = /** @class */ (function () {
    function Safe(safeNumber) {
        this.open = false;
        this.id = safeNumber;
    }
    return Safe;
}());
var safes;
function settingBackground() {
    var canvas = document.getElementById('application'), context = canvas.getContext('2d');
    var image = new Image();
    image.src = 'graphics/background_safe_minigame.png';
    image.onload = function () {
        context.drawImage(image, 1, 1, 298, 148);
    };
    for (var index = 0; index < 9; index++) {
        safes[index] = new Safe[index];
    }
}
function settingSafes() {
    // var code = document.getElementById('code').innerHTML;
    console.log(String(safes[2].id));
    // var canvas = <HTMLCanvasElement> document.getElementById('application'),
    // context = canvas.getContext('2d');
    // context.font = "40px Titan";
    // context.textBaseline = 'top';
    // context.fillText("1 - - -", 355, 110);
}
