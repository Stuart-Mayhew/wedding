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
  // rsvpForm.classList.replace('form-hidden','form-showing');
  rsvpForm.classList.remove('form-hidden');
  rsvpForm.classList.add('form-showing');
} else if (rsvpForm.classList.contains('form-showing')) {
    // rsvpForm.classList.replace('form-showing','form-hidden')
    rsvpForm.classList.remove('form-showing');
    rsvpForm.classList.add('form-hidden');
  };
};

var plusButtons = document.getElementsByClassName('glyph-plus');
var plusButton;

[].forEach.call(plusButtons, function(plusButtons) {
  if (plusButtons.addEventListener) {
    plusButtons.addEventListener('click', function(){
      plusButton = plusButtons.id;
      plusButtonClick()
    }, false);
  } else if (plusButtons.attachEvent) {
    plusButtons.attachEvent('onclick', function(){
      plusButton = plusButtons.id;
      plusButtonClick()
    });
  };
});

function plusButtonClick() {
  var clicked = document.getElementById(plusButton);
  var clickedParent = clicked.parentNode;
  var inputContainer = clickedParent.previousElementSibling;
  var divParent = inputContainer.parentNode;
  var newDiv = inputContainer.cloneNode(false);
  var newFirstName = document.createElement('input');
  var newLastName = document.createElement('input')
  if (divParent.id === 'rsvp-names') {
    newDiv.appendChild(newFirstName);
    newFirstName.setAttribute('class', 'text-input text-copy first-name');
    newFirstName.setAttribute('placeholder', 'First Name');
    newFirstName.setAttribute('type', 'text');
    newDiv.appendChild(newLastName);
    newLastName.setAttribute('class', 'text-input text-copy last-name');
    newLastName.setAttribute('placeholder', 'Last Name');
    newLastName.setAttribute('type', 'text');
    newDiv.appendChild(newLastName);
    newLastName.setAttribute('class', 'text-input text-copy last-name')
    newLastName.setAttribute('placeholder', 'Last Name')
    newLastName.setAttribute('type', 'text')
  } else if (divParent.id === 'rsvp-meat') {
    newDiv.insertAdjacentHTML('beforeend', '<divclass="input-container"><select id="guestNumber" data-guest-amount="null" class="form-replaced" name="meat"><option class="filler">blank</option><option >guest1</option><option >guest2</option><option >guest3</option><option >guest4</option><option >guest5</option><option >guest6</option></select><div class="select" tabindex="0"><span class="value">__</span><ul class="optList hidden"><li class="option filler">&nbsp;<span class="text-glyph glyph-lg">&#xe008;</span>&nbsp;</li><li data-guestAmount="1" class="option guestNumber">guest1</li><li data-guestAmount="1" class="option guestNumber">guest2</li><li data-guestAmount="1" class="option guestNumber">guest3</li><li data-guestAmount="1" class="option guestNumber">guest4</li><li data-guestAmount="1" class="option guestNumber">guest5</li><li data-guestAmount="1" class="option guestNumber">guest6</li></ul></div></div>');
  }

  if (divParent.getElementsByClassName('input-container').length <= 5) {
    divParent.insertBefore(newDiv, clickedParent);

  }
}

var minusButtons = document.getElementsByClassName('glyph-minus');
var minusButton;

[].forEach.call(minusButtons, function(minusButtons) {
  if (minusButtons.addEventListener) {
    minusButtons.addEventListener('click', function(){
      minusButton = minusButtons.id;
      minusButtonClick()
    }, false);
  } else if (minusButtons.attachEvent) {
    minusButtons.attachEvent('onclick', function(){
      minusButton = minusButtons.id;
      minusButtonClick()
    });
  };
});

function minusButtonClick() {
  var clicked = document.getElementById(minusButton);
  var clickedParent = clicked.parentNode;
  var inputContainer = clickedParent.previousElementSibling;
  var newDiv = inputContainer.cloneNode([true]);
  var divParent = inputContainer.parentNode;
  var divNumber = inputContainer.childNodes.length

  if (divNumber < 5) {
  divParent.removeChild(inputContainer);
  }
}


var mealGen = document.getElementById('meal-gen');

if (mealGen.addEventListener) {
  mealGen.addEventListener('click', function(){
    mealGenClick()
  }, false);
} else if (mealGen.attachEvent) {
  mealGen.attachEvent('onclick', function(){
    mealGenClick()
  });
};

function mealGenClick() {

  var initGen = document.getElementById('rsvp-meal');

  if (initGen.classList.contains('form-hidden')) {
    initGen.classList.add('meal-form-showing');
    initGen.classList.remove('-form-hidden');
    // initGen.classList.replace('form-hidden', 'meal-form-showing');
  }
  var names = document.getElementsByClassName('name-container');


  for (var i = 0; i < names.length  ; i++) {
    var getFirstName = names[i].getElementsByClassName('first-name')[0]

    var getLastName = names[i].getElementsByClassName('last-name')[0]
    var mealForm = document.getElementsByClassName('meal-form');
    var mealNames = document.getElementsByClassName('meal-name')
    while (mealNames.length < names.length) {
      var newMealDiv = mealForm[0].cloneNode(true);
      var newRadio = newMealDiv.getElementsByClassName('meal-input')

      for (var n = 0; n < newRadio.length; n++) {
        var mealAttribute = mealNames.length + 1;
        newRadio[0].setAttribute('name','meal' + mealAttribute);
        newRadio[1].setAttribute('name','meal' + mealAttribute);

      }


      mealForm[0].parentNode.appendChild(newMealDiv);

    }
    while (mealNames.length > document.getElementsByClassName('name-container').length) {
      var lastMealName = mealForm[mealForm.length - 1];
      mealForm[0].parentNode.removeChild(lastMealName);
    }

    var mealName = mealNames[i];
    mealName.innerHTML = getFirstName.value + ' ' + getLastName.value;
  }
};
