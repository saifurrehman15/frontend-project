$(".slider-wrrp").slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  autoplay: true,
  autoplayspeed: 2000,
  nextArrow: ".bnner-slider-btn.next",
  prevArrow: ".bnner-slider-btn.pre",
});

$(".slider-wrrp-2").slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: false,
  rtl: false,
  infinite: true,
  arrows: true,
  speed: 500,
  autoplay: true,
  autoplayspeed: 2000,
  cssEase: "linear",
  nextArrow: ".bnner-slider-btn.next",
  prevArrow: ".bnner-slider-btn.pre",
});

const btns = document.querySelectorAll(".btn-area button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((elem) => elem.classList.remove("active"));
    btn.classList.add("active")
  });
});
