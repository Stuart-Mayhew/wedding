var faqButtons = document.getElementsByClassName('faq-button');
var faqButton;

[].forEach.call(faqButtons, function(faqButtons) {
  if (faqButtons.addEventListener) {
    faqButtons.addEventListener('click', function(){
      faqButton = faqButtons.id;
      faqButtonClick()
    }, false);
  } else if (faqButtons.attachEvent) {
    faqButtons.attachEvent('onclick', function(){
      faqButton = faqButtons.id;
      faqButtonClick()
    });
  };
});

function faqButtonClick() {
  // console.log(faqButtons[0].classList);
  var contentTitle = document.getElementById(faqButton);
  var content = contentTitle.nextElementSibling.classList;
  for (var i = 0; i < faqButtons.length; i++) {
    var faqContent = faqButtons[i].nextElementSibling.classList;


    if (faqContent.contains('faq-showing') && faqButtons[i].id !== faqButton) {
      console.log(faqButtons[i].id);
      console.log(faqButton);
      faqContent.replace('faq-showing', 'faq-hidden');
    };
  };
  if (content.contains('faq-showing')) {
    content.replace('faq-showing', 'faq-hidden');
  } else if (content.contains('faq-hidden')) {
    content.replace('faq-hidden', 'faq-showing')
  };
//   if (rsvpForm.classList.contains('form-hidden')) {
//   rsvpForm.classList.replace('form-hidden','form-showing');
// } else if (rsvpForm.classList.contains('form-showing')) {
//     rsvpForm.classList.replace('form-showing','form-hidden')
//   };
};
