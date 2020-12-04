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
// Setup NavBar variables based on element, id etc.
// Assigns target element for .innerHTML
// const navParent = document.querySelector('ul'); works as well, but instructions say to use id!
const navParent = document.getElementById("navbar__menu");
// Makes an array/list to loop over from element because all the other identifiers have unique info and class has to change based on viewport.
const sectionList = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Checks when section element is close to top of viewport
const topCheck = function(section) {
    return section.getBoundingClientRect().top;
};
// Removes active class from section
const inactivatedSection = function(section) {
    section.classList.remove('your-active-class');
};
// Adds active class to section
const activatedSection = function(topCheck, section) {
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
    // Sets the target region to an empty string
    let navInnerSpace = "";
    // Loops over list of section elements
    sectionList.forEach(function(section) {
        // Adds HTML string and anchors to menu and populates li node with section data attributes
        navInnerSpace += `<li><a class="menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`;
    });
    navParent.innerHTML = navInnerSpace;
};

// Add class 'active' to section when near top of viewport
const sectionActivator = function() {
    sectionList.forEach(function(section) {
        let checkTop = topCheck(section);
        
        
    });
};

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navPopulator();
// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', sectionActivator);