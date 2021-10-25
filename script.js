let pixelBoard = document.querySelector('#pixel-board');
let liColor = document.querySelectorAll('.color');
let clearBoard = document.querySelector('#clear-board');

liColor[0].style.backgroundColor = 'black';
liColor[1].style.backgroundColor = 'blue';
liColor[2].style.backgroundColor = 'red';
liColor[3].style.backgroundColor = 'rgb(0, 226, 0)';

for (let index = 1; index <= 25; index += 1) {
  pixelBoard.innerHTML += "<li class='pixel'> </li>";
  
}

let color = 'black';
function selectColor(event) {
  let selectedElement = event.target;
  for (const iterator of selectedElement.classList) {
    if (iterator === 'selected') {
    
    } else {
      for (const key in liColor) {
        liColor[key].className = 'color';
      }

      event.target.classList.add('selected');
      color = event.target.style.backgroundColor;
    }
  }
  
}

function colorPixels(event) {
  event.target.style.backgroundColor = color;
  
}

let pixels = document.querySelectorAll('.pixel');
function cleanPixels() {
  for (const key in pixels) {
    pixels[key].style.backgroundColor = 'white';
  }
}

document.addEventListener('click', function(event) {
  let classList = event.target.classList;
  for (const iterator of classList) {
    if (iterator === 'color') {
      selectColor(event)
    };

  }
  
});

document.addEventListener('click', function(event) {
  let classList = event.target.classList;
  for (const iterator of classList) {
    if (iterator === 'pixel') {
      colorPixels(event)
    };

  }
  
});

clearBoard.addEventListener('click',cleanPixels);


