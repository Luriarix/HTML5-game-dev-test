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
function showCode(luck) {
    var code = document.getElementById('code').innerText;
    var toggled = false;
    var temp = '';
    for (var index = 0; index < code.length; index++) {
        var temp2 = code[index];
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
function settingSafes(lucky) {
    var luck = lucky + 1;
    var safe_to_open = document.getElementById('safe' + String(luck));
    var safe_value = Number(safe_to_open.innerText);
    console.log(luck);
    if (safe_value == luck) {
        showCode(luck);
        document.getElementById('safe' + String(luck)).innerText = 'try again';
        for (var i = 1; i < 10; i++) {
            var safe_to_check = document.getElementById('safe' + String(i)).innerText;
            if (luck != i) {
                if (safe_to_open.innerText == safe_to_check) {
                    console.log('WIN!!!');
                }
            }
        }
    }
    else {
        settingSafes(getNumber());
    }
}
