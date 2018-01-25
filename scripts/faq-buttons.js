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
      faqButton = buttons.id;
      faqButtonClick()
    });
  };
});

function faqButtonClick() {
  var contentTitle = document.getElementById(faqButton);
  var content = contentTitle.nextElementSibling.classList;
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
