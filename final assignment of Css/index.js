


const hamburger = document.getElementById('hamburger');
const topLinelist = document.getElementById('toplineRightside');
const navhamburger = document.getElementById('navhamburger');
const navbarList = document.getElementById('navbarList');

hamburger.addEventListener('click', () => {
    topLinelist.classList.toggle('active');
});

navhamburger.addEventListener('click', () => {
    navbarList.classList.toggle('active');    
})