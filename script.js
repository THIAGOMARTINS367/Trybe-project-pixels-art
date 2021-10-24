let pixelBoard = document.querySelector('#pixel-board');

// document.onload = function() {
//   for (let index = 1; index <= 25; index += 1) {
//     pixelBoard.innerHTML = "<li class='pixel'> </li>";
    
//   }
// }

for (let index = 1; index <= 25; index += 1) {
  pixelBoard.innerHTML += "<li class='pixel'> </li>";
  
}