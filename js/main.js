// our skill scroll animation
ourSkills = document.querySelector("#our-skills");
progress = document.querySelectorAll(".progress");
window.addEventListener("scroll",function(){
    if(window.scrollY >= ourSkills.offsetTop - 200){
        progress.forEach(ele => {
            ele.children[0].style.width = ele.children[0].dataset.width
        });
    }
});


// Our Awesome Stats scroll animation
stat = document.querySelector("#stats");
counter = document.querySelectorAll(".card span");
let started = false; //function not started

window.addEventListener("scroll", function () {
  if (window.scrollY >= stat.offsetTop - 300) {
    if (!started) {
      counter.forEach((span) => countUp(span));
    }
    started = true;
  }
});
function countUp(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

