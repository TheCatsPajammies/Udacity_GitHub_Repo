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
const nav_ul = document.getElementById("navbar__list");
// Second variable is for list of sections to loop over
const sectionList = document.querySelectorAll("section");
// Third variable is to assign scrollTo section on click
const nav_links = document.querySelectorAll("a");










/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Function checks element distance from top and returns true/boolean value 
const isInViewport = function(element) {
    const distance = element.getBoundingClientRect();
    return (
        distance.top <= 100 &&
        distance.left >= 0 &&
        distance.bottom >= 100 &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth));
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
 //build the nav
const navPopulator = function() {
    sectionList.forEach(function(section) {
        nav_ul.innerHTML += `<li><a class="menu__link ${section.id}" href="#${section.id}">${section.dataset.nav}</a></li>`;    
    });
}


// Add class 'active' to section and to list items/anchors when section is near top of viewport

const sectionActivator = function () {
    sectionList.forEach(function (section) {
        const nav_link = document.querySelector(`.${section.id}`);
        if (isInViewport(section)) {
            section.classList.add("your-active-class");
            nav_link.classList.add("active-class");
        } else {
            section.classList.remove("your-active-class");
            nav_link.classList.remove("active-class");
        }
    })
}



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
document.addEventListener("scroll", sectionActivator)
  





