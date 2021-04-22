class Safe {
  id: number;
  open: boolean = false;
  constructor(safeNumber: number) {
    this.id = safeNumber;
  }
}

var safes: Safe[];

function settingBackground() {
  var canvas = <HTMLCanvasElement>document.getElementById('application'),
    context = canvas.getContext('2d');

  const image = new Image();
  image.src = 'graphics/background_safe_minigame.png';
  image.onload = function () {
    context.drawImage(image, 1, 1, 298, 148);
  }
  for (let index = 0; index < 9; index++) {
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
