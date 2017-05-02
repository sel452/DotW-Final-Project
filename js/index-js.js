let frame = document.querySelector('.frame');
let images = document.querySelectorAll('img');

function changeOpacity(event) {
  if (event.target.tagName == 'IMG') {
    for (let i = 0; i < images.length; i++) {
      images[i].className = 'semitransparent';
    }
    event.target.className = "opaque";
    document.querySelector('#bg').className = "opaque";
    event.target.addEventListener('mouseout', resetOpacity);
  }
  event.stopPropagation();
}

function resetOpacity() {
  for (let i = 0; i < images.length; i++) {
    images[i].className = 'opaque';
  }
}

frame.addEventListener('mouseover', changeOpacity);