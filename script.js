const btn = document.getElementById('btn')
const mobilemenu= document.getElementById('mobilemenu')
const close = document.getElementById('close')
const mobileoverlay = document.getElementById('mobile-overlay')
const home = document.getElementById('home')
const about = document.getElementById('about')
const portfiolo = document.getElementById('project')
const contact= document.getElementById('contact')
const services= document.getElementById('services')

btn.addEventListener('click', navToggle)
function navToggle() {  
    mobilemenu.classList.toggle('right-0')
    mobilemenu.classList.toggle('right-[-300px]')
    mobileoverlay.classList.toggle('block')
    mobileoverlay.classList.toggle('hidden')
} 
close.addEventListener('click', navToggle)
function navToggle() {
    mobilemenu.classList.toggle('right-[-300px]')
    mobilemenu.classList.toggle('right-0')
    mobileoverlay.classList.toggle('hidden')
    mobileoverlay.classList.toggle('block')
} 
home.addEventListener('click', navToggle)
function navToggle() {
    mobilemenu.classList.toggle('right-[-300px]')
    mobilemenu.classList.toggle('right-0')
    mobileoverlay.classList.toggle('hidden')
    mobileoverlay.classList.toggle('block')
} 
about.addEventListener('click', navToggle)
function navToggle() {
    mobilemenu.classList.toggle('right-[-300px]')
    mobilemenu.classList.toggle('right-0')
    mobileoverlay.classList.toggle('hidden')
    mobileoverlay.classList.toggle('block')
} 
portfiolo.addEventListener('click', navToggle)
function navToggle() {
    mobilemenu.classList.toggle('right-[-300px]')
    mobilemenu.classList.toggle('right-0')
    mobileoverlay.classList.toggle('hidden')
    mobileoverlay.classList.toggle('block')
} 
contact.addEventListener('click', navToggle)
function navToggle() {
    mobilemenu.classList.toggle('right-[-300px]')
    mobilemenu.classList.toggle('right-0')
    mobileoverlay.classList.toggle('hidden')
    mobileoverlay.classList.toggle('block')
} 
services.addEventListener('click', navToggle)
function navToggle() {
    mobilemenu.classList.toggle('right-[-300px]')
    mobilemenu.classList.toggle('right-0')
    mobileoverlay.classList.toggle('hidden')
    mobileoverlay.classList.toggle('block')
} 
const element = document.querySelector("#myP");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(element);