let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

let back_to_top = document.querySelector('.back_to_top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    back_to_top.classList.add('show');
  } else {
    back_to_top.classList.remove('show');
  }
});
 document.querySelector('.back_to_top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
document.getElementById('address').addEventListener('click', function () {
  window.scrollTo({
      top: 80000,
      behavior: 'smooth'
  });
});
const navBar = document.querySelector('.nav');
// Add a scroll event listener
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    // Show the sticky navigation bar when scrolled down
    navBar.classList.add('sticky-nav');
  } else {
    // Hide the sticky navigation bar when at the top
    navBar.classList.remove('sticky-nav');
  }
});
function nonePerson(){
  confirm("Vui lòng đăng nhập tài khoản và mật khẩu")
}