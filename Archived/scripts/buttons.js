var buttons = document.getElementsByClassName('venueButton');
var button;

[].forEach.call(buttons, function(buttons) {
  if (buttons.addEventListener) {
    buttons.addEventListener('click', function(){
      button = buttons.id;
      buttonClick()
    }, false);
  } else if (buttons.attachEvent) {
    buttons.attachEvent('onclick', function(){
      button = buttons.id;
      buttonClick()
    });
  };
});

function buttonClick() {
  button = document.getElementById(button);
  var activeButton = button.parentNode.parentNode.parentNode.getElementsByClassName('active');
  var buttonSlide = document.getElementById(button.id.split('-').shift() + '-slide');
  for(var i = 0; i < activeButton.length; i++) {
    activeButton[i].classList.remove("active");
  };
  for (var i = 0; i < buttons.length; i++) {
    var buttonsSlide = document.getElementById(buttons[i].id.split('-').shift() + '-slide');
    if (buttons[i].classList.contains('active') !== true) {
      buttonsSlide.classList.remove('onscreen');
      buttonsSlide.classList.add('offscreen');
      };
    }
  button.classList.add('active');
  if (buttonSlide.classList.contains('offscreen')) {
    buttonSlide.classList.replace('offscreen', 'onscreen');
  };
}




//give buttons active / inactive classes so that only one within the category displays at a time.
//toggling no-display and display should make the image zoom off the screen and make the overlay blank
//find out how to animate elemement movements and also to make the image come back to display space. use left/right? reset it to zero to make images on screen? then give left/right a heigh number to make them zoom off again? if left/right value goes over a certain amount, overlay turns blank?
