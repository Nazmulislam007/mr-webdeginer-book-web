const header2 = document.querySelector(".header-2");
const searchBtn = document.querySelector("#search-btn");
const searchForm = document.querySelector(".search-form");
const login = document.querySelector("#login-btn");
const loginContainer = document.querySelector(".login-form-container");
const closeLoginBtn = document.querySelector("#close-login-btn");
const loader = document.querySelector(".loader-container");

window.onscroll = () => {
  if (window.scrollY > 80) {
    header2.classList.add("active");
  } else {
    header2.classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    header2.classList.add("active");
  } else {
    header2.classList.remove("active");
  }
  fadeOut();
};

const loaders = () => {
  loader.classList.add("active");
};

function fadeOut() {
  setTimeout(() => {
    loaders();
  }, 2000);
}

// search button toggle
searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

// login-form-container toggle
login.addEventListener("click", () => {
  loginContainer.classList.add("active");
});

closeLoginBtn.addEventListener("click", () => {
  loginContainer.classList.remove("active");
});

// swiper slider
var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
