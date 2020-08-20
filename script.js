/**
 * MENU TOGGLE
 */

document.documentElement.className = "js";

var menu = document.querySelector( '.menu' );
var button = document.querySelector('.nav-toggle');
var dropdown = document.querySelector('.dropdown');

button.onclick = function() {
    classie.toggle( menu, 'menu-active' );
};

document.addEventListener('click', function(event) {
    if (event.target !== dropdown && !dropdown.contains(event.target)) {
        // hide the menu
      classie.removeClass(menu, "menu-active");
    }
});


( function( window ) {

'use strict';

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};


if ( typeof define === 'function' && define.amd ) {
  define( classie );
} else if ( typeof exports === 'object' ) {
  module.exports = classie;
} else {
  window.classie = classie;
}

})( window );

/** */


/**
 * VALIDATE A INPUT FIELD
 */

var yesChecked = document.querySelector('#yes-checked');
var noChecked = document.querySelector('#no-checked');
var initialHour = document.querySelector('#initial-hour');
var finalHour = document.querySelector('#final-hour');

noChecked.addEventListener('change', enableInput);
yesChecked.addEventListener('change', disabledInput);

function enableInput() {
    initialHour.disabled = false;
    finalHour.disabled = false;
}
function disabledInput() {
  initialHour.disabled = true;
  finalHour.disabled = true;
} 
