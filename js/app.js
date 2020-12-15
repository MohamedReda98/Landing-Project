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




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// first project

// build the nav
    // variable decleration
const sections = document.querySelectorAll("section"),  //to select all sections
    frag = document.createDocumentFragment(),         //add a new fragment to add all changes to it so that more code efficiency
    activeClass = "your-active-class",                //class which active variable
    activeLink = "your-active-link";                  //link which active variable
let nowviewID = "",                                   // variable to store active section
    nowviewN = 5000;                                  // variable to reset data from recp function
// create our nav bar
sections.forEach(function(el){      //to get all sections to check and make links
  // variable decleration
  let li = document.createElement("li"),        // create lists
      a = document.createElement("a"),          // create links
      id = el.getAttribute("id"),           // get id name of this section
      dn = el.getAttribute("data-nav");     // get data nav attribute for this section
  a.setAttribute("href",`#${id}`);    // set link of this section to new link
  a.textContent = dn;                                   // add name of section to link
  li.setAttribute("data-nav",id);           // set id as a data nav to link this with section
  li.appendChild(a);                                    // append link to list
  li.style.minWidth = "90px";                           // for smooth view
  el.scrollIntoView({behavior:"smooth"});           // for smooth transition
  frag.appendChild(li);                                 // append list to fragment
  })                                                    // end for each function
// get navbar element and append fragment to it
const nav_Bar = document.getElementById("navbar__list");
nav_Bar.appendChild(frag);
// select all lists to variable
const list = document.querySelectorAll("li");

// view of active section and links
  // know the active section
let ul = document.querySelector(".page__header");
nowview();                                     // call of this method for first time
function nowview(){sections.forEach(function(el) { // call of this method for every time to scroll or change view
  visible();
  let id = el.getAttribute("id"), // get id name of this section
      rect = el.getBoundingClientRect(),      // get top coordinates for this section
      y = Math.abs(rect.top);                 // get the positive values to be compared
  if (y < nowviewN) {                         // check if the new value is the least so that its it is the nearest section to your eyes
    nowviewID = id;                           // change the now view id
    nowviewN = y;                             // change the now view top values to next compare
  }
})
  nowviewN = 50000;                           // make value so high to get new active compare
  // change the class name of the active section
  sections.forEach(function (el){   //to select all sections
    let id = el.getAttribute("id");          // get id name of this section
    if (id !== nowviewID){                               // check if this isn't active one
      el.classList.remove(activeClass);                  // remove active section class
    }
    else {
      el.classList.add(activeClass);                     // add active section class
    }
  })
  // know the active link
  list.forEach(function (el) {
    let dn = el.getAttribute("data-nav"); // get the id of list
    if (dn === nowviewID){                            // check if this is the active one
      el.classList.add(activeLink);                   // add active link class
    }
    else {
      el.classList.remove(activeLink);                // remove active link class
    }
  })
  delay();
}
document.addEventListener("scroll" , nowview);  // recheck every scroll so we can get the exact data all time
function delay() {
  if (ul.hidden === false){setTimeout(ul.hidden = true,3000)}
}
function visible() {
  if (ul.hidden === true){ul.hidden = false}
}
// thank you for your time
// Eng Mohamed Reda Mostafa


/**
 * End Main Functions
 * Begin Events
 * 
*/


