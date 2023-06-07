const btn = document.getElementById('btn')
const mobilemenu= document.getElementById('mobilemenu')
const close = document.getElementById('close')
const mobileoverlay = document.getElementById('mobile-overlay')
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