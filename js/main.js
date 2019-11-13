document.addEventListener('DOMContentLoaded', function(){ 
    
//const variables
const mobileMenu = document.getElementById('mobile__menu__modal');
const nav = document.getElementById('nav');
const year = document.getElementById('year');
const body = document.getElementById('body');
const logo = document.getElementById('logo');
const bannerLogo = document.getElementById('banner__logo');
const video01 = document.getElementById('video__01');
const video02 = document.getElementById('video__02');

//let variables
const currentYear = new Date().getFullYear(); 

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
window.addEventListener('scroll',toggleLogo);
window.addEventListener('scroll',switchVideo);

//toggle mobile menu function
function toggleMobileMenu(){
    mobileMenu.classList.toggle('active');
    body.classList.toggle('body--no-scroll');
};

//toggle sticky header function
function toggleStickyHeader(){
    if(window.pageYOffset >= document.documentElement.clientHeight){
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
}
//toggle logo
function toggleLogo(){
    if(window.pageYOffset >= document.documentElement.clientHeight * 0.05){
            logo.classList.add('fadeIn');
        if(bannerLogo !== null){
            bannerLogo.classList.add('fadeOut');
        }
    }else {
            logo.classList.remove('fadeIn');
        if(bannerLogo !== null){
            bannerLogo.classList.remove('fadeOut');
        }
    }
}
function switchVideo(){
    if(window.pageYOffset <= document.documentElement.clientHeight * .99){
        if(document.getElementById("video__01") && document.getElementById("video__02")){
            video01.classList.add('z__01');
            video02.classList.remove('z__01');
        }
    }else{
        if(document.getElementById("video__01") && document.getElementById("video__02")){
            video01.classList.remove('z__01');
            video02.classList.add('z__01');
        }
    }
}

//toggle Accordion function
function toggleAccordion(){
    this.classList.toggle('active');
}


}, false);