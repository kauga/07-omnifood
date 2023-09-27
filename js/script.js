const  btnNavEl = document.querySelector('.btn-mobile-nav');
const  headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll("a:link");
 allLinks.forEach(function(link) {
link.addEventListener("click", function(e) {
e.preventDefault();
const href = link.getAttribute("href");
// console.log(href);
//scrolling back to top

if (href === "#") window.scrollTo({
  top: 0,
  behavior: "smooth",
});
//scrolling to another link
 if (href !== "#" && href.startsWith("#")) {
  const section  = document.querySelector(href);
  section.scrollIntoView({behavior:"smooth"});
 }

 //close mobile navigation
 if (link.classList.contains("main-nav-link"))
 headerEl.classList.toggle("nav-open");
});
 });

 //stick navigation
 const sectionHeroEL = document.querySelector(".section-hero");
 const obs = new IntersectionObserver(function(entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false)
  document.body.classList.add("sticky");
 }, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
 })
 obs.observe(sectionHeroEL);