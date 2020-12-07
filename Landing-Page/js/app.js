/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Two variables for the navPopulator function - first one is for .innerHTML
const nav_ul = document.getElementById("navbar__list"); // or document.querySelector('ul');
// Second variable is for list of sections to loop over
const sectionList = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Setup functions to check for distance from top and to add or remove active class.
const topCheck = function(section) {
    return section.getBoundingClientRect().top;
};

const inactivated = function(section) {
    section.classList.remove('your-active-class');
};

const activated = function(topCheck, section) {
    if (topCheck) {
        section.classList.add('your-active-class');
    };
};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navPopulator = function() {
    let _innerUl = "";
    sectionList.forEach(function(section) {
        
        _innerUl += `<li><a class="menu__link" href="#${section.id}">${section.dataset.nav}</li></a>`;
    });
    nav_ul.innerHTML = _innerUl;
;};

        

// Add class 'active' to section when near top of viewport
const sectionActivator = function()

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navPopulator();
// Scroll to section on link click
sectionActivator();
// Set sections as active
