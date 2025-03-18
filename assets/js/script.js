$(".slider-wrrp").slick({
  slidesToShow: 4,
  dots: false,
  infinite: true,
  arrows: true,
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  nextArrow: ".bnner-slider-btn.next",
  prevArrow: ".bnner-slider-btn.pre",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

$(".slider-wrrp-2").slick({
  slidesToShow: 4,
  dots: false,
  infinite: true,
  arrows: true,
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  nextArrow: ".bnner-slider-btn.next",
  prevArrow: ".bnner-slider-btn.pre",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

const btns = document.querySelectorAll(".btn-area button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((elem) => elem.classList.remove("active"));
    btn.classList.add("active");
  });
});
