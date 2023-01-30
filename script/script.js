
var boxes = document.querySelector('.boxes');
var boxCount = 4;
var boxSelected = 0;

function rotate() {
  var angle = boxSelected / boxCount * -360;
  boxes.style.transform = 'translateZ(-300px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.move1');
prevButton.addEventListener('click', function() {
  boxSelected--;
  rotate();
});

var nextButton = document.querySelector('.move2');
nextButton.addEventListener( 'click', function() {
  boxSelected++;
  rotate();
});
