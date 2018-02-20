var imgThumbs = document.getElementsByClassName('img-thumbnail');
var imgThumb;

[].forEach.call(imgThumbs, function(imgThumbs) {
  if (imgThumbs.addEventListener) {
    imgThumbs.addEventListener('click', function(){
      imgThumb = imgThumbs.id;
      imgThumbsClick()
    }, false);
  } else if (imgThumbs.attachEvent) {
    imgThumbs.attachEvent('onclick', function(){
      imgThumb = imgThumbs.id;
      imgThumbsClick()
    });
  };
});

function imgThumbsClick() {

  var clicked = document.getElementById(imgThumb);
  var focused = document.getElementsByClassName('img-focus')
  if (clicked.classList.contains('img-focus')) {
    clicked.classList.remove('img-focus');
    clicked.parentNode.classList.remove('img-focus-container');
    if (clicked.id === 'b3') {
      clicked.setAttribute('src', 'images/photographs/b3-cropped.jpg');
    } else if (clicked.id ==='b1') {
      clicked.setAttribute('src', 'images/photographs/b1-cropped.jpg');
    }
  } else if (focused.length === 0) {
    if (clicked.id === 'b3') {
      clicked.setAttribute('src', 'images/photographs/b3.jpg');
    } else if (clicked.id === 'b1') {
      clicked.setAttribute('src', 'images/photographs/b1.jpg');
    }
    clicked.classList.add('img-focus');
    clicked.parentNode.classList.add('img-focus-container');
  }
}
