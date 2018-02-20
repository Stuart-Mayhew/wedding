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
  var contentTitle = document.getElementById(faqButton);
  var content = contentTitle.nextElementSibling.classList;
  for (var i = 0; i < faqButtons.length; i++) {
    var faqContent = faqButtons[i].nextElementSibling.classList;


    if (faqContent.contains('faq-showing') == true && faqButtons[i].id !== faqButton) {
      faqContent.remove('faq-showing');
      faqContent.add('faq-hidden');
    };
  };
  if (content.contains('faq-showing') == true) {
    content.add('faq-hidden');
    content.remove('faq-showing');
  } else if (content.contains('faq-hidden') == true) {
    console.log(content);
    content.add('faq-showing');
    content.remove('faq-hidden');
  };
//   if (rsvpForm.classList.contains('form-hidden')) {
//   rsvpForm.classList.replace('form-hidden','form-showing');
// } else if (rsvpForm.classList.contains('form-showing')) {
//     rsvpForm.classList.replace('form-showing','form-hidden')
//   };
};
