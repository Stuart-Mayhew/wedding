var originalNameInput = document.getElementById('original-name-input');

if (originalNameInput.addEventListener) {
  originalNameInput.addEventListener('change', function(){
    newNameGen()
  }, false);
} else if (originalNameInput.attachEvent) {
  originalNameInput.attachEvent('change', function(){
    newNameGen()
  });
};

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
  var newName = document.createElement('input');
  if (divParent.id === 'rsvp-names') {
    newDiv.appendChild(newName);
    newName.setAttribute('class', 'text-input text-copy name');
    newName.setAttribute('placeholder', 'Full Name');
    newName.setAttribute('type', 'text');
    newName.setAttribute('name', 'name[]');

    if (newName.addEventListener) {
      newName.addEventListener('change', function(){
        newNameGen()
      }, false);
    } else if (newName.attachEvent) {
      newName.attachEvent('change', function(){
        newNameGen()
      });
    };
  } else if (divParent.id === 'rsvp-meat') {
    newDiv.insertAdjacentHTML('beforeend', '<divclass="input-container"><select id="guestNumber" data-guest-amount="null" class="form-replaced" name="meat"><option class="filler">blank</option><option >guest1</option><option >guest2</option><option >guest3</option><option >guest4</option><option >guest5</option><option >guest6</option></select><div class="select" tabindex="0"><span class="value">__</span><ul class="optList hidden"><li class="option filler">&nbsp;<span class="text-glyph glyph-lg">&#xe008;</span>&nbsp;</li><li data-guestAmount="1" class="option guestNumber">guest1</li><li data-guestAmount="1" class="option guestNumber">guest2</li><li data-guestAmount="1" class="option guestNumber">guest3</li><li data-guestAmount="1" class="option guestNumber">guest4</li><li data-guestAmount="1" class="option guestNumber">guest5</li><li data-guestAmount="1" class="option guestNumber">guest6</li></ul></div></div>');
  }

  if (divParent.getElementsByClassName('input-container').length <= 5) {
    divParent.insertBefore(newDiv, clickedParent);

  }
}
// function newNameGen() {
//   alert('name change')
// }
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
  var divNumber = inputContainer.childNodes.length;
  var mealParent = divParent.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
  var meals = document.getElementsByClassName('meal-form');
  var lastMeal = meals.length - 1;
  if (divNumber < 3) {
    if (meals.length >= divParent.childNodes.length - 6) {
      mealParent.removeChild(meals[lastMeal]);
    }
  divParent.removeChild(inputContainer);

  }
}


// var mealGen = document.getElementById('meal-gen');
//
// if (mealGen.addEventListener) {
//   mealGen.addEventListener('click', function(){
//     mealGenClick()
//   }, false);
// } else if (mealGen.attachEvent) {
//   mealGen.attachEvent('onclick', function(){
//     mealGenClick()
//   });
// };

function newNameGen() {

  var initGen = document.getElementById('rsvp-meal');
  var names = document.getElementsByClassName('name-container');
  var mealForm = document.getElementsByClassName('meal-form');
  var mealNames = document.getElementsByClassName('meal-name')

  if (initGen.classList.contains('form-hidden')) {
    initGen.classList.add('meal-form-showing');
    initGen.classList.remove('form-hidden');
    // initGen.classList.replace('form-hidden', 'meal-form-showing');
  }


  for (var i = 0; i < names.length  ; i++) {
    var getName = names[i].getElementsByClassName('name')[0]

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

    mealName.innerHTML = getName.value;
    // console.log(mealName.parentNode.parentNode.childNodes[i+4])
    if (mealName.innerHTML == '') {
      var nameField = i + 1;
      mealForm[i].classList.remove('meal-form-showing');
      mealForm[i].classList.add('form-hidden');
    } else if (mealForm[i].classList.contains('form-hidden')) {
      mealForm[i].classList.remove('form-hidden');
    }

  }
};

var notAttend = document.getElementById('not-attend');
var yesAttend = document.getElementById('yes-attend');

if (notAttend.addEventListener) {
  notAttend.addEventListener('click', function(){
  notAttendClick()
  }, false);
} else if (notAttend.attachEvent) {
  notAttend.attachEvent('onclick', function(){
  notAttendClick()
  });
};

function notAttendClick() {
  var formClass = document.getElementsByClassName('form')
  for (var i = 3; i < formClass.length; i++ ) {
    document.getElementById('invite-type').innerHTML = '&#x2026;'
    if (formClass[i].classList.contains('form-hidden')) {
    } else {
      formClass[i].classList.add('form-hidden');
    };
  }
}

if (yesAttend.addEventListener) {
  yesAttend.addEventListener('click', function(){
  yesAttendClick()
  }, false);
} else if (yesAttend.attachEvent) {
  yesAttend.attachEvent('onclick', function(){
  yesAttendClick()
  });
};

function yesAttendClick() {
  var formClass = document.getElementsByClassName('form')
  for (var i = 3; i < formClass.length; i++ ) {
    if (document.getElementById('invite-type').innerHTML === 'Evening.') {
        i = i + 1;
    } else if (formClass[i].classList.contains('form-hidden')) {
      formClass[i].classList.remove('form-hidden');
    };
  }
}


var ceremonyAttend = document.getElementById('ceremony-attend');
var eveningAttend = document.getElementById('evening-attend');

if (ceremonyAttend.addEventListener) {
  ceremonyAttend.addEventListener('click', function(){
  ceremonyAttendClick()
  }, false);
} else if (ceremonyAttend.attachEvent) {
  ceremonyAttend.attachEvent('onclick', function(){
  ceremonyAttendClick()
  });
};

function eveningAttendClick() {
  var formClass = document.getElementsByClassName('form')
  for (var i = 4; i < formClass.length; i++ ) {
    if (formClass[i].classList.contains('form-hidden')) {
    } else {
      formClass[i].classList.add('form-hidden');
    };
  }
}

if (eveningAttend.addEventListener) {
  eveningAttend.addEventListener('click', function(){
  eveningAttendClick()
  }, false);
} else if (eveningAttend.attachEvent) {
  eveningAttend.attachEvent('onclick', function(){
  eveningAttendClick()
  });
};

function ceremonyAttendClick() {
  var formClass = document.getElementsByClassName('form')
  for (var i = 3; i < formClass.length; i++ ) {
    if (formClass[i].classList.contains('form-hidden')) {
      formClass[i].classList.remove('form-hidden');
    };
  }
}
