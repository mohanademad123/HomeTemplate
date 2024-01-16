class Menu {
  constructor() {
    this.menuHeader = document.getElementById('menu');
    this.headerLinks = document.querySelector('.header_container .header_links');
    this.header = document.querySelector('header');
    this.addEventListeners();
  }

  addEventListeners() {
    this.menuHeader.addEventListener('click', () => {
      if (this.headerLinks.classList.contains('active')) {
        this.menuHeader.textContent = 'menu';
      } else {
        this.menuHeader.textContent = 'close';
      }
      this.headerLinks.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        this.header.classList.add('active');
      } else {
        this.header.classList.remove('active');
      }
    });

    window.addEventListener("scroll", () => {
      if (this.headerLinks.classList.contains('active') || this.menuHeader.textContent === 'close') {
        this.headerLinks.classList.remove('active');
        this.menuHeader.textContent = 'menu';
      }
    });
  }
}

class SwiperSlider {
  constructor() {
    this.swiper = new Swiper(".slider_container", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      centerSlide: true,
      grabCursor: true,
      fade: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      },
    });
  }
}

class ImagePopup {
  constructor() {
    this.images = [...document.querySelectorAll('.imageing')];
    this.popup = document.querySelector('.popup');
    this.closeBtn = document.querySelector('.close-btn');
    this.largeImage = document.querySelector('.large-image');
    this.imageIndex = document.querySelector('.index');
    this.leftArrow = document.querySelector('.left-arrow');
    this.rightArrow = document.querySelector('.right-arrow');
    this.currentIndex = 0;
    this.addEventListeners();
  }

  addEventListeners() {
    this.images.forEach((item, i) => {
      item.addEventListener('click', () => {
        this.updateImage(i);
        this.popup.classList.toggle('active');
      });
    });

    this.closeBtn.addEventListener('click', () => {
      this.popup.classList.toggle('active');
    });

    this.leftArrow.addEventListener('click', () => {
      if (this.currentIndex > 0) {
        this.updateImage(this.currentIndex - 1);
      }
    });

    this.rightArrow.addEventListener('click', () => {
      if (this.currentIndex < this.images.length - 1) {
        this.updateImage(this.currentIndex + 1);
      }
    });
  }

  updateImage(index) {
    let path = `./image/product_${index + 1}.avif`;
    this.largeImage.src = path;
    this.imageIndex.innerHTML = `0${index + 1}`;
    this.currentIndex = index;
  }
}

// Usage
const menu = new Menu();
const swiperSlider = new SwiperSlider();
const imagePopup = new ImagePopup();