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
// Two variables for the navPopulator function - first one is for .innerHTML/appendChild
const navUl = document.getElementById("navbar__list");
// Second variable is for list of sections to loop over
const sectionList = document.querySelectorAll("section");





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// isInViewport checks element distance from top and returns true/boolean value 
const isInViewport = function(elem) {
    const distance = elem.getBoundingClientRect();
    return (
        distance.top <= 100 &&
        distance.left >= 0 &&
        distance.bottom >= 100 &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth));
}

/**
 * End Helper Functions
 * Begin Main Functions
 * // original code - didn't allow for event listener so I had to break it down and add the event listener to <li> instead.
*/ // navUl.innerHTML += `<li><a class="menu__link ${section.id}" href="#${section.id}">${section.dataset.nav}</a></li>`;
 //build the nav
// I ended up using this code because it worked the best with the parameters of the assignment
 const navPopulator = function() {
    sectionList.forEach(function(section) {
        let intermediate = document.createElement("li");
        let scroll_target = document.getElementById(section.id);
        intermediate.className = `menu__link ${section.id}`;
        intermediate.innerHTML = `${section.dataset.nav}`;
        intermediate.addEventListener('click', function () {
            scroll_target.scrollIntoView({ behavior: "smooth", block: "start"})
        })
        navUl.appendChild(intermediate);
    });
}

/* Couldn't get this version to work because I wanted to attach the event listener to the <a> tag - any advice??
const navPopulator = function() {
    sectionList.forEach(function(section) {
        let intermediate = document.createElement("li");
        let scroll_target = document.getElementById("section");
        let intermediate_2 = document.createElement("a");
            intermediate_2.className = `class="menu__link ${section.id}`;
            intermediate_2.href = `#${section.id}`;
            intermediate_2.innerHTML = `${section.dataset.nav}`;
            intermediate_2.addEventListener('click', function () {
                scroll_target.scrollIntoView({ behavior: "smooth", block: "start"});
        })
        intermediate.appendChild(intermediate_2);
        console.log(intermediate.appendChild(intermediate_2));
        navUl.appendChild(intermediate.appendChild(intermediate_2));
    });
}
*/

// Add class 'active' to section and to list items/anchors when section is near top of viewport
const sectionActivator = function () {
    sectionList.forEach(function (section) {
        const navLink = document.querySelector(`.${section.id}`);
        if (isInViewport(section)) {
            section.classList.add("your-active-class");
            navLink.classList.add("active-class");
        } else {
            section.classList.remove("your-active-class");
            navLink.classList.remove("active-class");
        }
    })
}






/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
navPopulator();


// Set sections as active
document.addEventListener("scroll", sectionActivator);
 




