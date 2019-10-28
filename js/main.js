document.addEventListener('DOMContentLoaded', function(){ 
    
//const variables
const mobileMenu = document.getElementById('mobile__menu__modal');
const nav = document.getElementById('nav');
const year = document.getElementById('year');
const body = document.getElementById('body');

//let variables
let currentYear = new Date().getFullYear(); 

//updated text content to current year
year.textContent += currentYear;


//click events
document.getElementById('mobile__menu__toggle').addEventListener('click', toggleMobileMenu);
document.getElementById('close').addEventListener('click',toggleMobileMenu);
var accordionSections = document.querySelectorAll('.accordion__section');

for(const section of accordionSections){
    section.addEventListener('click',toggleAccordion);
}



//scroll events
window.addEventListener('scroll',toggleStickyHeader);


//toggle mobile menu function
function toggleMobileMenu(){
    mobileMenu.classList.toggle('active');
    body.classList.toggle('body--no-scroll');
};

//toggle sticky header function
function toggleStickyHeader(){
    if(window.pageYOffset >= 500){
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
}

//toggle Accordion function
function toggleAccordion(){
    this.classList.toggle('active');
}


}, false);