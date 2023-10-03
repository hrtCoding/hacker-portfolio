/**
* Template Name: MyResume
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
"use strict";

/**
* Easy selector helper function
*/
const select = (el, all = false) => {
el = el.trim()
if (all) {
return [...document.querySelectorAll(el)]
} else {
return document.querySelector(el)
}
}





const typed = select('.typed')
if (typed) {
let typed_strings = typed.getAttribute('data-typed-items')
typed_strings = typed_strings.split(',')
new Typed('.typed', {
strings: typed_strings,
loop: true,
typeSpeed: 100,
backSpeed: 50,
backDelay: 2000
});
}


/**
* Animation on scroll
*/
window.addEventListener('load', () => {
AOS.init({
duration: 1000,
easing: 'ease-in-out',
once: true,
mirror: false
})
});

/**
* Initiate Pure Counter 
*/
new PureCounter();

})()