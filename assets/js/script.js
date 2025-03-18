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

$(".brand-slider").slick({
  slidesToShow: 6,
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


const btnTab1 = document.querySelectorAll(".btn-area button");
const btnTab2 = document.querySelectorAll(".tab-area button");
const btnTab3 = document.querySelectorAll(".tabs-btn-2 button");
console.log(btnTab3);

const tabs = (btns) => {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((elem) => elem.classList.remove("active"));
      btn.classList.add("active");
    });
  });
};

tabs(btnTab1);
tabs(btnTab2);
tabs(btnTab3);
