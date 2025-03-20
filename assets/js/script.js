

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
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
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
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
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

const video = document.querySelector(".video-area"),
  playBtn = document.querySelector(".play-btn"),
  liveBtn = document.querySelector(".live-btn"),
  rangeInp = document.querySelector(".range_inp"),
  time = document.querySelector(".time_audio"),
  fullScreenBtn = document.querySelector(".expand"),
  downloadBtn = document.querySelector(".download-video"),
  settingBtn = document.querySelector(".setting-btn"),
  drpMenu = document.querySelector(".setting-drp");

if (video) {
  // playing video
  playBtn.addEventListener("click", () => {
    playBtn.classList.remove("active");
    video.play();
  });

  video.addEventListener("timeupdate", () => {
    let currentTime = Math.floor(video.currentTime);
    let currentDur = currentTime % 60;

    time.innerText =
      currentTime < 60
        ? `00:${currentTime < 10 ? "0" + currentTime : currentTime}`
        : `${Math.floor(currentTime / 60)}:${
            currentDur < 10 ? "0" + currentDur : currentDur
          }`;

    rangeInp.value = (video.currentTime / video.duration) * 100;

    if (video.currentTime == video.duration) {
      playBtn.classList.add("active");
    }
  });

  rangeInp.addEventListener("change", () => {
    playBtn.classList.add("active");
    video.pause();
    video.currentTime = (rangeInp.value / 100) * video.duration;
  });

  liveBtn.addEventListener("click", () => {
    video.currentTime = video.duration;
  });

  fullScreenBtn.addEventListener("click", () => {
    video.requestFullscreen();
  });

  downloadBtn.addEventListener("click", () => {
    let elem = document.createElement("a");
    elem.href = video.src;
    elem.download = "video/mp3";
    elem.click();
    drpMenu.classList.remove("active");
  });

  settingBtn.addEventListener("click", () => {
    if (drpMenu.classList.contains("active")) {
      drpMenu.classList.remove("active");
    } else {
      drpMenu.classList.add("active");
    }
  });

  video.addEventListener("click", () => {
    drpMenu.classList.remove("active");
    playBtn.classList.add("active");
    video.pause();
  });
}
