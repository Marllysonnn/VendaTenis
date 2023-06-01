const buttonOpen = document.getElementById('open');
const buttonClose = document.getElementById('close');
const overlay = document.getElementById('overlay');

buttonOpen.addEventListener('click', function() {
    overlay.style.display = 'block';
});

buttonClose.addEventListener('click', function() {
    overlay.style.display = 'none';
});

var conteudo = document.getElementById('overlay');

conteudo.addEventListener('mousedown', function(e) {
  isMouseDown = true;
  startX = e.pageX - conteudo.offsetLeft;

  scrollLeft = conteudo.scrollLeft;
});

conteudo.addEventListener('mousemove', function(e) {
  if (!isMouseDown) return;
  e.preventDefault();
  var x = e.pageX - conteudo.offsetLeft;
  var walkX = (x - startX) * 1.5;
  conteudo.scrollLeft = scrollLeft - walkX;
});

window.addEventListener('mouseup', function() {
  isMouseDown = false;
});