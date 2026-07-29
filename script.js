document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(8,12,24,0.95)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.6)";
  }
});
const cards=document.querySelectorAll(".card,.project-card");

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.animate([
{opacity:0,transform:"translateY(60px)"},
{opacity:1,transform:"translateY(0px)"}
],{
duration:700,
fill:"forwards"
});
}
});
});

cards.forEach(card=>observer.observe(card));
const roles = [
"AI Content Writer",
"Website Developer",
"Prompt Engineer"
];

let roleIndex = 0;

setInterval(() => {
document.getElementById("typing-text").textContent = roles[roleIndex];
roleIndex = (roleIndex + 1) % roles.length;
}, 2000);
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const updateCounter = () => {
        const increment = Math.ceil(target / 50);

        if (count < target) {
          count += increment;
          if (count > target) count = target;

          if (target === 100) {
            counter.innerText = count + "%";
          } else {
            counter.innerText = count + "+";
          }

          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
});

counters.forEach(counter => counterObserver.observe(counter));