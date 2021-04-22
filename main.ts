function settingBackground() {
  var canvas = <HTMLCanvasElement>document.getElementById('application'),
    context = canvas.getContext('2d');

  const image = new Image();
  image.src = 'graphics/background_safe_minigame.png';
  image.onload = function () {
    context.drawImage(image, 1, 1, 298, 148);
  }
}

function getNumber() {
  var luck: number = Math.floor(Math.random() * 9);
  return luck;
}

function showCode(luck : number) {
  var code = document.getElementById('code').innerText;
  var toggled : boolean = false;
  var temp: string = '';

  for (let index = 0; index < code.length; index++) {
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



function settingSafes(lucky : number) {

  var luck = lucky + 1;

  for (let index = 1; index < 10; index++) {
    if (index == luck) {
      var safe = document.getElementById('safe' + String(index));
      var safe_check = Number(safe.innerText);

      if (safe_check == luck) {
        showCode(luck)
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
