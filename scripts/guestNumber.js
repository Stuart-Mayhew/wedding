var guestAmount = document.getElementsByClassName('guestNumber');
var guestNumber


// if (guestAmount.dataset.guestAmount === 'null') {
//   window.alert('hi');
// }

[].forEach.call(guestAmount, function(guestAmount) {
  if (guestAmount.addEventListener) {
    guestAmount.addEventListener('click', function(){
      guestNumber = guestAmount;
      guestChange()
    }, false);
  } else if (guestAmount.attachEvent) {
    guestAmount.attachEvent('onclick', function(){
      guestNumber = guestAmount;
      guestChange()
    });
  };
});

function guestChange() {

  console.log(guestNumber.dataset.guestAmount);
};
