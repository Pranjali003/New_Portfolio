// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Navbar color / shadow changes on scroll (sticky best-practice).
// Uses IntersectionObserver for better performance than scroll handlers. :contentReference[oaicite:1]{index=1}
const nav = document.getElementById('nav');
const hero = document.getElementById('home');
const obs = new IntersectionObserver(
  ([e]) => nav.classList.toggle('scrolled', !e.isIntersecting),
  { rootMargin: "-70px 0px 0px 0px", threshold: [1] }
);
obs.observe(hero);

// Smooth section reveal
const reveals = document.querySelectorAll('.reveal');
const rObs = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      en.target.classList.add('visible');
      rObs.unobserve(en.target);
    }
  });
},{threshold:.15});
reveals.forEach(el=>rObs.observe(el));

// Fancy hover states: add active underline on current section
const links = document.querySelectorAll('.nav-link');
const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));
const spy = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    const id = '#' + en.target.id;
    const link = document.querySelector(`.nav-link[href="${id}"]`);
    if (en.isIntersecting){
      links.forEach(a=>a.classList.remove('active'));
      link?.classList.add('active');
    }
  });
},{threshold:.6});
sections.forEach(s=>spy.observe(s));


