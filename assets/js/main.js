new Swiper('.swiper', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
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
  strings: ["Experience with ODIDOTNET", "Hire me as Web Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})

console.log('Hello World');