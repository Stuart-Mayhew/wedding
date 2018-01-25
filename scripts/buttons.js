var buttons = document.getElementsByClassName('rsvp-button');
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
  var rsvpForm = document.getElementById('rsvp-form')
  if (rsvpForm.classList.contains('form-hidden')) {
  rsvpForm.classList.replace('form-hidden','form-showing');
} else if (rsvpForm.classList.contains('form-showing')) {
    rsvpForm.classList.replace('form-showing','form-hidden')
  };
};
