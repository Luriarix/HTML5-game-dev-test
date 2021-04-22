function settingBackground() {
    var canvas = document.getElementById('application'), context = canvas.getContext('2d');
    var image = new Image();
    image.src = 'graphics/background_safe_minigame.png';
    image.onload = function () {
        context.drawImage(image, 1, 1, 298, 148);
    };
}
function getNumber() {
    var luck = Math.floor(Math.random() * 9);
    return luck;
}
function settingSafes(lucky) {
    var code = document.getElementById('code').innerText;
    var luck = lucky + 1;
    for (var index = 1; index < 10; index++) {
        if (index == luck) {
            var safe = document.getElementById('safe' + String(index));
            var safe_check = Number(safe.innerText);
            if (safe_check == luck) {
                console.log('Lucky U!');
                var toggled = false;
                var temp = '';
                for (var index_1 = 0; index_1 < code.length; index_1++) {
                    var temp2 = code[index_1];
                    if (temp2 == '-' && toggled == false) {
                        temp += String(luck);
                        toggled = true;
                    }
                    else {
                        temp += temp2;
                    }
                }
                document.getElementById('code').innerText = temp;
            }
            else {
                luck = getNumber();
            }
        }
    }
    // code = '';
    console.log(luck);
    // var canvas = <HTMLCanvasElement> document.getElementById('application'),
    // context = canvas.getContext('2d');
    // context.font = "40px Titan";
    // context.textBaseline = 'top';
    // context.fillText("1 - - -", 355, 110);
}
