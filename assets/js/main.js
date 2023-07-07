new Swiper('.swiper', {
  speed: 550,
  loop: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

// code my typedjs
var typed = new Typed(".auto-type", {
  strings: ["Hire me as a Web Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})

console.log('Hello World');

if (typeof particlesJS !== 'undefined') {
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}